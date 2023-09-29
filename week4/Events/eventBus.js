// // Создаем глобальный Event Bus
// const eventBus = new Vue();
//
// // Компонент 1 отправляет сообщение на Event Bus
// eventBus.$emit('message', 'Привет, Event Bus!');
//
// // Компонент 2 подписывается на событие 'message' и реагирует на него
// eventBus.$on('message', (data) => {
//     console.log('Получено сообщение:', data);
// });


// Создаем объект Event Bus
const eventBus = {
    events: {}, // Хранилище для событий и их обработчиков

    // Метод для подписки на событие
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    },

    // Метод для публикации события
    emit(event, data) {
        const listeners = this.events[event];
        if (listeners) {
            listeners.forEach(callback => callback(data));
        }
    },
};

// Компонент 1 подписывается на событие 'message'
eventBus.on('message', (data) => {
    console.log('Компонент 1 получил сообщение:', data);
});

// Компонент 2 подписывается на событие 'message'
eventBus.on('message', (data) => {
    console.log('Компонент 2 получил сообщение:', data);
});

// Компонент 3 публикует событие 'message'
eventBus.emit('message', { text: 'Привет, Event Bus!' });
