function countingSort4(arr, min, max) {
    let j = 0;
    let supplementary = [];

    for (let i = min; i <= max; i++) {
        supplementary[i] = 0;
    }

    for (let i=0; i < arr.length; i++) {
        supplementary[arr[i]] += 1;
    }

    for (let i = min; i <= max; i++) {
        while (supplementary[i] > 0) {
            arr[j++] = i;
            supplementary[i] -= 1;
        }
    }
    return arr;
}

module.exports = countingSort4;

// const unsortedArray = [4, 2, 2, 8, 3, 3, 1];
// console.log(countingSort4(unsortedArray, 1, 8)); // Вывод: [1, 2, 2, 3, 3, 4, 8]
// // console.log(countingSort4(unsortedArray, Math.min(...unsortedArray), Math.max(...unsortedArray))); // Вывод: [1, 2, 2, 3, 3, 4, 8]
//
// let arr = [];
//
// for (let i = 0; i < 100000; i++) {
//     arr.push(Math.floor(Math.random() * 100000));
// }
//
// console.time('Время выполнения');
// console.log(countingSort4(arr, 0 , 100000));
// console.timeEnd('Время выполнения');

// console.time('Время выполнения');
// console.log(countingSort4(arr, Math.min(...arr) , Math.max(...arr)));
// console.timeEnd('Время выполнения');