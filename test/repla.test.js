const Repla = require("../src/repla.js");

test("Test coerce", () => {
  const numberString = "15";
  const number = 10;
  const string = "Hello World!";
  expect(Repla._coerce(number)).toBe(10);
  expect(Repla._coerce(numberString)).toBe(15);
  expect(Repla._coerce(string)).toBe(string);
});