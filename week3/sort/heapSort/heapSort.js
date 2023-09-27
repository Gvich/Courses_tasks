const heapSort = (arr) => {
    const n = arr.length; // count of elements

    // Построение кучи (перегруппировка массива)
    for (let i = Math.floor(n / 2) - 1; i >=0; i--) {
        heapify(arr, n , i);
    }
    // Извлечение элементов из кучи и сортировка
    for (let i = n - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // Перемещаем текущий корень в конец

        heapify(arr, i, 0);  // Вызываем heapify на уменьшенной куче
    }

    return arr;
}

const heapify = (arr, n, i) => {
    let largest = i; // Инициализируем наибольший элемент как корень
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // Если левый дочерний элемент больше корня
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    // Если правый дочерний элемент больше корня
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    // Если наибольший элемент не корень
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];  // Меняем местами
        heapify(arr, n, largest); // Рекурсивно просеиваем вниз наибольший элемент
    }

}

const arr2 = [21, 6, 9, 33, 3];
console.log(heapSort(arr2));

let arr = [];

for (let i = 0; i < 100000; i++) {
    arr.push(Math.floor(Math.random() * 100000));
}

console.time('Время выполнения');
console.log(heapSort(arr));
console.timeEnd('Время выполнения');