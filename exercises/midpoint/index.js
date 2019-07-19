/*
  Задача:
    Вернуть средний (срединный) элемент связанного списка.
    Если количество элементов четное, то вернуть последний
    элемент первой половины списка. НЕЛЬЗЯ использовать
    переменную счетчик, НЕЛЬЗЯ пользоваться данными о размерах
    листа, и разрешается итерировать по списку только ОДИН РАЗ.
  Например:
    const l = new LinkedList()
    l.insertLast('a')
    l.insertLast('b')
    l.insertLast('c')
    midpoint(l) // returns { data: 'b' }
*/

function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

module.exports = midpoint;
