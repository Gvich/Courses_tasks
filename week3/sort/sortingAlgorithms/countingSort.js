function countingSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Находим максимальное и минимальное значения в массиве
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    // Создаем массив для подсчета вхождений
    const countArray = new Array(max - min + 1).fill(0);

    // Подсчитываем вхождения элементов
    for (let i = 0; i < arr.length; i++) {
        countArray[arr[i] - min]++;
    }

    // Восстанавливаем отсортированный массив
    const sortedArray = [];
    for (let i = 0; i < countArray.length; i++) {
        while (countArray[i] > 0) {
            sortedArray.push(i + min);
            countArray[i]--;
        }
    }

    return sortedArray;
}

module.exports = countingSort;

// const unsortedArray = [4, 2, 2, 8, 3, 3, 1];
// console.log(countingSort(unsortedArray)); // Вывод: [1, 2, 2, 3, 3, 4, 8]
//
// let arr = [];
//
// for (let i = 0; i < 100000; i++) {
//     arr.push(Math.floor(Math.random() * 100000));
// }
//
// console.time('Время выполнения');
// console.log(countingSort(arr));
// console.timeEnd('Время выполнения');
