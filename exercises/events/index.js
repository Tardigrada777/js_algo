/*
  --- Задача
  Написать библиотеку, которая будет создавать
  и обрабатывать систему событий.
  Класс Events должен иметь методы 
  on(), trigger(), off()
*/

class Events {
  constructor() {
    this.events = {};
  }

  // Регистрация события
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  // Запускает выполнение всех колбеков,
  // связанных с данным eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb();
      }
    }
  }

  // Удаляет все обработчики,
  // связанные с данным eventName
  off(eventName) {
    delete this.events[eventName];
  }
}

module.exports = Events;
