export default class Window {
  constructor(windowId) {
    Object.defineProperty(this, "windowId", {
      get: function () {
        if (this._windowId) {
          return this._windowId;
        }
        this._windowId = 0;
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
