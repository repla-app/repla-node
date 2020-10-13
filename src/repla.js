import { APPLESCRIPT_COMMAND } from "../src/constants.js";

export default Repla = {
  createWindow: function() {
    
  },
  _runAppleScript: function(args) {
    const { spawnSync } = require('child_process');
    const result = spawnSync(APPLESCRIPT_COMMAND, args);
    return result.stdout;
  }
}