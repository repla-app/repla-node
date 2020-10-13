import { WINDOW_ID_KEY } from "../src/constants.js";
import Repla from "repla.js"

export default class Window {
  constructor(windowId) {
    Object.defineProperty(this, "windowId", {
      get: function () {
        if (this._windowId) {
          return this._windowId;
        }
        this._windowId = Number(process.env[WINDOW_ID_KEY]);
        if (this._windowId) {
          return this._windowId;
        }
        this._windowId = Repla.createWindow();
        return this._windowId;
      },
    });
  }
  loadUrl() {
    return null;
  }
  windowId() {
    return null;
  }
  close() {
    Repla.runAppleScript(CLOSE_WINDOW_SCRIPT);
  }
}
