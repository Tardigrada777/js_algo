/*
  Функция декоратор делает принимаемую функцию мемоизированной
*/

function memoize(fn = () => {}) {
  const cache = {};
  return function(...args) {
    if (args in cache) {
      return cache[args];
    } else {
      const result = fn.apply(this, args);
      cache[args] = result;
      return result;
    }
  };
}

module.exports = memoize;
