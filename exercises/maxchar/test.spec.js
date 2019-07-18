const maxchar = require("./index");

test("maxchar function is defined", () => {
  expect(typeof maxchar).toEqual("function");
});

test("return string", () => {
  expect(typeof maxchar("")).toEqual("string");
});

test("return correct maxchar for 'abcccccasd' --> 'c'", () => {
  expect(maxchar("abcccccasd")).toEqual("c");
});

test("return correct maxchar for 'apple 1231111' --> '0'", () => {
  expect(maxchar("apple 1231111")).toEqual("1");
});
