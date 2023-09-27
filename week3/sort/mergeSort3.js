const mergeSort3 = (arr) => {
    if (arr.length <= 1) return arr;
    else {
        let mid = Math.floor(arr.length / 2);
        let left = mergeSort3(arr.slice(0, mid));
        let right = mergeSort3(arr.slice(mid));

        return  merge3(left, right);
    }
}


const merge3 = (left, right) => {
    let sortedArr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }

    return [...sortedArr, ...left, ...right];
}

module.exports = mergeSort3;

//
// let arr = [];
// for (let i = 0; i < 100000; i++) {
//     arr.push(Math.floor(Math.random() * 100000));
// }
//
// console.time('Время выполнения');
// console.log(mergeSort3(arr));
// console.timeEnd('Время выполнения');
