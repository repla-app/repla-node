import Constants from "../src/constants.js";
import { spawnSync } from "child_process";

const Repla = {
  createWindow: function () {
    return this.runAppleScript([Constants.CREATE_WINDOW_SCRIPT]);
  },
  runAppleScript: function (args) {
    const result = spawnSync(Constants.APPLESCRIPT_COMMAND, args);
    return result.stdout;
  },
};

export default Repla;
