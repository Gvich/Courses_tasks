// Sample ads
const ads = [
    { name: 'ad1', price: 1.8, show: 0 },
    { name: 'ad2', price: 1.55, show: 0 },
    { name: 'ad3', price: 1.13, show: 0 },
    { name: 'ad4', price: 0.48, show: 0 },
];

const requestURLs = [
    'https://example.com/page1',
    'https://example.com/page2',
    'https://example.com/page3',
    'https://example.com/page4',
];

// Function to hash a URL
function hashUrl(url) {
    let hash = 0;
    for (let i = 0; i < url.length; i++) {
        const char = url.charCodeAt(i);
        hash = (hash << 5) - hash + char;
    }
    return hash;
}
// console.log(hashUrl(requestURLs[1]))

function urlHashLoadBalancing(banners, requestUrl) {
    const hashedValue = hashUrl(requestUrl);
    const index = Math.abs(hashedValue) % banners.length;
    return banners[index].show++;
}


console.time('Время выполнения');
for (let user = 1; user <= 1000000; user++) {
    const clientURL = requestURLs[Math.floor(Math.random() * requestURLs.length)];
    urlHashLoadBalancing(ads, clientURL)
}
console.timeEnd('Время выполнения');
console.log(ads)
