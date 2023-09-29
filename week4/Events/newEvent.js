const button = document.querySelector('#myButton');

// Создаем новое пользовательское событие
const customEvent = new Event('customEvent', { bubbles: true, cancelable: true });

// Добавляем обработчик для пользовательского события
button.addEventListener('customEvent', function() {
    alert('Пользовательское событие было вызвано!');
});

// Диспетчеризируем пользовательское событие
button.dispatchEvent(customEvent);
