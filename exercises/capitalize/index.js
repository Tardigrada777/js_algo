/*
  Задача
    Функция принимает строку, делает каждое слово строки начинающимся
    с заглавной буквы и возвращает измененную строку.
  Например:
    capitalize('a short sentence') --> 'A Short Sentence'
    capitalize('a lazy fox') --> 'A Lazy Fox'
    capitalize('look, it is working!') --> 'Look, It, Is, Working!'
*/

// My solution
function capitalize(str) {
  return str
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

// Solution 1
function capitalize_sol_one(str) {
  const words = [];
  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}

// Solution 2
function capitalize_sol_two(str) {
  let capitalizeString = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    const prevChar = str[i - 1];
    let char = prevChar === " " ? str[i].toUpperCase() : str[i];
    capitalizeString += char;
  }
  return capitalizeString;
}

module.exports = capitalize_sol_two;
