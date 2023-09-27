
const radixSort5 = (arr = []) => {
    const base = 10;
    let divider = 1;
    let maxVal = Number.NEGATIVE_INFINITY;
    while (divider === 1 || divider <= maxVal) {
        const buckets = [...Array(10)].map(() => []);
        for (let val of arr) {
            buckets[Math.floor((val / divider) % base)].push(val);
            maxVal = val > maxVal ? val : maxVal;
        }
        arr = [].concat(...buckets);
        divider *= base;
    }
    return arr;
};

module.exports = radixSort5;

// const arr2 = [45, 2, 56, 2, 5, 6, 34, 1, 56, 89, 33];
// console.log(radixSort5(arr2));
//
//
// let arr = [];
//
// for (let i = 0; i < 100000; i++) {
//     arr.push(Math.floor(Math.random() * 100000));
// }
//
// console.time('Время выполнения');
// radixSort5(arr)
// console.timeEnd('Время выполнения');
// console.log(arr);