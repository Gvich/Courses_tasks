const myStringify = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return value(obj);
    }

    if (obj instanceof Array) {
        return '[' + obj.map(value).join(',') + ']';
    }

    return '{' + Object.keys(obj)
        .map(key => {
            const val = value(obj[key], 'object');
            return (val !== null) ? '"' + key + '":' + val : null;
        })
        .filter(i => i)
        .join(',') + '}';
}

const value = (val , type) => {
    switch (typeof val) {
        case 'string':
            return '"' + val + '"';
        case 'number':
        case 'boolean':
            return '' + val;
        case 'function':
        case 'symbol':
        case 'undefined':
            return type === 'object' ? null : 'null';
        case 'object':
            if (val instanceof Number || val instanceof String || val instanceof Boolean) return value(val.valueOf());
            return myStringify(val);
    }
}

const test = [
    {},
    true,
    'foo',
    [1, "false", false],
    {a: 2},
    {x: 5, y: 6},
    [new Number(1), new String("false"), new Boolean(false)],
    { x: undefined, y: Object, z: Symbol("") },
    { [Symbol("foo")]: "foo" },
    [Symbol.for("foo")],
    {a: [1,2,3,5]}
]

const testing = () => {
    console.table(test.map(el => {
        return {
            native: JSON.stringify(el),
            custom: myStringify(el),
            el
        }
    }))
}

testing()