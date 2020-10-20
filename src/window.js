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
  loadUrl(url, options) {
    let args = [url];
    let shouldClearCache = options['shouldClearCache']
    var script;
    if (shouldClearCache) {
      script = Constants.LOAD_URL_SCRIPT;
    } else {
      args.push(shouldClearCache);
      script = Constants.LOAD_URL_CACHE_SCRIPT;
    }
    return Repla.runAppleScript([script, args]);
  }
  windowId() {
    return null;
  }
  close() {
    Repla.runAppleScript([Constants.CLOSE_WINDOW_SCRIPT, this.windowId]);
  }
}
