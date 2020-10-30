const Constants = require("../src/constants.js");
const Repla = require("./repla.js");

module.exports = class Window {
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
  loadURL(url, options) {
    const args = [url];
    let script;
    if (options && 'shouldClearCache' in options) {
      const shouldClearCache = options["shouldClearCache"];
      args.push(shouldClearCache);
      script = Constants.LOAD_URL_CACHE_SCRIPT;
    } else {
      script = Constants.LOAD_URL_SCRIPT;
    }
    return this._runScript(script, args);
  }
  loadFile(file) {
    const args = [file];
    return this._runScript(Constants.LOAD_FILE_SCRIPT, args);
  }
  doJavaScript(javaScript) {
    return this._runScript(Constants.DO_JAVASCRIPT_SCRIPT, [javaScript]);
  }
  close() {
    this._runScript(Constants.CLOSE_WINDOW_SCRIPT);
  }
  reload() {
    this._runScript(Constants.RELOAD_SCRIPT);
  }
  // Private
  _runScript(script, args) {
    args = this._argumentsWithTarget(args);
    return Repla.runAppleScript([script].concat(args));
  }
  _argumentsWithTarget(args) {
    if (args) {
      args.push(this.windowId);
    } else {
      args = [this.windowId];
    }
    return args;
  }
};
