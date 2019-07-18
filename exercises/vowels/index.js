/*
  Задача: 
    Написать функцию, которая будет принимать строку и 
    возвращать количество гласных звуков в строке.
    Гласные: 'a', 'e', 'i', 'o', 'u'
  Например:
    vowels('Hi there!')       --> 3
    vowels('Why do you ask?') --> 4
    vowels('Why?')            --> 0
*/

// My first solution
function vowels(str = "") {
  const matches = str.match(/a|e|i|o|u/gi);
  return matches ? matches.length : 0;
}

// Solution 1
function vowels_iterative(str = "") {
  let count = 0;
  const vowels = "aeiou";

  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

// Solution 2
function vowels_sol_two(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels_sol_two;
