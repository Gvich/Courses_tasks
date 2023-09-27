function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}
// console.log(digitCount(0)) // 1
// console.log(digitCount(21)) // 2
// console.log(digitCount(3547)) // 4

function mostDigits(nums) {
    let maxDigits = 0
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}
// console.log(mostDigits([44, 849, 1, 3333])) // 4 (because 3333 has four digits)


function radixSort2(arrOfNums) {
    let maxDigitCount = mostDigits(arrOfNums)
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []) // [[], [], [],...]
        for (let i = 0; i < arrOfNums.length; i++) {
            let digit = getDigit(arrOfNums[i], k)
            digitBuckets[digit].push(arrOfNums[i])
        }
        // New order after each loop
        arrOfNums = [].concat(...digitBuckets)
    }
    return arrOfNums
}
console.log(radixSort2([1, 33, 444, 0, 3, 2])) // [0, 1, 2, 3, 33, 444]


let arr = [];

for (let i = 0; i < 100000; i++) {
    arr.push(Math.floor(Math.random() * 100000));
}

console.time('Время выполнения');
console.log(radixSort2(arr));
console.timeEnd('Время выполнения');
