const ads = [
    { name: 'ad1', price: 1.8, show: 0, region: 'US' },
    { name: 'ad2', price: 1.55, show: 0, region: 'Europe' },
    { name: 'ad3', price: 1.13, show: 0, region: 'Asia' },
    { name: 'ad4', price: 0.48, show: 0, region: 'US' },
];

function localityBasedLoadBalancing(banners, userRegion) {
    const eligibleAds = banners.filter(banner => banner.region === userRegion);

    if (eligibleAds.length === 0) {
        // если не находит регион возращет случайную
        return randomWithRetry(banners);
    }

    // если находит то добавляет ему, если несколько реклам с одинаков. рег. то выбирает за методом, можно любой другой(e.g., weighted round-robin).
    return leastConnection(eligibleAds);
}

const regions = [
    'US',
    'Europe',
    'Asia',
    'Africa',
    'Oceania'
]

// Example usage:
for (let user = 1; user <= 1000000; user++) {
    const userRegion = regions[Math.floor(Math.random() * regions.length)];
    localityBasedLoadBalancing(ads, userRegion);
}
console.log(ads)

function randomWithRetry(banners) { // like Random with retry?????
    const randomIndex = Math.floor(Math.random() * banners.length);
    banners[randomIndex].show++;
}

function leastConnection  (banners) {
    let minShowAd = banners[0];

    for (const ad of banners) {
        if (ad.show < minShowAd.show) {
            minShowAd = ad;
        }
    }
    return minShowAd.show++;
}