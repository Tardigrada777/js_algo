class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // TODO: Защитить от прямого доступа
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;

    while (node) {
      if (node.next) {
        node = node.next;
      } else {
        return node;
      }
    }

    return null;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) return;
    if (this.head.next === null) {
      return (this.head = null);
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
  insertLast(data) {
    const last = this.getLast();
    if (!last) return this.insertFirst(data);
    last.next = new Node(data);
  }
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) return node;
      counter++;
      node = node.next;
    }
    return null;
  }
  removeAt(index) {
    if (!this.head) return;
    if (index === 0) return this.removeFirst();

    let previous = this.getAt(index - 1);
    let next = this.getAt(index + 1);
    previous.next = next;
  }
  insertAt(data, index) {
    if (!this.head || index === 0) return this.insertFirst(data);
    let prevNode = this.getAt(index - 1) || this.getLast();
    let node = new Node(data, prevNode.next);
    prevNode.next = node;
  }
  forEach(fn) {
    let node = this.head;
    let index = 0;
    while (node) {
      fn(node, index);
      index++;
      node = node.next;
    }
  }

  // Итератор для экземпляра класса
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
