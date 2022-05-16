const Constants = require("../src/constants.js");
const TestConstants = require("./src/testing-constants.js");
const Testing = require("./src/testing.js");
const Window = require("../src/window.js");
const Repla = require("../src/repla.js");
const fs = require("fs");

describe("Nothing", () => {
  test("Sets window ID from environment", () => {
    const windowId = 1;
    process.env[Constants.WINDOW_ID_KEY] = windowId;
    const window = new Window();
    expect(window.windowId).toBe(windowId);
    delete process.env[Constants.WINDOW_ID_KEY];
  });
});

describe("Make window", () => {
  let window;
  beforeEach(() => {
    window = new Window();
  });

  afterEach(() => {
    window.close();
  });

  test("Open and close a window", () => {
    const windowId = window.windowId;
    expect(windowId).not.toBeNull();
  });
});

describe("Load plugin and make window", () => {
  let window;
  const titleJS = fs.readFileSync(TestConstants.TITLE_JS_FILE).toString();
  beforeEach(() => {
    Repla.loadPlugin(TestConstants.SERVER_PLUGIN_FILE);
    const windowId = Repla.runPlugin(
      TestConstants.SERVER_PLUGIN_NAME,
      TestConstants.HTML_DIRECTORY
    );
    window = new Window(windowId);
    expect(window.windowId).toBe(windowId);
  });

  afterEach(() => {
    // window.close();
  });

  test("Load a file and URL", () => {
    window.loadFile(TestConstants.HTML_FILE);
    let result = window.doJavaScript(titleJS);
    expect(result).toBe(TestConstants.HTML_TITLE);
    window.loadURL(TestConstants.HTML_JQUERY_URL);
  });

  test("Reload", async () => {
    const options = {
      shouldClearCache: true,
    };
    let port;
    await Testing.blockUntil(() => {
      let result = window.doJavaScript(titleJS);
      if (/^\d+$/.test(result)) {
        port = result;
        return true;
      }
      return false;
    });
    expect(/^\d+$/.test(port)).toBeTruthy();
    window.loadURL(TestConstants.HTML_URL_FOR_PORT(port), options);
    await Testing.blockUntil(() => {
      let result = window.doJavaScript(titleJS);
      return result === TestConstants.HTML_TITLE;
    });
    let result = window.doJavaScript(titleJS);
    expect(result).toBe(TestConstants.HTML_TITLE);
    const newTitle = "Changed";
    expect(newTitle).not.toBe(result);
    window.doJavaScript(`document.title = '${newTitle}'`);
    result = window.doJavaScript(titleJS);
    expect(result).toBe(newTitle);
    window.reload();
    result = window.doJavaScript(titleJS);
    expect(result).toBe(TestConstants.HTML_TITLE);
  });
});
