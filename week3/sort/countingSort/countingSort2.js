function countingSort2(arr) {
    let n = arr.length;

    // The output character array that will have sorted arr
    let output = Array.from({length: n}, (_, i) => 0);

    // Create a count array to store count of individual
    // characters and initialize count array as 0
    let count = Array.from({length: 256}, (_, i) => 0);


    // store count of each character
    for (let i = 0; i < n; ++i)
        ++count[arr[i].charCodeAt(0)];
    // Change count[i] so that count[i] now contains actual
    // position of this character in output array
    for (let i = 1; i <= 255; ++i)
        count[i] += count[i - 1];

    // Build the output character array
    // To make it stable we are operating in reverse order.
    for (let i = n - 1; i >= 0; i--) {
        output[count[arr[i].charCodeAt(0)] - 1] = arr[i];
        --count[arr[i].charCodeAt(0)];
    }

    // Copy the output array to arr, so that arr now
    // contains sorted characters
    for (let i = 0; i < n; ++i)
        arr[i] = output[i];
    return arr;
}


const unsortedArray = [ 'g', 'e', 'e', 'k', 's', 'f', 'o',
    'r', 'g', 'e', 'e', 'k', 's' ];
console.log(countingSort2(unsortedArray));
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
let arr = [];

for (let i = 0; i < 100000; i++) {
    let letter = Math.floor(Math.random() * alphabet.length)
    arr.push(alphabet[letter]);
}

console.time('Время выполнения');
console.log(countingSort2(arr));
console.timeEnd('Время выполнения');