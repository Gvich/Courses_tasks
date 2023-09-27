// Write a function that takes a string or array and returns it in reverse order without using the reverse() method. Split and join are not allowed.
const array =  ['one', 'two', 'three'];
const test = [
    [ 5, 3, 8, 2, 1, 9, 4],
    [ 5, 3, 8, 2, 1, 9, 4, '1000'],
    [ 5, 3, 8, 2, 1, 9, 4, '1000' , [11200]],
    [ 5, 3, 8, 2, 1, 9, 4, '1000' , ['11200']],
    ['hello', 5, 3, 8, 2, 1, 9, 4, '1000' , [11200]],
    [ 5, 3, 8, 2, 1, 9, 4, '1000' , [11200, '3000001']],
    [ 5, 3, 8, 2, 1, 9, 4, '1000' , [11200, [1, 144000]]],
]
const text = 'Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network or may also be sent via satellite or Internet connection.'
// console.log(text.split('').reverse().join(''));

const reversedStrArr = (data) => {
    let reversedStr = '';
    let reversedArr = [];

    for (let i = data.length - 1; i >= 0; i--) {
        typeof data === 'string' ? reversedStr += data[i] : reversedArr.push(data[i]);
    }
    return reversedStr || reversedArr;
}

console.log(reversedStrArr(text));
console.log(reversedStrArr(array));
// test.forEach(el => console.log(reversedStrArr(el)))