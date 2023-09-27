const ads = [
    { name: 'ad1', price: 1.8, lastUsed: 0, show: 0 },
    { name: 'ad2', price: 1.55, lastUsed: 0, show: 0 },
    { name: 'ad3', price: 1.13, lastUsed: 0, show: 0 },
    { name: 'ad4', price: 0.48, lastUsed: 0, show: 0 },
];

function LRULoadBalancing(banners) {
    // Find the banner that was used least recently
    let leastRecentlyUsed = banners[0];
    for (const banner of banners) {
        if (banner.lastUsed < leastRecentlyUsed.lastUsed) {
            leastRecentlyUsed = banner;
        }
    }

    // Increment the show count for the chosen banner and update the last used time
    leastRecentlyUsed.show++;
    leastRecentlyUsed.lastUsed++;

    // Reset lastUsed for all other banners
    for (const banner of banners) {
        if (banner !== leastRecentlyUsed) {
            banner.lastUsed--;
        }
    }
}

for (let user = 1; user <= 1000000; user++) {
    LRULoadBalancing(ads);
}

console.log(ads);
