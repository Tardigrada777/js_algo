const reverse = require("./index");

test("reverse function is defined", () => {
  expect(typeof reverse).toEqual("function");
});

test("return string", () => {
  expect(typeof reverse("")).toEqual("string");
});

test("return reversed string", () => {
  expect(reverse("apple")).toEqual("elppa");
});
