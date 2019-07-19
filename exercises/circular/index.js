/*
  Задача:
    Написать функцию, которая принимает связанный список в качестве
    параметра и возвращает true, если список является circular (круговым) и 
    false, если не является.
  Например:
    const l = new LinkedList()
    const a = new Node('a')
    const b = new Node('b')
    const c = new Node('c')
    l.head = a;
    a.next = b;
    b.next = c;
    c.next = b;

    circular(l) // returns true
*/

function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) return true;
  }
  return false;
}

module.exports = circular;
