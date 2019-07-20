// --- Задача
// 1) Имплементировать класс Node создающий
// дерево бинарного поиска  (binary search tree)
// Конструктор должен инициализировать свойства
// data, left, right
// 2) Имплементировать метод insert. Метод должен
// принимать аргумент 'data' и затем вставлять
// созданную ноду в подходящее место в дереве.
// 3) Имплементировать метод contains, который
// принимает аргумент "data" и возвращает ноду
// из дерева с value === data

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }
  contains(data) {
    if (this.data === data) return this;

    if (data < this.data && this.left) {
      return this.left.contains(data);
    } else if (data > this.data && this.right) {
      return this.right.contains(data);
    }

    return null;
  }
}

module.exports = Node;
