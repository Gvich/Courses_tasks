const ads = [
    {name: 'ad1', price: 1.8, show: 0},
    {name: 'ad2', price: 1.55, show: 0},
    {name: 'ad3', price: 1.13, show: 0},
    {name: 'ad4', price: 0.48, show: 0},
];

function leastResponseTime(banners) {
    let minResponseTime = Number.MAX_VALUE;
    let selectedAd = null;

    for (const banner of banners) {
        const responseTime = measureResponseTime(banner);
        if (responseTime < minResponseTime) {
            minResponseTime = responseTime;
            selectedAd = banner;
        }
    }
    return selectedAd.show++;
}

function measureResponseTime(ad) {
    const minResponseTime = 100; // 100 milliseconds
    const maxResponseTime = 3000; // 3000 milliseconds

    return Math.random() * (maxResponseTime - minResponseTime) + minResponseTime;
}


console.time('Время выполнения');
for (let user = 1; user <= 1000000; user++) {
    leastResponseTime(ads)
}
console.timeEnd('Время выполнения');

console.log(ads)



// const express = require('express');
// const app = express();
// const port = 3000;
//
// // Симулируем задержку для демонстрации эффекта
// function simulateDelay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//
// // Маршрут для быстрого ответа
// app.get('/fast', async (req, res) => {
//     await simulateDelay(100); // Имитируем быстрый ответ
//     res.send('Fast response');
// });
//
// // Маршрут для медленного ответа
// app.get('/slow', async (req, res) => {
//     await simulateDelay(1000); // Имитируем медленный ответ
//     res.send('Slow response');
// });
//
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
