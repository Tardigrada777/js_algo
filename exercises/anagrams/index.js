/*
    Задача:
      Функция принимает две строки и проверяет, являются ли строки
      анаграмами. Анаграмы - это строки, которые используют одинаковые символы
      в одинаковом количестве. Пробелы и пунктуация не учитывается. 
      Заглавные и строчные буквы считаем одинаковыми. Возвращает bool. 
    Примеры:
      anagrams('rail safety', 'fairy tales') --> true
      anagrams('RAIL! SAFETY!', 'fairy tales') --> true
      anagrams('Hi there', 'Bye there') --> false
*/
const charMapFromString = require("../utils/charMapFromString");
const cleanString = require("../utils/cutPunctuationMarks");

// Solution 1
function anagrams_sol_one(stringA, stringB) {
  // [^\w] --> regexp for replace all spaces and . , ! ? and so on
  const strFirst = cleanString(stringA, true);
  const strSecond = cleanString(stringB, true);

  if (strFirst.length !== strSecond.length) {
    return false;
  }

  const strFirstMap = charMapFromString(strFirst);
  const strSecondMap = charMapFromString(strSecond);

  for (const char in strFirstMap) {
    if (strFirstMap[char] !== strSecondMap[char]) {
      return false;
    }
  }

  return true;
}

// Solution 2
function anagrams_sol_two(stringA, stringB) {
  let arrFromA = cleanString(stringA, true)
    .split("")
    .sort()
    .join("");
  let arrFromB = cleanString(stringB, true)
    .split("")
    .sort()
    .join("");

  return arrFromA === arrFromB;
}

module.exports = anagrams_sol_two;
