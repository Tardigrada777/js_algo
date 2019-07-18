/*
  Задача:
    Создать структуру данных Queue (Очередь). 
    Очередь должна быть реализована классом, имеющим
    методы add() и remove()
  Пример:
    const q = new Queue();
    q.add(1)
    q.remove() // returns 1
*/

class Queue {
  constructor() {
    this.queue = [];
  }
  add(el) {
    this.queue.unshift(el);
  }
  remove() {
    return this.queue.pop();
  }
}

module.exports = Queue;
