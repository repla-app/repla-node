import { WINDOW_ID_KEY } from "../src/constants.js";
import Window from "../src/window.js";

test("sets windowId from environment", () => {
  const windowId = 1
  process.env[WINDOW_ID_KEY] = windowId;
  var window = new Window();
  expect(window.windowId).toBe(windowId);
});
