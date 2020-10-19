import Constants from "../src/constants.js";

const Test = {
  blockUntil: async function (timeout, pollingInterval = Constants.POLLING_INTERVAL, testFn) {
    let cycles = Math.max(timeout / pollingInterval, 1);
    for (var i = 0; i <= cycles || testFn(); i++) {
      await new Promise(r => setTimeout(r, pollingInterval));
    }
  },
};

export default Test;
