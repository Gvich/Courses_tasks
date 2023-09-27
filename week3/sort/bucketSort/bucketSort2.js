function bucketSort2(arr, n = arr.length) {
    if (n <= 0)
        return;

    // 1) Create n empty buckets
    let buckets = new Array(n);

    for (let i = 0; i < n; i++) {
        buckets[i] = [];
    }

    // 2) Put array elements in different buckets
    for (let i = 0; i < n; i++) {
        let idx = arr[i] * n;
        let flr = Math.floor(idx);
        buckets[flr].push(arr[i]);
    }

    // 3) Sort individual buckets
    for (let i = 0; i < n; i++) {
        buckets[i].sort(function (a, b) {
            return a - b;
        });
    }

    // 4) Concatenate all buckets into arr[]
    let index = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < buckets[i].length; j++) {
            arr[index++] = buckets[i][j];
        }
    }
}


let arr = [];

for (let i = 0; i < 100000; i++) {
    arr.push(Math.random());
}

console.time('Время выполнения');
bucketSort2(arr)
console.log(arr);
console.timeEnd('Время выполнения');


let arr2 = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434];
bucketSort2(arr2);
console.log(arr2)