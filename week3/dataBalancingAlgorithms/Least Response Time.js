const express = require('express');
const app = express();
const port = 3000;

// Симулируем задержку для демонстрации эффекта
function simulateDelay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Маршрут для быстрого ответа
app.get('/fast', async (req, res) => {
    await simulateDelay(100); // Имитируем быстрый ответ
    res.send('Fast response');
});

// Маршрут для медленного ответа
app.get('/slow', async (req, res) => {
    await simulateDelay(1000); // Имитируем медленный ответ
    res.send('Slow response');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
