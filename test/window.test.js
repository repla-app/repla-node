const Constants = require("../src/constants.js");
const TestConstants = require("./src/testing-constants.js");
const Window = require("../src/window.js");
const Repla = require("../src/repla.js");
const fs = require("fs");

describe('Nothing', () => {
  test("Sets window ID from environment", () => {
    const windowId = 1;
    process.env[Constants.WINDOW_ID_KEY] = windowId;
    const window = new Window();
    expect(window.windowId).toBe(windowId);
    delete process.env[Constants.WINDOW_ID_KEY];
  });  
});

describe('Make window', () => {
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

// describe('Load plugin and make window', () => {
// });

describe('Load plugin and make window', () => {
  let window;
  beforeEach(() => {
    Repla.debug = true; // FIXME:
    Repla.loadPlugin(TestConstants.SERVER_PLUGIN_FILE);
    const windowId = Repla.runPlugin(
      TestConstants.SERVER_PLUGIN_NAME,
      TestConstants.HTML_DIRECTORY
    );
    window = new Window(windowId);
    expect(window.windowId).toBe(windowId);  
  });

  afterEach(() => {
    window.close();
    Repla.debug = false; // FIXME:
  });

  test("Load a file and URL", () => {
    const titleJS = fs.readFileSync(TestConstants.TITLE_JS_FILE).toString();
    window.loadFile(TestConstants.HTML_FILE);
    const result = window.doJavaScript(titleJS);
    // FIXME: Why don't these values match?
    console.log("result = " + result);
    console.log("TestConstants.HTML_TITLE = " + TestConstants.HTML_TITLE);
    // expect("Index A").toBe("Index B");
    expect(result.toString()).toBe(TestConstants.HTML_TITLE.toString());
  });  
});

