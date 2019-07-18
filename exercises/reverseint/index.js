/* 
    Принимает число (Int) и возвращает перевернутое число.
    Например,
    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
*/

// My solution
function reverseInt_my_sol(n) {
  const reversed = parseInt(
    n
      .toString()
      .split("")
      .reverse()
      .join("")
  );
  return reversed * Math.sign(n);
}

// Solution 1
function reverseInt_sol_one(n) {
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt_sol_one;
