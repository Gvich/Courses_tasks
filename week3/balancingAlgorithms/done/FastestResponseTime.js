const ads = [
    { name: 'ad1', price: 1.8, show: 0 },
    { name: 'ad2', price: 1.55, show: 0 },
    { name: 'ad3', price: 1.13, show: 0 },
    { name: 'ad4', price: 0.48, show: 0 },
];

// Simulate measuring the response time for an ad (replace with actual measurement logic)
function measureResponseTime(ad) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Simulate response time measurement
            const responseTime = Math.random() * 10; // Replace with actual measurement
            resolve(responseTime);
        }, Math.random() * 1000);
    });
}

async function fastestResponseTime(banners) {
    const responseTimePromises = banners.map(async (banner) => {
        const responseTime = await measureResponseTime(banner);
        return { ad: banner, responseTime };
    });

    const responses = await Promise.all(responseTimePromises);

    let fastestResponseTime = Number.MAX_VALUE;
    let selectedAd = null;

    // Find the ad with the fastest response time
    for (const response of responses) {
        if (response.responseTime < fastestResponseTime) {
            fastestResponseTime = response.responseTime;
            selectedAd = response.ad;
        }
    }

    // Increase the show count for the selected ad
    if (selectedAd) {
        selectedAd.show++;
    }
}

// Example usage
async function simulateLoadBalancing() {
    const userCount = 10000;

    // Simulate user interactions concurrently
    const userPromises = Array.from({ length: userCount }, () => fastestResponseTime(ads));
    await Promise.all(userPromises);

    console.log(ads)
}

simulateLoadBalancing();

