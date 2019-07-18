const reverseInt = require("./index");

test("reverseInt function is defined", () => {
  expect(typeof reverseInt).toEqual("function");
});

test("return number", () => {
  expect(typeof reverseInt(10)).toEqual("number");
});

test("return correct reversed number 15 --> 51", () => {
  expect(reverseInt(15)).toEqual(51);
});

test("return correct reversed number 500 --> 5", () => {
  expect(reverseInt(500)).toEqual(5);
});

test("return correct reversed number -15 --> -51", () => {
  expect(reverseInt(-15)).toEqual(-51);
});
