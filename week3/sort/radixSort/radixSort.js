// Функция для поиска максимального числа в массиве
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Функция для выполнения сортировки по одному разряду
function countingSort(arr, exp) {
    const n = arr.length;
    const output = new Array(n).fill(0);
    const count = new Array(10).fill(0);

    for (let i = 0; i < n; i++) {
        const index = Math.floor(arr[i] / exp) % 10;
        count[index]++;
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
        const index = Math.floor(arr[i] / exp) % 10;
        output[count[index] - 1] = arr[i];
        count[index]--;
    }

    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

// Основная функция Radix Sort
function radixSort(arr) {
    const max = findMax(arr);

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSort(arr, exp);
    }
}

// Пример использования
const arrayToSort = [170, 45, 75, 90, 802, 24, 2, 66];
radixSort(arrayToSort);
console.log(arrayToSort); // Вывод: [2, 24, 45, 66, 75, 90, 170, 802]


let arr = [];

for (let i = 0; i < 100000; i++) {
    arr.push(Math.floor(Math.random() * 100000));
}

console.time('Время выполнения');
radixSort(arr)
console.timeEnd('Время выполнения');
console.log(arr);