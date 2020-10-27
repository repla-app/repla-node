const Constants = require("../src/constants.js");
const TestConstants = require("./src/testing-constants.js");
const Window = require("../src/window.js");
const Repla = require("../src/repla.js");
const fs = require("fs");

test("Sets window ID from environment", () => {
  const windowId = 1;
  process.env[Constants.WINDOW_ID_KEY] = windowId;
  const window = new Window();
  expect(window.windowId).toBe(windowId);
  delete process.env[Constants.WINDOW_ID_KEY];
});

test("Open and close a window", () => {
  const window = new Window();
  const windowId = window.windowId;
  expect(windowId).not.toBeNull();
  window.close();
});

test("Load a file and URL", () => {
  Repla.debug = true; // FIXME:
  Repla.loadPlugin(TestConstants.SERVER_PLUGIN_FILE);
  const windowId = Repla.runPlugin(
    TestConstants.SERVER_PLUGIN_NAME,
    TestConstants.HTML_DIRECTORY
  );
  const window = new Window(windowId);
  expect(window.windowId).toBe(windowId);
  const titleJS = fs.readFileSync(TestConstants.TITLE_JS_FILE).toString();
  window.loadFile(TestConstants.HTML_FILE);
  const result = window.doJavaScript(titleJS);
  // TODO: Add back when coerce function is tested
  // expect(result).toBe(TestConstants.HTML_TITLE);
  window.close();
  Repla.debug = false; // FIXME:
});
