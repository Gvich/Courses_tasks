const ads = [
    {name: 'ad1', price: 1.8, show: 0},
    {name: 'ad2', price: 1.55, show: 0},
    {name: 'ad3', price: 1.13, show: 0},
    {name: 'ad4', price: 0.48, show: 0},
];

function weightedLeastConnections(banners) {
    let minConnections = Number.MAX_VALUE;
    let selectedAd = null;

    for (const banner of banners) {
        const weightedConnections = banner.show / banner.price;
        if (weightedConnections < minConnections) {
            minConnections = weightedConnections;
            selectedAd = banner;
        }
    }

    return selectedAd.show++;
}

console.time('Время выполнения');
for (let user = 1; user <= 1000000; user++) {
    weightedLeastConnections(ads)
}
console.timeEnd('Время выполнения');

console.log(ads)