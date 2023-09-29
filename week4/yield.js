// function* foo() {
//     let index = 0;
//     while (index <= 2)
//         // при достижении 2, done в yield станет true, а value undefined;
//         yield index++;
// }
//
// let iterator = foo();
// console.log(iterator.next()); // { value:0, done:false }
// console.log(iterator.next()); // { value:1, done:false }
// console.log(iterator.next()); // { value:2, done:false }
// console.log(iterator.next()); // { value:undefined, done:true }
//
function* foo(index) {
    while (index < 2) {
        yield index;
        index++;
    }
}

const iterator = foo(0);

console.log(iterator.next().value);
// Expected output: 0

console.log(iterator.next().value);
// Expected output: 1
