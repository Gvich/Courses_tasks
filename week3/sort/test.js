const fs = require('fs');
const path = require('path');

// Функция для тестирования сортировок
function testSortingAlgorithm(sortFunction, array) {
    const startTime = new Date();
    sortFunction(array);
    const endTime = new Date();
    return endTime - startTime;
}

// Получение списка файлов в папке с сортировками
const sortingAlgorithmsPath = path.join(__dirname, 'sortingAlgorithms');
const sortingAlgorithmFiles = fs.readdirSync(sortingAlgorithmsPath);

// Загрузка функций сортировок из файлов
const sortingAlgorithms = sortingAlgorithmFiles.map(file => require(path.join(sortingAlgorithmsPath, file)));

// Генерация случайного массива
const arraySize = 100000;
const randomArray = Array.from({ length: arraySize }, () => Math.floor(Math.random() * arraySize));

// Тестирование и вывод результатов
console.log(`Testing ${sortingAlgorithms.length} sorting algorithms on an array of size ${arraySize}\n`);
sortingAlgorithms.forEach((sortFunction, index) => {
    // console.log(randomArray)
    const sortedArray = [...randomArray]; // Clone the array for each sort test
    // const arr = sortFunction([...sortedArray]);
    const elapsedTime = testSortingAlgorithm(sortFunction, sortedArray);
    console.log(`Algorithm ${index + 1}: ${sortingAlgorithmFiles[index]} took ${elapsedTime} ms`);
    // console.log(arr ?? sortedArray);
});
