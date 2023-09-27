// 0! = 1;
// n ! = n * (n - 1)!;
// 3! = 1 * 2 * 3 = 6;
const factorial = n => {
    // return n === 0 ? 1 : n * factorial(n - 1);
    // if (n === 0) return 1;
    // else return n * factorial(n - 1);
    return n > 0 ? n * factorial(n - 1) : 1;
}
// console.log(factorial(4));

/*
factorial(3) = 3 * factorial(2);
factorial(2) = 2 * factorial(1);
factorial(1) = 1 * factorial(0);
factorial(0) = 1;
 */

/*
fibonacci(0) = 0;
fibonacci(1) = 1;
fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2), n > 1;
 */
const fibonacci = n => {
    // if (n === 0) return 0;
    // return n === 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(6))

const flatten = (arr, depth= 1) => {
    let res= [];

    for (let el of arr) {
        if (Array.isArray(el) && depth > 0) res.push(...flatten(el, depth - 1))
        else res.push(el)
    }

    return res;
}

let arr = [1,2, [1,3]]
// console.log(flatten(arr));

const flatten2 = (...data) => {
    let res = [];

    for (const element of data) {
        if (Array.isArray(element))
            res.push(...flatten2(...element));
        else res.push(element);
    }

    return res;
}

// console.log(flatten2('a', ['b', 2], [[[3]]], [[4], [['a'], 'c']]))

const flatten3 = (...data) => {
    return data.reduce((acc, item) => (
         Array.isArray(item) ? acc.concat(flatten3(...item))
            : acc.concat(item)
    ), []);
}

console.log(flatten3('a', ['b', 2], [[[3]]], [[4], [['a'], 'c']]))