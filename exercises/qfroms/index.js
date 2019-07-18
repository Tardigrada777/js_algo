/*
  Задача:
    Имплементировать Queue струкутуру используя два стека.
    Не создавая массив внутри Queue класса
    Queue должен имлпементировать методы
    add, remove, peek
  Пример
    const q = new Queue()
    q.add(1)
    q.add(2)
    q.peek() // 1
    q.remove() // 1
    q.remove() // 2
*/

const Stack = require("./stack");

class QueueFromStacks {
  constructor() {
    this.stackIn = new Stack();
    this.stackOut = new Stack();
  }

  add(el) {
    this.stackIn.push(el);
  }

  pourInOut() {
    while (this.stackIn.peek()) {
      this.stackOut.push(this.stackIn.pop());
    }
  }

  pourOutIn() {
    while (this.stackOut.peek()) {
      this.stackIn.push(this.stackOut.pop());
    }
  }

  remove() {
    this.pourInOut();
    const removed = this.stackOut.pop();
    this.pourOutIn();
    return removed;
  }

  peek() {
    this.pourInOut();
    const peeked = this.stackOut.peek();
    this.pourOutIn();
    return peeked;
  }
}

module.exports = QueueFromStacks;
