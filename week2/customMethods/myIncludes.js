Array.prototype.myInclude = function (searchEl, index = 0) {
    if (index < 0) {
        index = this.length + index;
    }

    for (let i = index; i < this.length; i++) {
        const el = this[i];
        if (Number.isNaN(searchEl) && Number.isNaN(this[i])) {
            return true;
        }
        if (searchEl === el) {
            return true;
        }
    }
    return false;
}
let testArrays = [
    [1, 2, 3],
    [1, 2, NaN],
    ["a", "b", "c"],
]

let testElement = [
    2,
    4,
    3,
    NaN,
    'a',
    'b',
    'c',
]

let testIndex = [
    0,
    3,
    -1,
    100,
    -100,
    '2'
]

function testMyInclude(testArrays, testElement, index = 0) {
    testArrays.forEach(arr => {
        testElement.forEach(el => {
                console.log('------------------------------------');
                console.log(`Testing with array: [${arr}] and element: ${el} at index: ${index}`);
                console.table({
                    native: arr.includes(el, index),
                    custom: arr.myInclude(el, index)
                })
        });
    });
}
testIndex.forEach(idx => testMyInclude(testArrays, testElement, idx))

let arr = ["a", "b", "c"];
// console.log([1, 2, 3].myInclude(2)); // true
// console.log([1, 2, 3].myInclude(4)); // false
// console.log([1, 2, 3].myInclude(3, 3)); // false
// console.log([1, 2, 3].myInclude(3, -1)); // true
// console.log([1, 2, NaN].myInclude(NaN)); // true
// console.log(arr.myInclude("c", 3)); // false
// console.log(arr.myInclude("c", 100)); // false
// console.log(arr.myInclude("a", -100)); // true
// console.log(arr.myInclude("b", -100)); // true
// console.log(arr.myInclude("c", -100)); // true
// console.log([1, 2, 3].includes(2)); // true
// console.log([1, 2, 3].includes(4)); // false
// console.log([1, 2, 3].includes(3, 3)); // false
// console.log([1, 2, 3].includes(3, -1)); // true
// console.log([1, 2, NaN].includes(NaN)); // true
// console.log(arr.includes("c", 3)); // false
// console.log(arr.includes("c", 100)); // false
// console.log(arr.includes("a", -100)); // true
// console.log(arr.includes("b", -100)); // true
// console.log(arr.includes("c", -100)); // true''