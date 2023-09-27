let array_length;
/* to create MAX  array */
function heap_root(input, i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max !== i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    let temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort4(input) {

    array_length = input.length;

    for (let i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(input, i);
    }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;


        heap_root(input, 0);
    }
}

module.exports = heapSort4;

// let arr = [3, 0, 2, 5, -1, 4, 1];
// heapSort(arr);
// console.log(arr);
//
//
// let arr1 = [];
//
// for (let i = 0; i < 100000; i++) {
//     arr1.push(Math.floor(Math.random() * 100000));
// }
//
// console.time('Время выполнения');
// heapSort(arr1);
// console.log(arr1);
// console.timeEnd('Время выполнения');