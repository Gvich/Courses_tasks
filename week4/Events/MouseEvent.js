// Создание события клика
const clickEvent = new MouseEvent('click', {
    bubbles: true,     // Всплытие события
    cancelable: true,  // Событие можно отменить
    clientX: 50,       // Горизонтальная координата клика
    clientY: 50,       // Вертикальная координата клика
    button: 0          // Левая кнопка мыши
});

// Получаем элемент, на котором мы хотим сгенерировать событие
const element = document.querySelector('#myButton');

// Добавляем обработчик события
element.addEventListener('click', function() {
    alert('Элемент был кликнут!');
});

// Инициируем событие
// element.dispatchEvent(clickEvent);