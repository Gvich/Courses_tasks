// 1. Константы O(1);
// const arr = [1,2,3,4];
// console.log(arr);
// function func() {}


// 2. Линейная сложность O(N)
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);


// 3. Квадратичная сложность O(N^2)
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//     }
// }


// 4. Сложность O(A * B)
// let sum = 0;
// const arr2 = [[1,2], [2,3], [8,9]]
// for (let i = 0; i < arr2.length; i++) {
//     for (let j = 0; j < arr2[i].length; j++) { // так как проходимся еще по подмассиву
//         sum += arr2[i][j];
//     }
// }
// console.log(sum)


// 5. Отбрасывание не доминантных функций.
// for (let i = 0; i < arr.length; i++) {
//
// }
// for (let i = 0; i < arr.length; i++) {
//
// }
// O(2 * N) -> O(N)
////////////////////////////////////////////

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//
//     }
// }
// for (let i = 0; i < arr.length; i++) {
//
// }
// O(N^2 + N) -> O(N^2)


// 6. O(log N) логарифмическая
// for example binarySearch
// const sortedArr = [1,2,4,5,6,...,16];
// N = 16
// N = 8
// N = 4
// N = 2
// N = 1
// 2^4 = 16 | log_2_16 = 4 | logN = 4;


// 7. O(2^N) полиномиальными
// function myRecursion(n) {
//     if (n <= 1) return 1;
//     // console.log(n)
//     return myRecursion(n - 1) + myRecursion(n - 1);
// }
// console.log(myRecursion(10))