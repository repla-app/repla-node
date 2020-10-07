import { APPLESCRIPT_COMMAND } from "../src/constants.js";

export default Repla = {
  createWindow: function() {
    
  },
  _runAppleScript: function(args) {
    const { spawn } = require('child_process');
    const result = spawn(APPLESCRIPT_COMMAND, args);
    // TODO: Make this return STDOUT
    return result;
  }
}