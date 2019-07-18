/*
    Задача:
      Даны массив и размер чанков, необходимо разделить массив на
      несколько подмассивов с количеством элементов равным размеру чанков.
    Примеры:
      chunk([1, 2, 3, 4], 2) --> [[1,2],[3,4]]
      chunk([1,2,3,4,5],2) --> [[1,2],[3,4], [5]]
      chunk([1,2,3,4,5], 10) --> [[1,2,3,4,5]]

*/

// Solution 1
function chunk_sol_one(arr, size) {
  let chunked = [];
  for (let element of arr) {
    let lastChunk = chunked[chunked.length - 1];
    if (!lastChunk || lastChunk.length === size) {
      chunked.push([element]);
    } else {
      lastChunk.push(element);
    }
  }
  return chunked;
}

// Solution 2
function chunk_sol_two(arr, size) {
  let chunked = [];
  let index = 0;

  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = chunk_sol_two;
