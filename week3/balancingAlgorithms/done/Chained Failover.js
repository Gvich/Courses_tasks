const ads = [
    {name: 'ad1', price: 1.8, show: 0, active: 0},
    {name: 'ad2', price: 1.55, show: 0, active: 0},
    {name: 'ad3', price: 1.13, show: 0, active: 0},
    {name: 'ad4', price: 0.48, show: 0, active: 0},
];


function isActive(banners) {
    for (const ad of banners) {
        const randomNumber = Math.random();
        randomNumber < 0.5 ? ad.active = 0 : ad.active = 1;
    }
}

function chainedFailOver (banners) {
    for (const ad of banners) {
        if (ad.active === 1) {
            ad.show++;
            return; //Выйдите из функции после показа первого активного объявления.
            // ищет до тех пор пока не найдет следующий активный
            // если бы это были сервера то логика была в то что если 1 сервер не работает
            // то проверяет следующий запасной, если все не работают то все гг вп
        }
    }
}
console.time('Время выполнения');
for (let user = 1; user <= 1000000; user++) {
    isActive(ads)
    chainedFailOver(ads)
}
console.timeEnd('Время выполнения');

console.log(ads)