const express = require('express');
const app = express();
const PORT = 3000;

// Промежуточное ПО (middleware) для измерения времени ответа
app.use((req, res, next) => {
    const start = Date.now(); // Засекаем время начала обработки запроса
    res.on('finish', () => {
        const end = Date.now(); // Засекаем время окончания обработки запроса
        const responseTime = end - start; // Вычисляем время ответа в миллисекундах
        console.log(`Response time: ${responseTime}ms`);
    });
    next();
});

// Роут для тестирования
app.get('/', (req, res) => {
    // Имитируем небольшую задержку для демонстрации
    setTimeout(() => {
        res.send('Hello, world!');
    }, 100); // Имитируем задержку в 100 миллисекунд
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
