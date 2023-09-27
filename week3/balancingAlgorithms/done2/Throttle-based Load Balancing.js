const ads = [
    { name: 'ad1', price: 1.8, show: 0 },
    { name: 'ad2', price: 1.55, show: 0 },
    { name: 'ad3', price: 1.13, show: 0 },
    { name: 'ad4', price: 0.48, show: 0 },
];

function ThrottleBasedLoadBalancing(banners) {
    // Calculate total weight
    const totalWeight = banners.reduce((sum, banner) => sum + banner.price, 0);

    // Calculate the throttle factor for each banner
    banners.forEach((banner) => {
        banner.throttleFactor = 1 - banner.price / totalWeight;
    });

    // Sort banners by throttle factor in ascending order
    banners.sort((a, b) => a.throttleFactor - b.throttleFactor);

    // Choose a banner based on the throttle factor
    const random = Math.random() ;
    let cumulativeThrottleFactor = 0;
    for (const banner of banners) {
        cumulativeThrottleFactor += banner.throttleFactor;
        if (random <= cumulativeThrottleFactor) {
            banner.show++;
            break;
        }
    }
}

for (let user = 1; user <= 1000000; user++) {
    ThrottleBasedLoadBalancing(ads);
}

console.log(ads);


// function ThrottleBasedLoadBalancing(banners) {
//     // Calculate total weight
//     const totalWeight = banners.reduce((sum, banner) => sum + banner.price, 0);
//
//     // Calculate the throttle factor for each banner
//     banners.forEach((banner) => {
//         banner.throttleFactor = 1 - banner.price / totalWeight;
//     });
//
//     // Sort banners by throttle factor in ascending order
//     banners.sort((a, b) => a.throttleFactor - b.throttleFactor);
//
//     // Determine the minimum show count among all banners
//     const minShowCount = Math.min(...banners.map((banner) => banner.show));
//
//     // Filter banners that have shown at least as many times as the minimum
//     const eligibleBanners = banners.filter(
//         (banner) => banner.show === minShowCount
//     );
//
//     // Choose a banner from eligible banners based on the throttle factor
//     const random = Math.random();
//     let cumulativeThrottleFactor = 0;
//     for (const banner of eligibleBanners) {
//         cumulativeThrottleFactor += banner.throttleFactor;
//         if (random <= cumulativeThrottleFactor) {
//             banner.show++;
//             break;
//         }
//     }
// }
//
// for (let user = 1; user <= 1000000; user++) {
//     ThrottleBasedLoadBalancing(ads);
// }
//
// console.log(ads);




