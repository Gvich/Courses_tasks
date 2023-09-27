const shellSort4 = (arr, n = arr.length) => {
    //Reduce the interval in each cycle
    for (let interval = Math.floor(n / 2); interval > 0;  interval = Math.floor(interval / 2)) {
        //Sort the element using insertion sort in each cycle.
        for (let i = interval; i < n; i += 1) {
            let temp = arr[i];
            let j;
            for (j = i; j >= interval && arr[j - interval] > temp; j -= interval) {
                arr[j] = arr[j - interval];
            }
            arr[j] = temp;
        }
    }
}
let arr = [3, 0, 2, 5, -1, 4, 1, 10]
shellSort4(arr)
console.log(arr);


let arr1 = [];

for (let i = 0; i < 100000; i++) {
    arr1.push(Math.floor(Math.random() * 100000));
}

console.time('Время выполнения');
shellSort4(arr1);
console.log(arr1);
console.timeEnd('Время выполнения');