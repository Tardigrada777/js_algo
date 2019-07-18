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
