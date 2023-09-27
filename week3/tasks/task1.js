// const ads = [
//     {name: 'ad1', price: 1.8, show: 0},
//     {name: 'ad2', price: 1.55, show: 0},
//     {name: 'ad3', price: 1.13, show: 0},
//     {name: 'ad4', price: 0.48, show: 0},
// ];

// function spreadTrafficEvently_BINARY_SEARCH(banners, users) {
//     let value = 0;
//     let remainingUsers = users;
//
//     while (remainingUsers) {
//         const lowestShowIndex = binarySearch(banners, value);
//         if (lowestShowIndex === -1) {
//             value++;
//         } else {
//             banners[lowestShowIndex].show++;
//             banners.sort((a, b) => a.show - b.show);
//             remainingUsers--;
//         }
//     }
// }
// spreadTrafficEvently_BINARY_SEARCH(ads, 1000000);
// console.log(ads);

// function spreadTrafficEvently_BINARY_SEARCH(banners) {
//     // let value = banners[0].show;
//     // const lowestShowIndex = binarySearch(banners, value);
//     banners[0].show++;
//     banners.sort((a, b) => a.show - b.show);
// }
// function binarySearch(arr, value) {
//     let start = 0, end = arr.length - 1;
//
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
//
//         if (arr[mid].show === value) return mid;
//
//         arr[mid].show > value ? end = mid - 1 : start = mid + 1;
//     }
//
//     return -1;
// }

// const functions = [
//     spreadTrafficEvently_BINARY_SEARCH
// ]
//
// functions.forEach(func => {
//     console.log(`${func.name}`);
//     console.time('Время выполнения');
//     for (let user = 1; user <= 1000000; user++) {
//         func(ads)
//     }
//     console.timeEnd('Время выполнения');
//     console.log('----------------------------------');
// })
//
// console.log(ads);
// // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

