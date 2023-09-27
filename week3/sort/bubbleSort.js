let arr = [];
/*let arr = [0, 1, 2, 3]

for (let i = 0; i <= arr.length-1; i ++) {
    console.log('iiiiii', i)
    for (let j = 0; j <= arr.length-1 - i; j ++) {
        console.log('j', j)
    }
}*/
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100));
}
// let arr2 = [...arr];

// console.time('Время выполнения');
// console.log(arr.sort((a, b) => a - b), 'native');
// console.timeEnd('Время выполнения');

// для массива из 10, намного быстрее / из 1000 +- одинаковое время выполнения / из 10к елем. уже дольше намного
const bubbleSort = (arr) => {
    const n = arr.length - 1;

    for (let i = 0; i < n; i++) {
        let swapped = false;

        for (let j = 0; j < n - i; j++) {
            // console.log(j)
            if (arr[j]> arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }

    return arr;
}
// console.time('Время выполнения');
// console.log(bubbleSort(arr2), 'bubble');
// console.timeEnd('Время выполнения');
module.exports = bubbleSort;


// const arr3 = [4,3,2,1,9,-11,33,2,4];
// console.log(bubbleSort(arr3))
// arr.length = 9

// First loop on i = 0;
// Inside loop run over j = 0-7
// [4,3,2,1,9,-11,33,2,4]
// [3,2,1,4,-11,9,2,4,33]

// Second loop on i = 1;
// Inside loop run over j = 0-7
// [3,2,1,4,-11,9,2,4,33]
// [2,1,3,-11,4,2,4,4,33]

// Third loop on i = 2;
// Inside loop run over j = 0-7
// [2,1,3,-11,4,2,4,4,33]
// [1,2,-11,3,2,4,4,4,33]

// Third loop on i = 3;
// Inside loop run over j = 0-7
// [1,2,-11,3,2,4,4,4,33]
// [1,-11,2,2,3,4,4,4,33]

// Fourth loop on i = 4;
// Inside loop run over j = 0-7
// [1,2,-11,3,2,4,4,4,33]
// [-11,1,2,2,3,4,4,4,33]

// ... NOTE: if bubbleSort not optimization with swap, and j < len - 1 - i
// Fourth loop on i = 7;
// Inside loop run over j = 0-7
// [-11,1,2,2,3,4,4,4,33]


