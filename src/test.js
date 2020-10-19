
const Test = {
  blockUntil: function(timeout, pollingInterval) {
    let cycles = Math.max(timeout / pollingInterval, 1)
  }
}

export default Test;
