const TestConstants = {};
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const PACKAGES_DIRECTORY = path.join(__dirname, "../data/packages/");
TestConstants.TEST_SERVER_PLUGIN_NAME = "TestServer";
TestConstants.TEST_SERVER_PLUGIN_FILE = path.join(
  PACKAGES_DIRECTORY,
  "TestServer.replaplugin"
);
export default TestConstants;
