const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i];
        let j = i - 1;
        // console.log(arr, currentElement)

        while (j >= 0 && arr[j] > currentElement) {
            // console.log(arr, currentElement)
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentElement;
    }
    return arr;
}

module.exports = insertionSort;
