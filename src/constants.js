const Constants = {};

// Keys
Constants.WINDOW_ID_KEY = "REPLA_WINDOW_ID";

// Tests
Constants.TIMEOUT = "4.0";
Constants.POLLING_INTERVAL = "0.5";

// AppleScript

import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
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
Constants.LOAD_URL_SCRIPT = path.join(APPLESCRIPT_DIRECTORY, "load_url.scpt");
Constants.LOAD_URL_CACHE_SCRIPT = path.join(
  APPLESCRIPT_DIRECTORY,
  "load_url_clearing_cache.scpt"
);
Constants.DO_JAVASCRIPT = path.join(
  APPLESCRIPT_DIRECTORY,
  "do_javascript.scpt"
);
Constants.RELOAD_SCRIPT = path.join(APPLESCRIPT_DIRECTORY, "reload.scpt");
Constants.GO_BACK_SCRIPT = path.join(APPLESCRIPT_DIRECTORY, "go_back.scpt");
Constants.GO_FORWARD = path.join(APPLESCRIPT_DIRECTORY, "go_forward.scpt");

export default Constants;
