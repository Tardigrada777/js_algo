/*
    Задача: 
        Написать программу, которая выводит в коноль все числа от
        1 до n. Но все числа кратные 3 заменяет на fizz, а кратные 5 на buzz, 
        кратные и 3 и 5 одновременно на fizzbuzz. 
    Пример:
        fizzbuzz(15)
        1
        2
        fizz
        4
        buzz
        ...
        14
        fizzbuzz
*/

function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    // is the  number a multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzbuzz;
