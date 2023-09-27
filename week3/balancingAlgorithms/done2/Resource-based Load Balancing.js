const ads = [
    {name: 'ad1', price: 1.8, show: 0},
    {name: 'ad2', price: 1.55, show: 0},
    {name: 'ad3', price: 1.13, show: 0},
    {name: 'ad4', price: 0.48, show: 0},
];

function resourceBasedLoadBalancing(banners, totalResources) {
    const totalPrice = banners.reduce((sum, banner) => sum + banner.price, 0);

    for (const banner of banners) {
        banner.show = Math.floor((banner.price / totalPrice) * totalResources);
    }
}

const totalResources = 1000000;
resourceBasedLoadBalancing(ads, totalResources);
console.log(ads);


