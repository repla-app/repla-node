import Constants from "../src/constants.js";

const Testing = {
  blockUntil: async function (
    timeout = Constants.TIMEOUT,
    pollingInterval = Constants.POLLING_INTERVAL,
    testFn
  ) {
    let cycles = Math.max(timeout / pollingInterval, 1);
    for (var i = 0; i <= cycles || testFn(); i++) {
      await new Promise((r) => setTimeout(r, pollingInterval));
    }
  },
};

export default Testing;
