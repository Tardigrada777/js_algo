/*
  Задача:
    Реализовать структуру Стэк. 
    Стэк должен быть классом и иметь методы
    push(), pop(), peek()
  Пример:
    const s = new Stack();
    s.push(1)
    s.push(2)
    s.pop() // 2
    s.pop() // 1
*/

class Stack {
  constructor() {
    this.stack = [];
  }
  push(el) {
    this.stack.push(el);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
}

module.exports = Stack;
