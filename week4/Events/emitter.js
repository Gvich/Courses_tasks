const EventEmitter = require('events'); // В Node.js
const emitter = new EventEmitter();

// Регистрируем обработчик для события 'myEvent'
emitter.on('myEvent', (data) => {
    console.log('Событие myEvent произошло:', data);
});

// Вызываем событие 'myEvent' и передаем данные
emitter.emit('myEvent', { message: 'Привет, Event Emitter!' });

