import repla from "../src/repla.js"

test("adds 1 + 2 to equal 3", () => {
  let result = repla.loadUrl()
  console.log("result = " + result);
  expect(result).toBe(null);
});
