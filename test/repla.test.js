import Window from "../src/window.js"

test("adds 1 + 2 to equal 3", () => {
  var window = new Window(); 
  let result = window.loadUrl()
  console.log("result = " + result);
  expect(result).toBe(null);
});
