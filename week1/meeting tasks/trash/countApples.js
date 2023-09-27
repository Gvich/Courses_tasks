//
// /*порахувати в кого скільки яблок
//
// expected result
// {
// kate: 1,
// max: 2,
// alisa: 2
// }
//
// обмеженя:
// - 1 цикл for
// - 1 object для збереження результатів
// - charCodeAt для знаходження необхідних символів, та fromCharCode для перетворення в lower case */
// const text = '<@Kate />:apple: <@Max/><@alisa /> :like: received:apple::apple:'
// const countApples = (str) => {
//     const result = {};
//     let count = 0;
//     let name = "";
//     let previousName = '';
//     let at = '@'.charCodeAt(0);
//     let divider = '/'.charCodeAt(0);
//     let space = ' '.charCodeAt(0);
//     let colon  = ':'.charCodeAt(0);
//     let isName = false;
//
//     for (let i = str.length - 1; i >= 0; i--) {
//         const char = str.charCodeAt(i);
//
//         if (char === divider) {
//             isName = true;
//             continue;
//         }
//         if (isName) {
//             if (char === at) {
//                 isName = false;
//             } else if (char !== space) {
//                 name = `${String.fromCharCode(str.charCodeAt(i))}${name}`;
//                 continue;
//             }
//         }
//
//         if (char === colon && str.charCodeAt(i-6) === colon) {
//             i -= 6;
//             count++;
//         }
//
//         if (name) {
//             if (!count) {
//                 count = result[previousName];
//             }
//             name = name.toLowerCase();
//             previousName = name;
//             result[name] = count;
//             count = 0;
//             name = "";
//         }
//     }
//     return result;
// }
// console.log(countApples(text));
//
// // function reverseString(str) {
// //     return str === '' ?  '' :  reverseString(str.substring(1)) + str[0];
// // }
//
// // function countApples (str) {
// //
// //     let result = {};
// //     let userName = '';
// //     let withinName = false;
// //
// //     for (let i = 0; i < str.length; i++) {
// //         if (str[i] === '<') { // Start of username
// //             withinName = true;
// //             userName = '';
// //         } else if (str[i] === '>') { // End of username
// //             withinName = false;
// //             if (!result[userName]) {
// //                 result[userName] = 0;
// //             }
// //         } else if (withinName && str[i] !== '@' && str[i] !== '/' && str[i] !== ' ') { // Within username
// //             userName += str[i].toLowerCase();
// //         } else if (str[i] === 'a' && str[i + 4] === "e") { // Check for "apple:"
// //             result[userName]++;
// //             i += 5; // Skip the processed characters
// //         }
// //     }
// //
// //     return result;
// // }
// // if (str[i + 1] === 'a' && str[i + 2] === 'p' && str[i + 3] === 'p' && str[i + 4] === 'l' && str[i + 5] === 'e') {
// //     count++;
// //     // continue;
// // }