/*
Алгоритм
1. Выбрать опорный элемент
2. Разделить массив на два подмассива: елементы больше или меньше опорного.
3. Рекурсивно применить сортировку к двум подмассивам.    */
const arr1 = [3, 2, 1, 5, 3, 11, 0];

const quickSort1 = (arr) => { // O(N*N)
    if (arr.length < 2) return arr;

    const pivot = arr[0];
    let less = [];
    let greater = [];

    for(let i = 1; i < arr.length; i++) {
        if (arr[i] <= pivot) less.push(arr[i]);
        else greater.push(arr[i]);
    }
    // console.log(less, pivot, greater)
    return [...quickSort1(less), pivot, ...quickSort1(greater)];
}
// console.log(quickSort1(arr1));

const quickSortWithMiddlePivot = (arr) => { // O(N*logN)
    if (arr.length < 2) return arr;

    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    let less = [];
    let greater = [];

    for(let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) continue;

        if (arr[i] <= pivot) less.push(arr[i]);
        else greater.push(arr[i]);
    }
    // console.log(less, pivot, greater);
    return [...quickSort1(less), pivot, ...quickSort1(greater)];
}
// console.log(quickSortWithMiddlePivot(arr1));

module.exports = quickSortWithMiddlePivot;

// let arr = [];
// for (let i = 0; i < 100000; i++) {
//     arr.push(Math.floor(Math.random() * 100000));
// }
// let arr2 = [...arr];
//
// console.time('Время выполнения');
// console.log(quickSort1(arr), 'pivot is first el');
// console.timeEnd('Время выполнения');
//
// console.time('Время выполнения');
// console.log(quickSortWithMiddlePivot(arr2), 'middle pivot');
// console.timeEnd('Время выполнения');