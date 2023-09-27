const isObject = (data) => {
    // return Object.prototype.toString.call(data) === '[object Object]';
    return data?.constructor?.name === 'Object';

    // return data?.constructor?.name || String(data); // return type of all data's types
}

let test = [
    { name: 'John' },
    {},
    [1, 2, 3],
    [1, 2, , 'hello'],
    [1, 2, [1, 3]],
    [],
    '',
    'Hello',
    Symbol('symbol'),
    0,
    1,
    10,
    -34,
    31.14,
    -1.14,
    Math.PI,
    BigInt(1234567890),
    null,
    undefined,
    new Map (),
    new Array (),
    new Object (),
    new Date(),
    true,
    false,
    function() {},
    NaN,
    Infinity
]

test
    .sort((a,b) => isObject(b) - isObject(a))
    .forEach(el => console.log(isObject(el), el))