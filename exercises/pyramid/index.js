/*
  Задача:
    Написать функцию, которая принимает положительно число
    и выводит в консоль пирамиду высотой N из # символов.
    Каждая строка (уровень) заполняется пробелами
    в местах, где нет символа #
  Пример:
    pyramid(1)
      '#'
    pyramid(2)
      ' # '
      '###'
    pyramid(3)
      '  #  '
      ' ### '
      '#####'  
*/

// Solution 1
function pyramid(n = 0) {
  let columns = 2 * n - 1;
  let midpoint = Math.floor(columns / 2);

  for (let row = 0; row < n; row++) {
    let level = "";
    for (let column = 0; column < columns; column++) {
      level += column >= midpoint - row && column <= midpoint + row ? "#" : " ";
    }
    console.log(level);
  }
}

// Solution by recursion
function recursion_solution(n = 0, row = 0, level = "") {
  if (row === n) return;

  let columns = 2 * n - 1;
  let midpoint = Math.floor(columns / 2);

  if (level.length === columns) {
    console.log(level);
    return recursion_solution(n, row + 1);
  }

  const column = level.length;
  level += column >= midpoint - row && column <= midpoint + row ? "#" : " ";
  recursion_solution(n, row, level);
}

module.exports = recursion_solution;
