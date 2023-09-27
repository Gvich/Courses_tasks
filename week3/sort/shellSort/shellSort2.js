function shellSort2(arr) {
    let increment = Math.floor(arr.length / 2);
    while (increment > 0) {
        for (let i = increment; i < arr.length; i++) {
            let j = i;
            let temp = arr[i];

            while (j >= increment && arr[j - increment] > temp) {
                arr[j] = arr[j - increment];
                j = j - increment;
            }

            arr[j] = temp;
        }

        if (increment === 2) {
            increment = 1;
        } else {
            increment = Math.floor(increment * 5 / 11)
        }
    }
    return arr;
}

console.log(shellSort2([3, 0, 2, 5, -1, 4, 1, 10]));


let arr1 = [];

for (let i = 0; i < 100000; i++) {
    arr1.push(Math.floor(Math.random() * 100000));
}

console.time('Время выполнения');
console.log(shellSort2(arr1));
console.timeEnd('Время выполнения');