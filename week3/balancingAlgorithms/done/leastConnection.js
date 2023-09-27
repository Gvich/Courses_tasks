const ads = [
    {name: 'ad1', price: 1.8, show: 1},
    {name: 'ad2', price: 1.55, show: 0},
    {name: 'ad3', price: 1.13, show: 3},
    {name: 'ad4', price: 0.48, show: 0},
];

const leastConnection = banners => {
    let ad = banners.sort((a, b) => a.show - b.show)[0];
    // console.log(ad)
    ad.show++;
}

const leastConnection2 = banners => {
    let selectedAd = selectAd(banners);
    selectedAd.show++;
    // console.log(`Request directed to ${selectedAd.name}`);
}

const selectAd = banners => {
    let leastShows = Infinity,
        selectedAd = null;

    banners.forEach(ad => {
        if (ad.show < leastShows) {
            leastShows = ad.show;
            selectedAd = ad;
        }
    })

    return selectedAd;
}

const leastConnection3 = banners => {
    let minShowAd = banners[0];

    for (const ad of banners) {
        if (ad.show < minShowAd.show) {
            minShowAd = ad;
        }
    }
    minShowAd.show++;
}

const leastConnection4 = banners => {
    const minShowBanner = banners.reduce((min, current) => {
        return current.show < min.show ? current : min
    }, banners[0])

    minShowBanner.show++;
}

function spreadTrafficEvently_FOR_LOOP(banners) {
    const min = banners[0].show;

    if (banners[0].show === banners[banners.length - 1].show) {
        return banners[0].show++;
    }

    for (let i = 0; i < banners.length; i++) {
        if (banners[i].show < min) {
            return banners[i].show++;
        }
    }
}

const algorithms = [
    leastConnection,
    leastConnection2,
    leastConnection3,
    leastConnection4,
    spreadTrafficEvently_FOR_LOOP
]


algorithms.forEach(func => {
    console.log(`${func.name}`);
    console.time('Время выполнения');
    for (let user = 1; user <= 1000000; user++) {
        func(ads)
    }
    console.timeEnd('Время выполнения');
    console.log('----------------------------------');
})


console.log(ads);