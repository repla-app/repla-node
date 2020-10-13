export const WINDOW_ID_KEY = "REPLA_WINDOW_ID";
import path from "path";

// AppleScript
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const APPLESCRIPT_DIRECTORY = path.join(__dirname, "lib/applescript");
export const APPLESCRIPT_COMMAND = "/usr/bin/osascript";
export const CREATE_WINDOW_SCRIPT = path.join(
  APPLESCRIPT_DIRECTORY,
  "create_window.scpt"
);
export const CLOSE_WINDOW_SCRIPT = path.join(
  APPLESCRIPT_DIRECTORY,
  "close_window.scpt"
);
