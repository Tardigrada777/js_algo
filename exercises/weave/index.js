/*
  Задача:
    Написать weave функцию ("сплетатель"). 
    Функция принимает две очереди в качестве аргументов,
    и сливает ("сплетает") их в новую очередь
  
  Например:
    const queueOne = new Queue()
    queueOne.add(1)
    queueOne.add(2)

    const queueTwo = new Queue()
    queueTwo.add('Hi')
    queueTwo.add('There')

    const q = weave(queueOne, queueTwo)
    q.remove() // 1
    q.remove() // 'Hi'
    q.remove() // 2
    q.remove() // 'There'
*/
const Queue = require("./queue");

function weave(sourceOne = new Queue(), sourceTwo = new Queue()) {
  const q = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }

    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }

  return q;
}

module.exports = weave;
