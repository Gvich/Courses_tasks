Array.prototype.myReduce = function (callback, initialValue) {
    if (!(this instanceof Array || this instanceof String)) {
        throw new TypeError(`Array.prototype.myReduce wes called on wrong type`);
    }

    if (typeof callback !== 'function') {
        throw new TypeError(`Array.prototype.myReduce ${callback} is not a function`);
    }

    let acc = arguments.length >= 2 ? initialValue : this[0];
    let iStart = arguments.length >= 2 ? 0 : 1;

    for (let i = iStart; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
    }

    return acc;
}

let total = [0, 1, 2, 3].reduce(function (a, b) {
    return a + b;
}, 10);
console.log(total)

let total2 = [0, 1, 2, 3].myReduce(function (a, b) {
    return a + b;
}, 10);
console.log(total2)

let a = Array.prototype.myReduce.call('test', (acc, value) => {
    acc[value] = value + 1;
    return acc;
}, {})
console.log(a)

let b = Array.prototype.reduce.call('test', (acc, value) => {
    acc[value] = value + 1;
    return acc;
}, {})
console.log(b)

let c = [1,2,3,4].myReduce((acc, value, index, arr) =>{
    acc.push([value, index, arr]);
    return acc;
}, [])
console.log(c)

let d = [1,2,3,4].reduce((acc, value, index, arr) =>{
    acc.push([value, index, arr]);
    return acc;
}, [])
console.log(d)