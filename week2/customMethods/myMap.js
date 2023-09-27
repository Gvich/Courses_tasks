Array.prototype.myMap = function (callback) {
    if (!(this instanceof Array || this instanceof String)) {
        throw new TypeError(`Array.prototype.myMap wes called on wrong type`);
    }

    if (typeof callback !== 'function') {
        throw new TypeError(`Array.prototype.myMap ${callback} is not a function`);
    }

    let res = [];

    for (let i = 0; i < this.length; i++) {
        res.push(callback(this[i], i, this));
    }
    // for (const el of this) {
    //     res.push(callback(el, this.indexOf(el), this));
    // }

    return res;
}

const arr = [1,2,3,4,5];
const str = '12345';
const obj = {1: 1, 2: 2, 3: 3, 4: 4, 5: 5};

console.log(arr.map(el => el ** 2));
console.log(arr.myMap(el => el ** 2));
console.log(Array.prototype.map.call(str, el => el ** 2));
console.log(Array.prototype.myMap.call(str, el => el ** 2));

try {
    Array.prototype.myMap.call(obj, el => el ** 2);
} catch (e) {
    console.log(e.message);
}

try {
    arr.myMap('hello');
} catch (e) {
    console.log(e.message);
}