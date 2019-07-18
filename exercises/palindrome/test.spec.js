const pl = require("./index");

test("palindrome function is defined", () => {
  expect(typeof pl).toEqual("function");
});

test("return boolean", () => {
  expect(typeof pl("")).toEqual("boolean");
});

test("check if string is palindrome", () => {
  expect(pl("abba")).toEqual(true);
});

test("return false for non palindrome", () => {
  expect(pl("fdsf")).toEqual(false);
});

test("'abba ' is not a palindrome", () => {
  expect(pl("abba ")).toEqual(false);
});

test("'1001' is a palindrome", () => {
  expect(pl("1001")).toEqual(true);
});
