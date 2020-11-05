const Repla = require("../src/repla.js");

test("Test coerce", () => {
  const numberString = "15";
  const number = 10;
  const lineBreakString = "Hello World!\n";
  const string = "Hello World!";
  const buffer = Buffer.from(string, "utf-8");
  expect(Repla._coerce(number)).toBe(10);
  expect(Repla._coerce(numberString)).toBe(15);
  expect(Repla._coerce(string)).toBe(string);
  expect(Repla._coerce(buffer)).toBe(string);
  expect(Repla._coerce(lineBreakString)).toBe(string);
});
