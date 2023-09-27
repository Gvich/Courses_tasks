class TestClass {}

const arr = [{value: 1}, {value: 2}, 5, 6,  7, 'test', 'test2', 'test3', 'test4', false, null, undefined, [123], [456], new Date("2021-06-22"), new Date("2022-02-01"), new Set([1,2,3]), new Set([4,5,6]), Symbol(), Symbol(), Symbol(), new Map(), new TestClass(), new TestClass()];

function groupByDataType(data) {
    return data.reduce((acc, el) => {
        // const dataType = toString.call(el);
        const dataType = el?.constructor?.name.toLowerCase() ?? String(el)


        if(!groupByDataType[dataType]) {
            groupByDataType[dataType] = []
        }
        groupByDataType[dataType].push(el);
        return groupByDataType;
    }, {})
}

console.log(groupByDataType(arr));

// Ожидаемый результат
// {
//     object: [ { value: 1 }, { value: 2 } ],
//     number: [ 5, 6, 7 ],
//     string: [ 'test', 'test2', 'test3', 'test4' ],
//     boolean: [ false ],
//     null: [ null ],
//     undefined: [ undefined ],
//     array: [ [ 123 ], [ 456 ] ],
//     date: [new Date("2021-06-22"), new Date("2022-02-01")],
//     set: [new Set([1,2,3]), new Set([4,5,6])],
//     symbol: [Symbol(), Symbol(), Symbol()],
//     map: [new Map()],
//     TestClass: [new TestClass(), new TestClass()]
// }