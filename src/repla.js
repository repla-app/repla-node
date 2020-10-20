import Constants from "../src/constants.js";
import { spawnSync } from "child_process";

const Repla = {
  debug: false,
  createWindow: function () {
    return this.runAppleScript([Constants.CREATE_WINDOW_SCRIPT]);
  },
  runAppleScript: function (args) {
    if (this.debug) {
      console.log(Constants.APPLESCRIPT_COMMAND, args);
    }
    const result = spawnSync(Constants.APPLESCRIPT_COMMAND, args);
    const output = result.stdout;

    const resultInt = parseInt(output);
    if (resultInt) {
      return resultInt;
    }

    return result.stdout;
  },
  loadPlugin: function (path) {
    return this.runAppleScript([Constants.LOAD_PLUGIN_SCRIPT, path]);
  },
  runPlugin: function (name, directory, parameters) {
    let args = [name, directory, parameters].flat().filter(function (el) {
      return el != null;
    });
    return this.runAppleScript([Constants.RUN_PLUGIN_SCRIPT, args]);
  },
};

export default Repla;
