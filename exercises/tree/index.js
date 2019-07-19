/*
  Задачи:
    1. Реализовать класс Node. Конструктор
    принимает данные, которые присваивает к свойству
    data и инициализирует пустой массив children. 
    Класс содержит методы add и remove
    2. Создать класс Tree. Конструктор класса 
    инициализирует root свойство в значение null
    3. Имплементировать traverseBF и traverseDF методы.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    this.children.push(new Node(data));
  }
  remove(data) {
    this.children = this.children.filter(node => node.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(fn) {
    // breadth first
    const store = [this.root];
    while (store.length) {
      const node = store.shift();
      store.push(...node.children);
      fn(node);
    }
  }
  traverseDF(fn) {
    // depth first
    const store = [this.root];
    while (store.length) {
      const node = store.shift();
      store.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
