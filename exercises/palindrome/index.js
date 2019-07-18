/* 
    Палиндром - слово, которое читается одинаково в обоих направлениях.
    Например abba --> abba

    Функция принимает строку и возвращает true, если строка палиндром
    palindrome('abba') === true
    palindrime('afds') === false
*/

// My own solution
function palindrome_my_sol(str) {
  const reversed = str.split("").reduce((rev, char) => char + rev, "");
  return reversed === str;
}

// Solution 1
function palindrome_sol_one(str) {
  return (
    str
      .split("")
      .reverse()
      .join("") === str
  );
}

// Solution 2
function palindrome_sol_two(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome_sol_two;
