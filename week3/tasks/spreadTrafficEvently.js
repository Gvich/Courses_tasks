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

let startIndex = 0;
function spreadTrafficEvently_ROUND_ROBIN(banners) {
    banners[startIndex].show++;
    startIndex = (startIndex + 1) % banners.length;
} // like RoundRobin

function spreadTrafficEvently_REDUCE_FIND_MIN(banners) {
    const addWithMinShow = findMin(banners);
    addWithMinShow.show++;
} // like LeastConnection

function findMin(banners) {
    return banners.reduce((minAd, ad) => (ad.show < minAd.show ? ad : minAd), banners[0]);
}

function spreadTrafficEvently_SORT(banners) {
    const ads = [...banners].sort((a, b) => a.show - b.show);
    ads[0].show++;
} // like LeastConnection

function spreadTrafficEvently_SHIFT_PUSH(banners) {
    const ad = banners.shift();
    ad.show++;
    banners.push(ad);
} // like RoundRobin????

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
} // like leastConnection

function spreadTrafficEvenly_MAX_VALUE(banners) {
    let minIndex = 0;
    let minValue = Number.MAX_VALUE;

    for (let i = 0; i < banners.length; i++) {
        if (banners[i].show < minValue) {
            minValue = banners[i].show;
            minIndex = i;
        }
    }

    banners[minIndex].show++;
    return minIndex;
} // like LeastConnection
function spreadTrafficEvently_BINARY_SEARCH(banners) {
    let value = banners[0].show;
    const lowestShowIndex = binarySearch(banners, value);
    banners[lowestShowIndex].show++;
    banners.sort((a, b) => a.show - b.show);
}
function binarySearch(arr, value) {
    let start = 0, end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid].show === value) return mid;

        arr[mid].show > value ? end = mid - 1 : start = mid + 1;
    }

    return -1;
}

function leastResponseTime(banners) {
    let minResponseTime = Number.MAX_VALUE;
    let selectedAd = null;

    for (const banner of banners) {
        const responseTime = measureResponseTime(banner);
        if (responseTime < minResponseTime) {
            minResponseTime = responseTime;
            selectedAd = banner;
        }
    }
    return selectedAd.show++;
}

function measureResponseTime(ad) {
    const minResponseTime = 100; // 100 milliseconds
    const maxResponseTime = 3000; // 3000 milliseconds

    return Math.random() * (maxResponseTime - minResponseTime) + minResponseTime;
}

function spreadTrafficEvently_BINARY_SEARCH2(banners, users) {
    let value = 0;
    let remainingUsers = users;

    while (remainingUsers) {
        const lowestShowIndex = binarySearch(banners, value);
        if (lowestShowIndex === -1) {
            value++;
        } else {
            banners[lowestShowIndex].show++;
            banners.sort((a, b) => a.show - b.show);
            remainingUsers--;
        }
    }
}
// spreadTrafficEvently_BINARY_SEARCH2(ads, 1000000);
// console.log(ads);

function spreadTrafficEvently (banners, users) {
    let j = 0;

    for (let i = 0; i < users; i++) {
        if (j < banners.length) {
            banners[j++].show++;
        } else {
            j = 0;
            banners[j++].show++;
        }
    }
} // like RoundRobin????
// spreadTrafficEvently(ads, 1000000);
// console.log(ads);

function spreadTrafficEvently2 (banners, users) {
    for (let i = 0; i < users; i++) {
        banners[i % banners.length].show++;
    }
} // like RoundRobin????
// spreadTrafficEvently2(ads, 1000000);
// console.log(ads);



const functions = [
    // spreadTrafficEvently_RANDOM,
    // leastResponseTime,
    // spreadTrafficEvently_REDUCE_FIND_MIN,
    // spreadTrafficEvently_SORT,
    // spreadTrafficEvently_SHIFT_PUSH,
    spreadTrafficEvently_FOR_LOOP,
    // spreadTrafficEvently_ROUND_ROBIN,
    // spreadTrafficEvenly_MAX_VALUE,
    // spreadTrafficEvently_BINARY_SEARCH,

]


functions.forEach(func => {
    console.log(`${func.name}`);
    console.time('Время выполнения');
    for (let user = 1; user <= 1000000; user++) {
        func(ads)
    }
    console.timeEnd('Время выполнения');
    console.log('----------------------------------');
})


console.log(ads);

