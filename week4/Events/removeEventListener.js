const button = document.querySelector('#myButton');

// Создаем функцию-обработчик
function handleClick() {
    alert('Кнопка была нажата!');
}

// Добавляем обработчик события 'click' к кнопке
button.addEventListener('click', handleClick);

// Через некоторое время удаляем обработчик события 'click'
setTimeout(function() {
    button.removeEventListener('click', handleClick);
    alert('Обработчик события click был удален.');
}, 5000);