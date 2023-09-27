const request = 100000;

const ads = [
    {name: 'ad1', price: 1.8, show: 0},
    {name: 'ad2', price: 1.75, show: 0},
    {name: 'ad3', price: 1.33, show: 0},
    {name: 'ad4', price: 0.48, show: 0},
];

// const spreadTrafficEvenly = (ads, request) => {
//     let j = 0;
//     for (let i = 0; i < request; i++) {
//         if (j < ads.length) {
//             ads[j++].show++;
//         }
//         else {
//             j = 0
//             ads[j++].show++;
//         }
//     }
//     console.log(ads);
// }
//
// spreadTrafficEvenly(ads, request)

// const spreadTrafficEvenly = (ads, request) => {
//     for (let i = 0; i < request; i++) {
//         ads[i % ads.length].show++;
//     }
//     console.log(ads);
// }
// spreadTrafficEvenly(ads, request)

// function get_random(list) {
//     console.log(list[Math.floor((Math.random() * list.length))]);
//     return list[Math.floor((Math.random() * list.length))];
// }
//
// const spreadTrafficEvenly = (ads, request) => {
//     for (let i = 0; i < request; i++) {
//         const randomAd = get_random(ads);
//         randomAd.show++
//     }
//     console.log(ads)
// }
//
// spreadTrafficEvenly(ads, request);


// const ads2 = [
//     {name: 'ad1', price: 1.8, show: 0, start: 0, end: 0.33},
//     {name: 'ad2', price: 1.75, show: 0, start: 0.33, end: 0.64},
//     {name: 'ad3', price: 1.33, show: 0, start: 0.64, end: 0.91},
//     {name: 'ad4', price: 0.48, show: 0, start: 0.91, end: 1},
// ];

const spreadBetweenStartAndEnd = (ads, request) => {
    for (let i = 0; i < request; i++) {
        const randomPercent = Math.random();
        const ad = ads.find(el => el.start <= randomPercent && el.end >= randomPercent)
        ad.show++;
    }
    console.log(ads)
}

// spreadBetweenStartAndEnd(ads2, request)

const spreadTrafficByPrice = (ads, request) => {
    const sumPrice = ads.reduce((sum, prevElement) => {
        return sum + prevElement.price
    }, 0)

    for (let i = 0; i < ads.length; i++) {
        const end = ads[i].price / sumPrice;
        ads[i].start = i === 0 ? 0 : ads[i - 1].end
        ads[i].end = ads[i].start + end;
    }

    for (let i = 0; i < request; i++) {
        const randomPercent = Math.random();
        const ad = ads.find(el => el.start <= randomPercent && el.end >= randomPercent)
        ad.show++;
    }

    console.log(ads)
}

spreadTrafficByPrice(ads, request)

// for (let i = 0; i < request; i++) {
//     const randomAd = get_random(ads);
//     randomAd.show++
// }
// console.log(ads)