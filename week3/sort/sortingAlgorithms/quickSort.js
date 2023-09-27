
// let nums = [1, 23, 42, 6, 1, 2, 6, 2, 5, 2, 9, 11, 2, 4, 65];
// let letters = ['a', 'd', 's', 'w', 'q', 'j', 'k', 'a', 'd', 'a', 'v', 'e', 'f', 'p', 'u', 'y']

// quicksort(nums)
// quicksort(letters)
//
// console.log(nums)
// console.log(letters)

const quickSort = (arr) => {
    if (arr.length <= 1) return arr; // базовый случай: массив уже отсортирован или содержит один элемент

    const pivot = arr[Math.floor(arr.length / 2)]; // выбираем опорный элемент
    let left = [];
    let right = [];
    let equal = []; // not delete duplicated elem

    for (const element of arr) {
        if (element < pivot) left.push(element) // элементы меньше опорного помещаем в левую подгруппу
        else if (element > pivot) right.push(element) // элементы больше опорного помещаем в правую подгруппу
        else equal.push(element) // элементы равные опорному могут быть добавлены в любую подгруппу или исключены, в данном случаи добавлены
    }
    // return [...quickSort(left), pivot, ...quickSort(right)] // рекурсивно сортируем подгруппы и объединяем результат
    return [...quickSort(left), ...equal, ...quickSort(right)] // not delete duplicated elem
}

module.exports = quickSort;

// const unsortedArray = [5, 1, 2, 9, 1, 5, 6, 2];
// const sortedArray = quickSort(unsortedArray);
// // console.log(sortedArray); // [1, 2, 5, 5, 6, 9]
//
//
// let arr = [];
// for (let i = 0; i < 100000; i++) {
//     arr.push(Math.floor(Math.random() * 100000));
// }
// let arr2 = [...arr];
// quicksort(arr);
//
// console.time('Время выполнения');
// console.log(arr, 'mutations');
// console.timeEnd('Время выполнения');
//
// console.time('Время выполнения');
// console.log(quickSort(arr2), 'adding new arrays');
// console.timeEnd('Время выполнения');

