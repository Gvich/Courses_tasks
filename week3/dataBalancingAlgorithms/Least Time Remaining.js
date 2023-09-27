// Моделируем асинхронные функции с разными временами выполнения
function loadDataFromServer(callback) {
    setTimeout(() => {
        console.log("Загрузка данных с сервера завершена");
        callback();
    }, 200);
}

function processData(callback) {
    setTimeout(() => {
        console.log("Обработка данных завершена");
        callback();
    }, 100);
}

function displayResults() {
    setTimeout(() => {
        console.log("Отображение результатов");
    }, 50);
}


const express = require('express');
const app = express();

app.get('/process', (req, res) => {
    console.log("Запуск асинхронных операций");

    // Используем алгоритм LTR
    loadDataFromServer(() => {
        processData(() => {
            displayResults();
            res.send("Операции завершены");
        });
    });
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});
