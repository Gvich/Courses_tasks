// const arr1 = [3, 4, -21, 2, 1, 5, 2, -6, 3, 11, 4, 0];

const quickSort_2 = (arr) => {
    return quickSortHelper(arr, 0, arr.length - 1); // without return be undefined , but array will sort
}

const quickSortHelper = (arr, left, right) => {
    if (arr.length < 2) return arr;

    const index = partition(arr, left, right);

    if (left < index - 1) quickSortHelper(arr, left, index - 1);

    if (index < right) quickSortHelper(arr, index, right);

    return arr;
}

const partition = (arr, left, right) => {
    const pivot = arr[Math.floor((left + right) / 2)];

    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }

        while (arr[right] > pivot) {
            right--;
        }

        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }

    return left;
}

const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    // const temp = arr[i];
    // arr[i] = arr[j];
    // arr[j] = temp;
}

module.exports = quickSort_2;

// console.log(quickSort_2(arr1));
// console.log(arr1)

// let arr = [];
// for (let i = 0; i < 100000; i++) {
//     arr.push(Math.floor(Math.random() * 100000));
// }
//
//
// console.time('Время выполнения');
// console.log(quickSort_2(arr), 'mutate array');
// console.timeEnd('Время выполнения');