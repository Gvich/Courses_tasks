const ads = [
    {id: 1, name: 'ad1', price: 1.8, show: 0},
    {id: 2, name: 'ad2', price: 1.75, show: 0},
    {id: 3, name: 'ad3', price: 1.33, show: 0},
    {id: 4, name: 'ad4', price: 0.48, show: 0},
];

// for (let i = 5; i <= 1000; i++) {
//     const randomPrice = Math.random() + 1
//     ads.push({id: i, name: `ad${i}`, price: parseFloat(randomPrice.toPrecision(3)) , show: 0})
// }

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

function randomizedWeightedSelection(banners) {
    const totalWeight = banners.reduce((sum, banner) => sum + banner.price, 0);
    const randomValue = Math.random() * totalWeight;
    let cumulativeWeight = 0;

    for (const banner of banners) {
        cumulativeWeight += banner.price;
        if (randomValue <= cumulativeWeight) {
            return banner.show++;
        }
    }
}

function weightedRoundRobin(banners) {
    // Создаем массив для хранения элементов для циклического выбора, по сути очередь в зависимости веса
    let weightedItems = [];

    // массив, добавив каждый элемент в соответствии с его весом (несколько раз в зависимости от веса).
    for (const { id, price } of banners) {
        for (let i = 0; i < price; i += 0.1) {
            weightedItems.push(id);
        }
    }

    let currentIndex = 0;

    // Возвращает функцию, которая выбирает следующий элемент в циклическом порядке
    return function getNextItem() {
        if (weightedItems.length === 0) {
            return null;
        }

        const selectedItem = weightedItems[currentIndex];

        // обновляет текущий индекс для след. выбора
        currentIndex = (currentIndex + 1) % weightedItems.length;

        // for (let i = 0; i < banners.length; i++) { // вместо бинарного поиска
        //     if (selectedItem === banners[i].id) {
        //         return banners[i].show++
        //     }
        // }
        let ad = binarySearch(banners, selectedItem)
        return ad.show++;
    };
}
const getNextItem = weightedRoundRobin(ads);

function binarySearch (arr, value) {
    let left = 0, right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid].id === value) return arr[mid];

        arr[mid].id > value ? right = mid - 1 : left = mid + 1;
    }

    return -1;
}
console.log(binarySearch(ads, 4))


const weightedAlgorithms = [
    randomizedWeightedSelection,
    weightedLeastConnections,
    weightedRoundRobin
]

weightedAlgorithms.forEach(func => {
    console.log(`${func.name}`);
    console.time('Время выполнения');
    for (let user = 1; user <= 1000000; user++) {
        if (func.name === 'weightedRoundRobin') {
            getNextItem();
        } else {
            func(ads)
        }
    }
    console.timeEnd('Время выполнения');
    console.log('----------------------------------');
})
console.log(ads)
// console.log(ads.sort((a,b) => b.price - a.price));