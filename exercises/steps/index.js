/*
  Задача:
    Написать функцию, которая принимает положительное число N. 
    Функция должна вывести в консоль пошагово фигуру, состоящую
    из последовательностей #.
  Пример:
    steps(2)
      '# '
      '##'
    steps(3)
      '#  '
      '## '
      '###'
    steps(4)
      '#   '
      '##  '
      '### '
      '####'
*/

// Solution 1 (simple)
function steps(n = 0) {
  for (let i = 0; i < n; i++) {
    let stair = "";
    for (let j = 0; j < n; j++) {
      stair += j <= i ? "#" : " ";
    }
    console.log(stair);
  }
}

// Solution 2 (recursion)
function recursion_steps(n = 0, row = 0, stair = "") {
  // Базовое условие выхода из рекурсии
  if (n === row) return;

  // Если длина строки === числу N
  // Выводим строку в консоль и вызываем функцию для следующей строки
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  // Добавляем в строке # или пробел
  // в зависимости от условий
  stair += stair.length <= row ? "#" : " ";
  
  // Вызываем функцию с теми же параметрами
  // но с измененной строкой
  steps(n, row, stair);
}

module.exports = recursion_steps;
