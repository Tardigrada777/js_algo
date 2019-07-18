/*
    Принимает строку, возвращает символ, который используется в строке чаще остальных.
    maxchar('adscccccd') === 'c'
    maxchar('apple 1231111') === '1'
*/

/*
    Данная задача (и попутно множество других, связанных со строкой и символами в строке) 
    решается с помощью построения объекта вида:
    "Hello There"
    {
        H: 1,
        e: 3,
        l: 2,
        0: 1,
        " ": 1,
        t: 1,
        h: 1,
        r: 1
    }
*/

const charMapFromString = require("../utils/charMapFromString");

// Solution 1
function maxchar(str) {
  const charMap = charMapFromString(str);
  let max = 0;
  let maxChar = "";

  for (const char in charMap) {
    if (charMap[char] > max) {
      maxChar = char;
      max = charMap[char];
    }
  }
  return maxChar;
}

module.exports = maxchar;
