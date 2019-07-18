/*
  Задача:
    Создать структуру данных Queue (Очередь). 
    Очередь должна быть реализована классом, имеющим
    методы add() и remove()
  Пример:
    const q = new Queue();
    q.add(1)
    q.remove() // returns 1

  ДЛЯ ЗАДАЧИ WEAVE
    Добавить метод peek. Метод возвращает элемент, 
    первый в очереди без его удаления. 
    (Последний элемент от начала или первый от конца)
*/

class Queue {
  constructor() {
    this._queue = [];
  }
  get queue() {
    throw Error("Not allowed");
  }
  add(el) {
    this._queue.unshift(el);
  }
  remove() {
    return this._queue.pop();
  }
  peek() {
    return this._queue[this._queue.length - 1];
  }
}

module.exports = Queue;
