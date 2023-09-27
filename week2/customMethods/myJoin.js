Array.prototype.myJoin = function (separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
        const el = this[i];
        if (el === undefined || el === null) {
            string += '' + separator;
        } else {
            string += el;
            if (i < this.length - 1) {
                string += separator;
            }
        }
    }

    return string;
}

const testArr = [
    ['Fire', 'Air', 'Water'],
    [1,2,,4],
    ['Hi', 'my', 'name', 'is', null, '!'],
    []
]
const separators = [
    '',
    '-',
    ', ',
    ' + '
]


const testing = (separator) => {
    console.table(testArr.map(el => {
        return {
            native: el.join(separator),
            custom: el.myJoin(separator),
            el
        }
    }))
}
separators.forEach(el => testing(el))

// console.log(elements.myJoin());
// // Expected output: "Fire,Air,Water"
// console.log(elements.myJoin(''));
// // Expected output: "FireAirWater"
// console.log(elements.myJoin('-'));
// // Expected output: "Fire-Air-Water"
// console.log(elements.myJoin(', '));
// // Fire, Air, Water
// console.log(elements.myJoin(' + '));
// // Fire + Air + Water