const Constants = require("../../src/constants.js");

const Testing = {
  blockUntil: async function (
    condition,
    timeout = Constants.TIMEOUT,
    pollingInterval = Constants.POLLING_INTERVAL
  ) {
    const cycles = Math.max(timeout / pollingInterval, 1);
    for (var i = 0; !condition() && i <= cycles; i++) {
      await new Promise((r) => setTimeout(r, pollingInterval * 1000));
    }
  },
};

module.exports = Testing;
