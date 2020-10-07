import { WINDOW_ID_KEY } from "../src/constants.js";

export default class Window {
  constructor(windowId) {
    Object.defineProperty(this, "windowId", {
      get: function () {
        if (this._windowId) {
          return this._windowId;
        }
        this._windowId = process.env[WINDOW_ID_KEY];
        if (this._windowId) {
          return this._windowId;
        }
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
}
