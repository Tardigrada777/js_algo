// --Directions
// Дана строка, необходимо вернуть строку, содержащую символы в обратном порядке (перевернуть)
// --Примеры
// reverse('apple') === 'elppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'

// Solution 1
function reverse_sol_one(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// Solution 2
function reverse_sol_two(str) {
  let reversed = "";
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

// Solution 3
function reverse_sol_three(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse_sol_three;
