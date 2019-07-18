// Common util-function
function charMapFromString(str = "") {
  const charMap = {};
  for (const char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

module.exports = charMapFromString;
