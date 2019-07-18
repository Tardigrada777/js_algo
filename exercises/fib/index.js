/*
  Задача:
    Написать функцию, которая выводит n-ый элемент последовательности Фибоначи
  Например:
    [0, 1, 1, 2, 3, 5, 8]
    fib(4) === 2
*/
const memoize = require("../utils/memoizer");

// Solution 1
// Iterative solution
function fib_iter(n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a + b);
  }
  return result[n];
}

// Solution 2
// Recursion solution
function fib(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

// Optimized recursion solution
const optimized_fib = memoize(fib);

module.exports = optimized_fib;
