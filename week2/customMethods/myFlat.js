Array.prototype.myFlat = function (depth = 1) {

    if(!Array.isArray(this)) {
        throw new TypeError('Array.prototype.myFlat was called on wrong type.');
    }

    if (isNaN(depth) || depth <= 0) {
        return this;
    }
    function flatten (arr, depth) {
        let result = [];

        for (let i = 0; i < arr.length; i++) {
            const currentEl = arr[i];
            if (currentEl === undefined){
                continue;
            }
            if (Array.isArray(currentEl) && depth > 0) {
                result.push(...flatten(currentEl, depth -1));
            } else {
                result.push(currentEl);
            }
        }

        return result;
    }

    return flatten(this, depth);
}

const test = [
    [1, 2, [3, 4]],
    [1, 2, [3, 4, [5, 6]]],
    [1, 2, [3, 4, [5, 6]]],
    [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]],
    [1, 2, , 4, 5]
]

console.log(test[0].myFlat()) // [ 1, 2, 3, 4 ]
console.log(test[1].myFlat()) // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(test[2].myFlat(2)) // [ 1, 2, 3, 4, 5, 6 ]
console.log(test[3].myFlat(Infinity)) // [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(test[4].myFlat()) // [1, 2, 4, 5]

const testing = () => {
    console.log(test.map(el => {
        try {
            return {
                native: el.flat(Infinity),
                custom: el.myFlat(Infinity),
                el
            }
        } catch (e) {
            return e.message;
        }
    }))
}
testing();