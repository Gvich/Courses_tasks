const countingSort = (arr, size, place) => {

    let output = new Array(size + 1).fill(0);
    let max = Math.max(...arr);

    let freq = new Array(max + 1).fill(0);

    // Calculate count of elements
    for (let i = 0; i < size; i++){
        const num = Math.floor(arr[i] / place) % 10;
        freq[num]++;
    }

    // Calculate cummulative count
    for (let i = 1; i < 10; i++){
        freq[i] += freq[i - 1];
    }

    // Place the elements in sorted order
    for (let i = size - 1; i >= 0; i--) {
        const num = Math.floor(arr[i] / place) % 10;
        output[freq[num] - 1] = arr[i];
        freq[num]--;
    }

    //Copy the output array
    for (let i = 0; i < size; i++){
        arr[i] = output[i];
    }
}

const radixSort4 = (arr, size = arr.length) => {
    //Get the max element
    let max = Math.max(...arr);

    //Sort the array using counting sort
    for(let i = 1; parseInt(max / i) > 0; i *= 10){
        countingSort(arr, size, i);
    }
}

module.exports = radixSort4;

// let arr2 = [1, 33, 444, 0, 3, 2]
// radixSort4(arr2)
// console.log(arr2) // [0, 1, 2, 3, 33, 444]
//
//
// let arr = [];
//
// for (let i = 0; i < 100000; i++) {
//     arr.push(Math.floor(Math.random() * 100000));
// }
//
// console.time('Время выполнения');
// radixSort4(arr)
// console.timeEnd('Время выполнения');
// console.log(arr);