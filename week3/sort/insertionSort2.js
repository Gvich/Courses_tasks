const insertionSort2 = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentEl = arr[i];// Сохраняем текущий элемент, который мы хотим вставить в отсортированную часть массива.
        let j;

        for (j = i - 1; j >= 0 && arr[j] > currentEl ; j--) {
            arr[j + 1] = arr[j];
            // Пока индекс j не стал отрицательным (не дошли до начала массива)
            // и текущий элемент больше элемента в отсортированной части,
            // сдвигаем большие элементы вправо, чтобы освободить место для вставки текущего элемента.
        }
        arr[j + 1] = currentEl;
        // Вставляем текущий элемент на своё правильное место в отсортированной части массива.
        // console.log(arr, currentEl);
    }

    return arr;
}
module.exports = insertionSort2;

// const arr2 = [21,6,9,33,3];
// console.log(insertionSort2(arr2))
//
//
// let arr = [];
//
// for (let i = 0; i < 100; i++) {
//     arr.push(Math.floor(Math.random() * 100));
// }
// // console.log(arr.sort((a,b) => a-b));
//
// console.time('Время выполнения');
// console.log(insertionSort2(arr));
// console.timeEnd('Время выполнения');