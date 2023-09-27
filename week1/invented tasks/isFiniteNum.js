// Write a custom inFinite method with custom isNaN that works like native

function isFiniteNum (n) {
    return n !== Infinity && n !== -Infinity && !isNotNumber(n);
}

function isNotNumber (n) {
    switch (n) {
        case null:
        case true:
        case false:
            return false;
    }
    if (typeof n === 'string' && n.length === 0) {
        return false;
    }
    if (Array.isArray(n) && n.length === 0) {
        return false;
    }
    if (n instanceof Date) {
        return false;
    }
    if (typeof n !== 'number' &&  typeof n !== 'bigint') {
        return true;
    }
    return n !== n;
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
    2e64,
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
    Infinity,
    -Infinity
]

const testing = () => {
    console.table(test.map(el => {
        try {
            return ({
                native: isFinite(el),
                custom: isFiniteNum(el),
                el
            })
        } catch (e) {
            return e.message;
        }
    }))
}

testing();
