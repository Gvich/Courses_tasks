// Write code to find the largest number in an array, with different depths. Write your method max and flat. 
// the result should return a number type. Number(str) method is not allowed (all numbers is integers).

function findMaxNumber(arr , depth = 1) {
    let newArray = flatten(arr, depth)
    let max = newArray[0];

    for (let i = 1; i < newArray.length; i++) {
        if (newArray[i] > max) {
            max = newArray[i];
        }
    }
    if (typeof max === 'string') {
        return !isNaN(max) ? toNumber(max) : NaN
        // if (!isNaN(max)) {
        //     return toNumber(max)
        // } else {
        //     return NaN;
        // }
    }

    return max;
}

function toNumber (str) {
    let result = 0;
    const zero = '0'.charCodeAt(0);

    for (let i = 0; i < str.length ; i++) {
        const char = str.charCodeAt(i);
        const digitNum = char - zero;
        result = result * 10 + digitNum;
    }
    return result;
}

function flatten(arr, depth) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        const currentEl = arr[i];

        if (Array.isArray(currentEl) && depth > 0) {
            result.push(...flatten(currentEl, depth -1))
        } else  {
            result.push(currentEl)
        }
    }

    return result;
}

const test = [
    [ 5, 3, 8, 2, 1, 9, 4],
    [ 5, 3, 8, 2, 1, 9, 4, '1000'],
    [ 5, 3, 8, 2, 1, 9, 4, '1000' , [11200]],
    [ 5, 3, 8, 2, 1, 9, 4, '1000' , ['11200']],
    ['hello', 5, 3, 8, 2, 1, 9, 4, '1000' , [11200]],
    [ 5, 3, 8, 2, 1, 9, 4, '1000' , [11200, '3000001']],
    [ 5, 3, 8, 2, 1, 9, 4, '1000' , [11200, [1, 144000]]],
]

const testing = () => {
    console.table(test.map(el => {
        try {
            return {
                native: Math.max(...el),
                custom: findMaxNumber(el, 2),
                el
            }
        } catch (e) {
            return e.message
        }
    }))
}

testing ()




