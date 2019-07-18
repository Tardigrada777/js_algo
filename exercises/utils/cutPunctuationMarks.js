// Первый параметр строка
// Второй - bool, нужно ли преобразовывать к нижнему регистру

function cutPunctuationMarks(str = "", toLowerCase = false) {
  let replacedString = str.replace(/[^\w]/g, "");
  if (toLowerCase) {
    return replacedString.toLowerCase();
  }
  return replacedString;
}

module.exports = cutPunctuationMarks;
