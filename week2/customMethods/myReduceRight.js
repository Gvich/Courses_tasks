Array.prototype.myReduceRight = function (callback, initialValue) {
    if (!(this instanceof Array || this instanceof String)) {
        throw new TypeError(`Array.prototype.myReduceRight wes called on wrong type`);
    }

    if (typeof callback !== 'function') {
        throw new TypeError(`Array.prototype.myReduceRight ${callback} is not a function`);
    }

    let lastIndex = this.length - 1;
    let acc = arguments.length >= 2 ? initialValue : this[lastIndex];
    let isStart = arguments.length >= 2 ? lastIndex : lastIndex - 1;

    for (let i = isStart; i >= 0; i--) {
        acc = callback(acc, this[i], i , this);
    }

    return acc;
}

let total = [0, 1, 2, 3].reduceRight(function (a, b) {
    return a + b;
}, 10);
console.log(total)

let total2 = [0, 1, 2, 3].myReduceRight(function (a, b) {
    return a + b;
}, 10);
console.log(total2)

let a = Array.prototype.myReduceRight.call('test', (acc, value) => {
    acc[value] = value + 1;
    return acc;
}, {})
console.log(a)

let b = Array.prototype.reduceRight.call('test', (acc, value) => {
    acc[value] = value + 1;
    return acc;
}, {})
console.log(b)

let c = [1,2,3,4].myReduceRight((acc, value, index, arr) =>{
    acc.push([value, index, arr]);
    return acc;
}, [])
console.log(c)

let d = [1,2,3,4].reduceRight((acc, value, index, arr) =>{
    acc.push([value, index, arr]);
    return acc;
}, [])
console.log(d)

try {
    d.myReduceRight('hello');
} catch (e) {
    console.log(e.message);
}