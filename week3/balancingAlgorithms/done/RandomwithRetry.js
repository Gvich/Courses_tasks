const ads = [
    {name: 'ad1', price: 1.8, show: 0},
    {name: 'ad2', price: 1.55, show: 0},
    {name: 'ad3', price: 1.13, show: 0},
    {name: 'ad4', price: 0.48, show: 0},
];
function spreadTrafficEvently_RANDOM(banners) { // like Random with retry?????
    const randomIndex = Math.floor(Math.random() * banners.length);
    banners[randomIndex].show++;
}

function randomWithRetry(banners) {
    const maxRetries = 2;
    let retries = 0;

    while (retries < maxRetries) {
        const randomIndex = Math.floor(Math.random() * banners.length);
        const selectedAd = banners[randomIndex];

        if (Math.random() < 0.5) { // симмулирует типо ошибку и тогда,и тогда опять продолжает попытку
            retries++;
        } else {
            return selectedAd.show++;
        }
    }

    // если попытки изчерпались
    return leastConnection(banners);
}



console.time('Время выполнения');
for (let user = 1; user <= 1000000; user++) {
    // spreadTrafficEvently_RANDOM(ads)
    randomWithRetry(ads) // вернет либо равномерно, либо с небольшим отличием, без листконекст вернет гдето 60-70% показов
}
console.timeEnd('Время выполнения');
console.log(ads)


function leastConnection(banners) {
    const minShowBanner = banners.reduce((min, current) => {
        return current.show < min.show ? current : min
    }, banners[0])

    minShowBanner.show++;
}