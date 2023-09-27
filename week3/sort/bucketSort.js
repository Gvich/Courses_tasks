// Функция для сортировки массива с помощью вставки
function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
}

// Основная функция Bucket Sort
function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) {
        return arr;
    }

    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const buckets = new Array(bucketCount);

    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    for (let i = 0; i < arr.length; i++) {
        const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
        buckets[bucketIndex].push(arr[i]);
    }

    arr.length = 0;

    for (let i = 0; i < buckets.length; i++) {
        insertionSort(buckets[i]);
        for (let j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);
        }
    }

    return arr;
}

module.exports = bucketSort;

// const unsortedArray = [3, 6, 8, 10, 1, 2, 4, 9, 5, 7];
// console.log(bucketSort(unsortedArray)); // Вывод: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// let arr = [];
//
// for (let i = 0; i < 100000; i++) {
//     arr.push(Math.floor(Math.random() * 100000));
// }
//
// console.time('Время выполнения');
// bucketSort(arr)
// console.timeEnd('Время выполнения');
// console.log(arr);

// let arr = [];
//
// for (let i = 0; i < 100000; i++) {
//     arr.push(Math.random());
// }
//
// console.time('Время выполнения');
// bucketSort(arr)
// console.log(arr);
// console.timeEnd('Время выполнения');

//
// let arr2 = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434];
// bucketSort(arr2);
// console.log(arr2)