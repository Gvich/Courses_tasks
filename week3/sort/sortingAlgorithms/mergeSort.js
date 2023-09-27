const mergeSort = (arr) => {
    // console.log(arr)
    if (arr.length <= 1) return arr;
    else {
        let mid = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        // console.log('left & right',left, right)
        return merge(left, right);
    }

}

const merge = (left, right) => {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        // console.log('left', left[i])
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        // console.log('right', right[i])
        result.push(right[j]);
        j++;
    }

    // console.log('merge result',result);

    return result;
    // return result.concat(left.slice(i)).concat(right.slice(j));
}

module.exports = mergeSort;
// console.log(merge([6, 21], [3, 9, 33]))
// console.log(merge([1, 38], [34, 40]))

// const arr2 = [21, 6, 9, 33, 3];
// console.log(mergeSort(arr2));
//
//
// let arr = [];
//
// for (let i = 0; i < 100000; i++) {
//     arr.push(Math.floor(Math.random() * 100000));
// }
// const arr3 = [...arr];
// // console.time('Время выполнения');
// // console.log(arr3.sort((a,b) => a-b));
// // console.timeEnd('Время выполнения');
//
// console.time('Время выполнения');
// console.log(mergeSort(arr));
// console.timeEnd('Время выполнения');