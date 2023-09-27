function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function bucketSort3(arr) {
    const max = getMax(arr);
    const bucket = new Array(max + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        bucket[arr[i]]++;
    }

    let j = 0;
    for (let i = 0; i <= max; i++) {
        while (bucket[i] > 0) {
            arr[j++] = i;
            bucket[i]--;
        }
    }
}

const unsortedArray = [3, 6, 8, 10, 1, 2, 4, 9, 5, 7];
bucketSort3(unsortedArray)
console.log(unsortedArray); // Вывод: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let arr = [];

for (let i = 0; i < 100000; i++) {
    arr.push(Math.floor(Math.random() * 100000));
}

console.time('Время выполнения');
bucketSort3(arr)
console.timeEnd('Время выполнения');
console.log(arr);


