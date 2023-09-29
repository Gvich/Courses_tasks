// Создаем новое событие MouseEvent
const event = document.createEvent('MouseEvent');

// Инициируем созданное событие
event.initMouseEvent(
    'click',   // Тип события
    true,      // Всплытие (bubbles)
    true,      // Отменяемость (cancelable)
    window,    // Передающее окно (view)
    1,         // Количество щелчков (detail)
    50,        // Горизонтальная координата (screenX)
    50,        // Вертикальная координата (screenY)
    50,        // Горизонтальная координата (clientX)
    50,        // Вертикальная координата (clientY)
    false,     // Ctrl-клавиша нажата
    false,     // Alt-клавиша нажата
    false,     // Shift-клавиша нажата
    false,     // Meta-клавиша нажата
    0,         // Кнопка мыши (left)
    null       // Целевой элемент (relatedTarget)
);

// Получаем элемент, к которому привяжем событие
const button = document.querySelector('#myButton');

// Добавляем обработчик события
button.addEventListener('click', function() {
    alert('Кнопка была нажата!');
});

// Инициируем событие
button.dispatchEvent(event);