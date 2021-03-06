const Constants = require("../src/constants.js");

const Testing = {
  blockUntil: async function (
    timeout = Constants.TIMEOUT,
    pollingInterval = Constants.POLLING_INTERVAL,
    testFn
  ) {
    const cycles = Math.max(timeout / pollingInterval, 1);
    for (var i = 0; i <= cycles || testFn(); i++) {
      await new Promise((r) => setTimeout(r, pollingInterval));
    }
  },
};

module.exports = Testing;
