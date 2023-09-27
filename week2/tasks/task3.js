const data = ['abc', 'def', 'xzy', 'yz', 'fgh', 'abc', 'i', 'pop'];
// join , for 1, object.values
function getSortedString(data) {
    const charMap = {}
    let chars = data.join('').split('');

    for (const char of chars) {
        charMap[char.charCodeAt(0)] = char;
    }

    return Object.values(charMap).join('');
}
console.log(getSortedString(data));

// написать функцию getSortedString, которая объединит
// все символы в алфавитном порядке без дубликатов.
// Запрещено использовать sort, запрещено использовать цикл в цикле,
// запрещено использовать рекурсии,
// запрещено явно использовать 2 или более цикла типа for, while, filter, map, reduce, etc.
// результат функции 'abcdefghxyz'

// function getSortedString(data) {
//     // const iterator = [...new Set(data.join(''))]
//     const iterator = Object.values(data.join(''))
//
//     console.log(iterator)
//
//     for (let i= 0; i < iterator.length; i++) {
//         if (iterator[i] > iterator[i + 1]){
//             let temp = iterator[i];
//             iterator[i] = iterator[i + 1];
//             iterator[i + 1] = temp;
//
//             i = -1;
//         }
//     }
//
//     return iterator.join('')
// }

// while (uniqueChars.length) {
//     sorted = sorted.concat(uniqueChars.splice(uniqueChars.indexOf(uniqueChars.reduce((prev, cur) => prev < cur ? prev : cur)), 1));
// }
// let sorted = uniqueChars.map(function(el) {
//     return this.splice(this.indexOf(this.reduce((min, char) => char < min ? char : min)), 1)[0];
// }, uniqueChars.slice());

// const sorted = uniqueChars.reduce((acc, current) => {
//     const indexToInsert = acc.findIndex(item => item > current);
//
//     if (indexToInsert === -1) {
//         acc.push(current);
//     } else {
//         acc.splice(indexToInsert, 0, current);
//     }
//
//     return acc;
// }, []);