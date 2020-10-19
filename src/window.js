import Constants from "../src/constants.js";
import Repla from "./repla.js"

export default class Window {
  constructor(windowId) {
    this._windowId = windowId;
    Object.defineProperty(this, "windowId", {
      get: function () {
        if (this._windowId) {
          return this._windowId;
        }
        this._windowId = Number(process.env[Constants.WINDOW_ID_KEY]);
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
    Repla.runAppleScript([Constants.CLOSE_WINDOW_SCRIPT, this.windowId]);
  }
}
