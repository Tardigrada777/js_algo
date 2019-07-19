/*
  Задача:
    Функция принимает связный список и число n. Возвращает
    элемент списка следующий после n от конца. Предполагается,
    что n меньше чем длина списка. Пользоваться методом size() 
    запрещено.

  Например:
    const list = new LinkedList()
    list.insertLast('a')
    list.insertLast('b')
    list.insertLast('c')
    list.insertLast('d')
    fromLast(list, 2) // returns 'b'
*/

function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

module.exports = fromLast;
