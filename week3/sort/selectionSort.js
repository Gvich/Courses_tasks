const selectionSort = (arr) => {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        // console.log(arr, arr[i]);
        // Находим индекс минимального элемента в оставшейся части массива
        for (let j = i + 1; j < len; j++) {
            // console.log(arr, 'i:',arr[i], 'j:', arr[j]);
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Обмен значениями текущего элемента и минимального элемента
        if (minIndex !== i) {
            // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
            // console.log(arr, 'swapped elements');
        }

    }


    return arr;
}

module.exports = selectionSort;
// const arr2 = [21,6,9,33,3];
// console.log(selectionSort(arr2));


// let arr = [];
//
// for (let i = 0; i < 10000; i++) {
//     arr.push(Math.floor(Math.random() * 100));
// }
// // console.log(arr.sort((a,b) => a-b));
//
// console.time('Время выполнения');
// console.log(selectionSort(arr));
// console.timeEnd('Время выполнения');