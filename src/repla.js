import constants from "../src/constants.js";

const Repla = {
  createWindow: function() {
    return runAppleScript(Constants.CREATE_WINDOW_SCRIPT)
  },
  runAppleScript: function(args) {
    const { spawnSync } = require('child_process');
    const result = spawnSync(Constants.APPLESCRIPT_COMMAND, args);
    return result.stdout;
  }
}

export default Repla;