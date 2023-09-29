const button = document.querySelector('#myButton');

// Создание пользовательского события с данными с помощью CustomEvent
const customEvent = new CustomEvent('customEvent', {
    detail: { message: 'Привет, CustomEvent!' },
    bubbles: true,
    cancelable: true
});

// Создание обычного события без данных с помощью Event
const regularEvent = new Event('regularEvent');

// В обработчике пользовательского события можно получить данные из detail
button.addEventListener('customEvent', function(event) {
    alert('Пользовательское событие: ' + event.detail.message);
});

// Обычное событие не содержит данных
button.addEventListener('regularEvent', function(event) {
    alert('Обычное событие');
});

// Инициирование событий
button.dispatchEvent(customEvent);
button.dispatchEvent(regularEvent);
