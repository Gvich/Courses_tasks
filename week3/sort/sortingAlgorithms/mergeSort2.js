const mergeSort2 = (arr) => {
    if (arr.length <= 1) return arr;
    else {
        let mid = Math.floor(arr.length / 2);
        let left = mergeSort2(arr.slice(0, mid));
        let right = mergeSort2(arr.slice(mid));

        return merge2(left, right);
    }
}

const merge2 = (left, right) => {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++;
        } else {
            result.push(right[i]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

module.exports = mergeSort2;

// let arr = [];
//
// for (let i = 0; i < 100000; i++) {
//     arr.push(Math.floor(Math.random() * 100000));
// }
//
// console.time('Время выполнения');
// console.log(mergeSort2(arr));
// console.timeEnd('Время выполнения');