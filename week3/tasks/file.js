// const ads = [
//     {name: 'ad1', price: 1.8, show: 0},
//     {name: 'ad2', price: 1.55, show: 0},
//     {name: 'ad3', price: 1.13, show: 0},
//     {name: 'ad4', price: 0.48, show: 0},
// ];
//
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
// //
// // console.log(binarySearch(ads, 2))
//
// let count = 0;
// function spreadTrafficEvently_BINARY_SEARCH(banners) {
//     banners.sort((a,b) => a.show - b.show);
//
//     let ad = binarySearch(banners, count);
//
//     if(ad === -1) {
//         count++;
//     } else {
//         banners[ad].show++;
//     }
// }
//
//
// console.time('Время выполнения');
// for (let user = 1; user <= 1000000; user++) {
//     spreadTrafficEvently_BINARY_SEARCH(ads)
// }
// console.timeEnd('Время выполнения');
//
// console.log(ads)
//
