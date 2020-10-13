const Constants = {};

// Keys
Constants.WINDOW_ID_KEY = "REPLA_WINDOW_ID";

// AppleScript

import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const APPLESCRIPT_DIRECTORY = path.join(__dirname, "lib/applescript");
Constants.APPLESCRIPT_COMMAND = "/usr/bin/osascript";
Constants.CREATE_WINDOW_SCRIPT = path.join(
  APPLESCRIPT_DIRECTORY,
  "create_window.scpt"
);
Constants.CLOSE_WINDOW_SCRIPT = path.join(
  APPLESCRIPT_DIRECTORY,
  "close_window.scpt"
);   



export default Constants;