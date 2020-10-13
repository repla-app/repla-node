import { WINDOW_ID_KEY } from "../src/constants.js";
import Window from "../src/window.js";

test("sets windowId from environment", () => {
  const windowId = 1
  process.env[WINDOW_ID_KEY] = windowId;
  const window = new Window();
  expect(window.windowId).toBe(windowId);
});

test("open and close a window", () => {
  const window = new Window();
  const windowId = window.windowId;
  expect(windowId).not.toBeNull();
  window.close()
});
