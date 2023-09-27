const ads = [
    {name: 'ad1', price: 1.8, show: 0},
    {name: 'ad2', price: 1.55, show: 0},
    {name: 'ad3', price: 1.13, show: 0},
    {name: 'ad4', price: 0.48, show: 0},
];
function leastTimeRemaining(banners) {
    let minTimeRemaining = Number.MAX_VALUE;
    let selectedAd = null;

    for (const banner of banners) {
        const timeRemaining = simulateTime(banner)

        if (timeRemaining < minTimeRemaining) {
            minTimeRemaining = timeRemaining;
            selectedAd = banner;
        }
    }
    return selectedAd.show++;
}

function simulateTime(banner) {
    return banner.time = Math.ceil( Math.random() * 60);
}

console.time('Время выполнения');
for (let user = 1; user <= 1000000; user++) {
    leastTimeRemaining(ads)
}
console.timeEnd('Время выполнения');

console.log(ads)







// // Моделируем асинхронные функции с разными временами выполнения
// function loadDataFromServer(callback) {
//     setTimeout(() => {
//         console.log("Загрузка данных с сервера завершена");
//         callback();
//     }, 200);
// }
//
// function processData(callback) {
//     setTimeout(() => {
//         console.log("Обработка данных завершена");
//         callback();
//     }, 100);
// }
//
// function displayResults() {
//     setTimeout(() => {
//         console.log("Отображение результатов");
//     }, 50);
// }
//
//
// const express = require('express');
// const app = express();
//
// app.get('/process', (req, res) => {
//     console.log("Запуск асинхронных операций");
//
//     // Используем алгоритм LTR
//     loadDataFromServer(() => {
//         processData(() => {
//             displayResults();
//             res.send("Операции завершены");
//         });
//     });
// });
//
// app.listen(3000, () => {
//     console.log('Сервер запущен на порту 3000');
// });