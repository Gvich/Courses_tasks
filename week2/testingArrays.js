// let myRe = /d(b+)(d)/i;
// let myArray = myRe.exec("cdbBdbsbz");
// console.log(myArray)
//
// console.log('\n/////// new Array () ///////\n');
//
// // const arr = new Array(1,2,3,4,5)
// const arr = [1,2,3,4,5]
// const test = [
//     { name: 'John' },
//     {},
//     [1, 2, 3],
//     [1, 2, 'hello'],
//     [1, 2, [1, 3]],
//     [],
//     '',
//     'Hello',
//     // Symbol('symbol'),
//     0,
//     1,
//     10,
//     -34,
//     31.14,
//     -1.14,
//     Math.PI,
//     // BigInt(1234567890),
//     null,
//     undefined,
//     // new Map (),
//     // new Array (),
//     // new Object (),
//     new Date(),
//     true,
//     false,
//     function() {},
//     NaN,
//     Infinity
// ]
// console.log(arr)
// // console.log(test)
//
// console.log('\n/////// Array.of ///////\n');
// const arr1 = Array.of(7); // [7]
// const arr2 =Array.of(1, 2, 3); // [1, 2, 3]
// console.log(arr1, arr2)
//
// const arr3= Array(7); // массив с 7 пустыми слотами
// const arr4 =  Array(1, 2, 3); // [1, 2, 3]
// console.log(arr3, arr4)
//
// console.log('\n/////// Array.from ///////\n');
//
// let obj = {name: "Jim", age: 23}
// // console.log(Array.from((obj))) // []
// console.log(Array.from('string')) // [ 's', 't', 'r', 'i', 'n', 'g' ]
//
// let set = new Set (['a', 'b', 'c', 'd'])
// console.log(Array.from(set)) //[ 'a', 'b', 'c', 'd' ]
//
// let map1 = new Map([[1, 2], [2,4], [4,8]])
// console.log(Array.from(map1)) // [ [ 1, 2 ], [ 2, 4 ], [ 4, 8 ] ]
//
// function f() {
//     return Array.from(arguments) // Массив из массивоподобного объекта (arguments)
// }
// console.log(f(1,2,3, 'hello')) // [ 1, 2, 3, 'hello' ]
//
// // манипулирования элементами
// let arr5 = Array.from([1, 2, 3], (x) => x + x);
// console.log(arr5)// [2, 4, 6]
//
// // Генерирования последовательности чисел
// let arr6 = Array.from({ length: 5 }, (v, k) => k);
// console.log(arr6)// [0, 1, 2, 3, 4]
//
//
// console.log('\n/////// Array.at ///////\n');
// // Наш массив с элементами
// const colors = ["red", "green", "blue"];
//
// // Использование свойства 'length'
// const lengthWay = colors[colors.length - 2];
// console.log(lengthWay); // Выведет: 'green'
//
// // Использование метода slice(). Обратите внимание, что возвращается массив
// const sliceWay = colors.slice(-2, -1);
// console.log(sliceWay[0]); // Выведет: 'green'
//
// // Использование метода at()
// const atWay = colors.at(-2);
// console.log(atWay); // Выведет: 'green'
//
// console.log('\n/////// Array.concat ///////\n');
//
// const numbers = [1, 2, 324, 42, '23']
// console.log(numbers.concat(colors)) // [ 1, 2, 324, 42, '23', 'red', 'green', 'blue' ]
// console.log(numbers) //[1, 2, 324, 42, '23']
//
//
// console.log('\n/////// Array.every ///////\n');
//
// function isBigEnough(el) {
//     return el >= 10;
// }
//
// console.log([12, 5, 8, 130, 44].every(isBigEnough)) // false
// console.log([12, 10, 18, 130, 44].every(isBigEnough)) // true
// console.log([].every(isBigEnough)) // true
//
// console.log([12, 5, 8, 130, 44].every(el => el >= 10)) // false
// console.log([12, 10, 18, 130, 44].every(el => el >= 10)) // true
// console.log([].every(el => el >= 10)) // true
//
//
// console.log('\n/////// Array.fill ///////\n');
//
// console.log([1, 2, 3].fill(4));               // Output: [4, 4, 4]
// console.log([1, 2, 3].fill(4, 1));            // Output: [1, 4, 4]
// console.log([1, 2, 3].fill(4, 1, 2));         // Output: [1, 4, 3]
// console.log([1, 2, 3].fill(4, 1, 1));         // Output: [1, 2, 3]
// console.log([1, 2, 3].fill(4, 3, 3));         // Output: [1, 2, 3]
// console.log([1, 2, 3].fill(4, -3, -2));       // Output: [4, 2, 3]
// console.log([1, 2, 3].fill(4, NaN, NaN));     // Output: [1, 2, 3]
// console.log([1, 2, 3].fill(4, 3, 5));         // Output: [1, 2, 3]
// console.log(Array(3).fill(4));                // Output: [4, 4, 4]
// console.log([].fill.call({ length: 3 }, 4));  // Output: {0: 4, 1: 4, 2: 4, length: 3}
//
// // Объекты заполняются по ссылке.
// let arr7 = Array(3).fill({}) // [{}, {}, {}];
// arr7[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
// console.log(arr7)
//
//
// console.log('\n/////// Array.filter ///////\n');
//
// console.log(test.filter(el => !isNaN(el)));
//
// function isPrime(num) {
//     for (let i = 2; num > i; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return num > 1;
// }
// const array1 = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log(array1.filter(isPrime)) // [ 2, 3, 5, 7, 11, 13 ]
//
// let arr8 = [
//     { id: 15 },
//     { id: -1 },
//     { id: 0 },
//     { id: 3 },
//     { id: 12.2 },
//     {},
//     { id: null },
//     { id: NaN },
//     { id: "undefined" },
// ];
// let invalidEntries = 0;
//
// function filterByID(item) {
//     if(Number.isFinite(item.id) && item.id !== 0) {
//         return true;
//     }
//     invalidEntries++;
//     return false;
// }
//
// let arrByID = arr8.filter(filterByID);
// console.log('Filtered by ID\n', arrByID) // [ { id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 } ]
//
// let fruits = ["apple", "banana", "grapes", "mango", "orange"];
// function filterItems (arr, query) {
//     // return arr.filter(function (el){
//     //     return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
//     // })
//     return arr.filter(
//         (el) => el.toLowerCase().indexOf(query.toLowerCase()) !== -1,
//     );
// }
//
// console.log(filterItems(fruits, 'ap')); // [ 'apple', 'grapes' ]
// console.log(filterItems(fruits, 'an')); // [ 'banana', 'mango', 'orange' ]
//
//
// console.log('\n/////// Array.some ///////\n');
// function isBiggerThan10(el) {
//     return el > 10;
// }
// console.log(test.some(isBiggerThan10)); // true
// console.log([1,342,2,5].some(isBiggerThan10)); //true
// console.log([1,342,2,5].some(el => el > 10)); //true
// function checkFruit(arr, val) {
//     return arr.some(el => el === val)
// }
// console.log(checkFruit(fruits, 'apple')) // true
//
// //[-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log('\n/////// Array.find ///////\n');
// console.log(array1.find(isPrime)) // 2
// console.log([4, 6, 8, 12].find(isPrime)) // undefined, не найдено
//
//
// console.log('\n/////// Array.findIndex ///////\n');
// console.log(array1.findIndex(isPrime)) // 5
// console.log([4, 6, 8, 12].findIndex(isPrime)) // -1, не найдено
//
//
// console.log('\n/////// Array.flat ///////\n');
// let arr9 = [1, 2, [3, 4]];
// console.log(arr9.flat()); // [1, 2, 3, 4]
//
// let arr10 = [1, 2, [3, 4, [5, 6]]];
// console.log(arr10.flat()); // [1, 2, 3, 4, [5, 6]]
//
// let arr11 = [1, 2, [3, 4, [5, 6]]];
// console.log(arr11.flat(2)); // [1, 2, 3, 4, 5, 6]
//
// let arr12 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log(arr12.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
//
// console.log('\n/////// Array.forEach ///////\n');
const array2 = [-3, -2, -1, , 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// array2.forEach(el => console.log(el+ el))
// console.log(array2)
//
//
// console.log('\n/////// Array.map ///////\n');
// const arrayMap = array2.map(el => el * 2);
// console.log(arrayMap)
//
// const map = Array.prototype.map;
// const charCodes = map.call("Hello World", (x) => x.charCodeAt(0));
// console.log(charCodes) // теперь charCodes равен [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
//
// const string = "12345";
// const reversed = Array.prototype.map
//     .call(string, (x) => x)
//     .reverse()
//     .join("");
// // reversed равен '54321'
// console.log(reversed)
//
//
// console.log('\n/////// Array.reduce ///////\n');
// console.log(array2.reduce((prevValue, curValue) => prevValue + curValue))
// console.log(array2);
//
// const multiplyArr = array2.reduceRight((previousValue, currentValue) => previousValue * currentValue);
// console.log(multiplyArr)
//
//
// console.log('\n/////// Array.includes ///////\n');
// const hasElement = array2.includes(10); // true
// const hasElement2 = array2.includes(15); // false
// console.log(hasElement, hasElement2)
//
// console.log('\n/////// Array.indexOf ///////\n');
// const index = array2.indexOf(10); // 13
// const index2 = array2.indexOf(15); // -1, not found
// console.log(index, index2)
//
//
// console.log('\n/////// Array.isArray ///////\n');
// // Все следующие вызовы вернут true
// console.log(Array.isArray([]));
// console.log(Array.isArray([1]));
// console.log(Array.isArray(new Array()));
// // Малоизвестный факт: Array.prototype сам является массивом:
// console.log(Array.isArray(Array.prototype));
//
// // Все следующие вызовы вернут false
// console.log(Array.isArray());
// console.log(Array.isArray({}));
// console.log(Array.isArray(null));
// console.log(Array.isArray(undefined));
// console.log(Array.isArray(17));
// console.log(Array.isArray("Array"));
// console.log(Array.isArray(true));
// console.log(Array.isArray(false));
// console.log(Array.isArray({ __proto__: Array.prototype }));
//
//
// console.log('\n/////// Array.join ///////\n');
// let stringColors = colors.join();
// let stringFruits = fruits.join(', ');
// let stringNumber = array2.join('');
// console.log(stringColors) // red,green,blue
// console.log(stringFruits) // apple, banana, grapes, mango, orange
// console.log(stringNumber) // -3-2-112345678910111213

// console.log('\n/////// Array.lastIndexOf ///////\n');
// const indexLast = array2.indexOf(10); // 13
// const indexLast2 = array2.indexOf(15); // -1, not found
// console.log(indexLast, indexLast2)
//
//
// console.log('\n/////// Array.keys ///////\n');
// let iterator = array2.keys();
// console.log(iterator)
// console.log(iterator.next()); // { value: 0, done: false }
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 2, done: false }
// console.log(iterator.next()); // { value: 3, done: false }
//
// let arr = ["a", , "c"];
// let sparseKeys = Object.keys(arr);
// let denseKeys = [...arr.keys()];
// console.log(sparseKeys); // [0, 2]
// console.log(denseKeys); // [0, 1, 2]
//
//
// console.log('\n/////// Array.reverse ///////\n');
// let myArray5 = ["один", "два", "три"];
// myArray5.reverse(); // Метод reverse на месте переставляет элементы массива,
// // на котором он был вызван, изменяет массив и возвращает ссылку на него.
// console.log(myArray5); // ['три', 'два', 'один']
//
//
// console.log('\n/////// Array.pop ///////\n');
// let myFish = ["ангел", "клоун", "мандарин", "хирург"];
// console.log(myFish); // ['ангел', 'клоун', 'мандарин', 'хирург']
// let popped = myFish.pop();
// console.log(myFish); // ['ангел', 'клоун', 'мандарин']
// console.log(popped); // 'хирург'
//
//
// console.log('\n/////// Array.push ///////\n');
// let sports = ["футбол", "бейсбол"];
// let total = sports.push("американский футбол", "плавание");
//
// console.log(sports); // ['футбол', 'бейсбол', 'американский футбол', 'плавание']
// console.log(total); // 4
//
// let vegetables = ["пастернак", "картошка"];
// let moreVegs = ["сельдерей", "свёкла"];
// // Сливает второй массив с первым
// // Эквивалентно вызову vegetables.push('сельдерей', 'свёкла');
// Array.prototype.push.apply(vegetables, moreVegs);
// console.log(vegetables); // ['пастернак', 'картошка', 'сельдерей', 'свёкла']
//
//
// console.log('\n/////// Array.shift ///////\n');
// let myFish2 = ["ангел", "клоун", "мандарин", "хирург"];
// console.log("myFish до: " + myFish2);
// //myFish до: ангел,клоун,мандарин,хирург
//
// let shifted = myFish2.shift();
//
// console.log("myFish после: " + myFish2);
// //myFish после: клоун,мандарин,хирург
//
// console.log("Удалён этот элемент: " + shifted);
// //Удалён этот элемент: ангел
//
//
// console.log('\n/////// Array.unshift ///////\n');
// let arr14 = [1, 2];
// arr14.unshift(0); // результат вызова равен 3, новой длине массива
// // arr равен [0, 1, 2]
//
// arr14.unshift(-2, -1); // = 5
// // arr равен [-2, -1, 0, 1, 2]
//
// arr14.unshift([-3]);
// // arr равен[[-3], -2, -1, 0, 1, 2]
//
//
// console.log('\n/////// Array.toString ///////\n');
// let stringByArr = myFish.toString();
// console.log(stringByArr) // ангел,клоун,мандарин
//
//
// console.log('\n/////// Array.values ///////\n');
// let arr15 = ["w", "y", "k", "o", "p"];
// let eArr = arr15.values();
// console.log(eArr) // Object [Array Iterator] {}
// // объявленные через let в циклах for
// // for (let letter of eArr) {
// //     console.log(letter);
// // }
// console.log(eArr.next().value); // w
// console.log(eArr.next().value); // y
// console.log(eArr.next().value); // k
// console.log(eArr.next().value); // o
// console.log(eArr.next().value); // p
//
//
// console.log('\n/////// Array.entries ///////\n');
// let eArr2 = arr15.entries();
// console.log(eArr2);
// console.log(eArr2.next().value); // [0, 'w']
// console.log(eArr2.next().value); // [1, 'y']
// console.log(eArr2.next().value); // [2, 'k']
//
//
// console.log('\n/////// Array.slice ///////\n');
// // Пример: наши хорошие друзья цитрусовые среди фруктов
// let fruits = ["Банан", "Апельсин", "Лимон", "Яблоко", "Манго"];
// let citrus = fruits.slice(1, 3);
// console.log(citrus) // citrus ['Апельсин', 'Лимон']
//
// // Используя slice, создаём newCar из myCar.
// var myHonda = {
//     color: "красный",
//     wheels: 4,
//     engine: { cylinders: 4, size: 2.2 },
// };
// let myCar = [myHonda, 2, "в хорошем состоянии", "приобретена в 1997"];
// let newCar = myCar.slice(0, 2);
//
// // Отображаем значения myCar, newCar и цвет myHonda
// //  по ссылкам из обоих массивов.
// console.log("myCar = " + myCar);
// console.log("newCar = " + newCar);
// console.log("myCar[0].color = " + myCar[0].color);
// console.log("newCar[0].color = " + newCar[0].color);
//
// // Изменяем цвет myHonda.
// myHonda.color = "багровый";
// console.log("Новый цвет моей Honda - " + myHonda.color);
//
// // Отображаем цвет myHonda по ссылкам из обоих массивов.
// console.log("myCar[0].color = " + myCar[0].color);
// console.log("newCar[0].color = " + newCar[0].color);
//
// console.log('\n/////// Array.splice ///////\n');
// // var myFish = ["angel", "clown", "mandarin", "sturgeon"];
// // var removed = myFish.splice(2, 0, "drum");
// //
// // // myFish равен ["angel", "clown", "drum", "mandarin", "sturgeon"]
// // // removed равен [], ничего не удалено
//
// // var myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
// // var removed = myFish.splice(3, 1);
// //
// // // removed равен ["mandarin"]
// // // myFish равен ["angel", "clown", "drum", "sturgeon"]
//
// // var myFish = ["angel", "clown", "drum", "sturgeon"];
// // var removed = myFish.splice(2, 1, "trumpet");
// //
// // // myFish равен ["angel", "clown", "trumpet", "sturgeon"]
// // // removed равен ["drum"]
//
//
// console.log('\n/////// Array.sort ///////\n');
// let scores = [1, 2, 10, 21];
// console.log(scores.sort()) // [ 1, 10, 2, 21 ]
// console.log(scores.sort((a,b)=> a-b)) // [ 1, 2, 10, 21 ]

console.log('\n/////// Array.toReversed ///////\n');
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.reverse();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]

console.log([1, , 3].toReversed()); // [3, undefined, 1]
console.log([1, , 3, 4].toReversed()); // [4, 3, undefined, 1]

const arrayLike = {
    length: 3,
    unrelated: "foo",
    2: 4,
};
console.log(Array.prototype.toReversed.call(arrayLike));
// [4, undefined, undefined]
// The '0' and '1' indices are not present so they become undefined

// console.log('\n/////// Array.toSorted ///////\n');
//
//
// console.log('\n/////// Array.toSpliced ///////\n');
//
//
console.log('\n/////// Array.with ///////\n');
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]

const arr20 = [1, 2, 3, 4, 5];
console.log(arr20.with(2, 6).map((x) => x ** 2)); // [1, 4, 36, 16, 25]

const arrayLike2 = {
    length: 3,
    unrelated: "foo",
    0: 5,
    2: 4,
    3: 3, // ignored by with() since length is 3
};
console.log(Array.prototype.with.call(arrayLike2, 0, 1));
// [ 1, undefined, 4 ]
