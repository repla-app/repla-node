const path = require("path");

const TestConstants = {};
const DATA_DIRECTORY = path.join(__dirname, "../data/");

// Packages
const PACKAGES_DIRECTORY = path.join(DATA_DIRECTORY, "packages");
TestConstants.SERVER_PLUGIN_NAME = "TestServer";
TestConstants.SERVER_PLUGIN_FILE = path.join(
  PACKAGES_DIRECTORY,
  "TestServer.replaplugin"
);
// HTML
TestConstants.HTML_DIRECTORY = path.join(DATA_DIRECTORY, "html");
const HTML_FILENAME = "index.html";
const HTML_JQUERY_FILENAME = "index_jquery.html";
TestConstants.HTML_FILE = path.join(
  TestConstants.HTML_DIRECTORY,
  HTML_FILENAME
);
TestConstants.HTML_JQUERY_FILE = path.join(
  TestConstants.HTML_DIRECTORY,
  HTML_JQUERY_FILENAME
);
TestConstants.HTML_TITLE = "Index";
TestConstants.HTML_JQUERY_TITLE = "Index JQuery";
// JS
TestConstants.JS_DIRECTORY = path.join(DATA_DIRECTORY, "js");
TestConstants.TITLE_JS_FILE = path.join(TestConstants.JS_DIRECTORY, "title.js");
module.exports = TestConstants;
