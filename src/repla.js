import Constants from "../src/constants.js";
import { spawnSync } from "child_process";

const Repla = {
  debug: false,
  createWindow: function () {
    return this.runAppleScript([Constants.CREATE_WINDOW_SCRIPT]);
  },
  runAppleScript: function (args) {
    const result = spawnSync(Constants.APPLESCRIPT_COMMAND, args);
    if (this.debug) {
      console.log(Constants.APPLESCRIPT_COMMAND, args);
      if (result.stderr) {
        console.log("stderr: " + result.stderr.toString())
      }
      if (result.stdout) {
        console.log("stdout: " + result.stdout.toString())
      }
    }
    const output = result.stdout;

    const resultInt = parseInt(output);
    if (resultInt) {
      return resultInt;
    }
    return output
    // TODO: Replace above
    // return this._coerce(output);
  },
  loadPlugin: function (path) {
    return this.runAppleScript([Constants.LOAD_PLUGIN_SCRIPT, path]);
  },
  runPlugin: function (name, directory, parameters) {
    const args = [name, directory, parameters].flat().filter(function (el) {
      return el != null;
    });
    // FIXME: This should be returning a Window ID but it's not
    return this.runAppleScript([Constants.RUN_PLUGIN_SCRIPT, args]);;
  },
  // Private
  _coerce: function (value) {
    const resultInt = parseInt(value);
    if (resultInt) {
      return resultInt;
    }
    return value.toString();
  }
};

export default Repla;
