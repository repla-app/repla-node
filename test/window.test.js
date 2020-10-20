import Constants from "../src/constants.js";
import Window from "../src/window.js";

test("Sets window ID from environment", () => {
  const windowId = 1
  process.env[Constants.WINDOW_ID_KEY] = windowId;
  const window = new Window();
  expect(window.windowId).toBe(windowId);
  delete process.env[Constants.WINDOW_ID_KEY];
});

test("Open and close a window", () => {
  const window = new Window();
  const windowId = window.windowId;
  expect(windowId).not.toBeNull();
  window.close()
});
