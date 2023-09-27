const shellSort = (arr) => {
    const n = arr.length;

    // Выбираем начальное значение гапа (шага)
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            const temp = arr[i];
            let j = i;
            // Сравниваем элементы на расстоянии gap и меняем их местами при необходимости
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            arr[j] = temp;
        }
        gap = Math.floor(gap / 2);     // Уменьшаем гап на следующей итерации
    }

    return arr;
}

module.exports = shellSort;

// let arr = [3, 0, 2, 5, -1, 4, 1];
//
// console.log(shellSort(arr));
//
// let arr1 = [];
//
// for (let i = 0; i < 100000; i++) {
//     arr1.push(Math.floor(Math.random() * 100000));
// }
//
// console.time('Время выполнения');
// console.log(shellSort(arr1));
// console.timeEnd('Время выполнения');