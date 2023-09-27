function bubbleSort2(arr) { // O(N^2)
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let swapped = false;
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) { // if need REVERSE just change operator
                // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                const saveItem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = saveItem;

                swapped = true;
            }
            // console.log('j', j)
        }
        // console.log(i , arr)
        if (!swapped) break;
    }
    return arr;
}
// console.log(bubbleSort2(arr3))

module.exports = bubbleSort2;