import Constants from "../src/constants.js";
import TestConstants from "./src/testing-constants.js";
import Window from "../src/window.js";
import Repla from "../src/repla.js";
import fs from "fs";

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
  Repla.loadPlugin(TestConstants.SERVER_PLUGIN_FILE);
  let windowId = Repla.runPlugin(
    TestConstants.SERVER_PLUGIN_NAME,
    TestConstants.HTML_DIRECTORY
  );
  let window = new Window(windowId);
  expect(window.windowId).toBe(windowId);
  fs.readFile(TestConstants.TITLE_JS_FILE, null, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
  window.close();
});
