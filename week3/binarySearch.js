let arr = [];
for (let i = 1; i <= 100000; i++) {
    arr.push(i);
}
const linearSearch = (value, list) => {
    // let index = 0;
    //
    // while (index <= list.length) {
    //     if (list[index] === value) {
    //         return index;
    //     } else {
    //         index++;
    //     }
    // }
    for (let i = 0; i < list.length; i++) {
        if (list[i] === value) return i;
    }
    return -1;
}
console.time('Время выполнения');
console.log(linearSearch(100000, arr), 'linear');
console.log(linearSearch(100001, arr), 'linear');
console.timeEnd('Время выполнения');

const binarySearch = (value, list) => {
    let left_First = 0;
    let right_Last = list.length - 1;

    while (left_First <= right_Last) {
        let middle = Math.floor((left_First + right_Last) / 2);
        let currentEl = list[middle];

        if (currentEl === value) {
            return middle;
        } else if (currentEl > value) {
            right_Last = middle - 1;
        } else if (currentEl < value) {
            left_First = middle + 1;
        }
    }

    return -1;
}
console.time('Время выполнения');
console.log(binarySearch(100000, arr), 'binary');
console.log(binarySearch(100001, arr), 'binary');
console.timeEnd('Время выполнения');
/*
list = [1,2,3,4,5,6,7,8,9,10]
searchValue = 9
left = 0             | 4+1=5      | 7+1=8
right = 9            | 9          | 9
middle = 4           | 7          | 8
currEl = list[4] = 5 | list[7] = 8| list[8] = 9 and return value
*/

/*
list = [1,2,3,4,5,6,7,8,9,10]
searchValue = 3
left = 0             | 0          | 1+1=2
right = 9            | 4-1=3      | 3
middle = 4           | 1          | 2
currEl = list[4] = 5 | list[1] = 2| list[2] = 3 and return value
*/

/*
list = [1,2,3,4,5,6,7,8,9,10]
searchValue = 6
left = 0             | 4+1=5      | 5
right = 9            | 9          | 7-1=6
middle = 4           | 7          | 5
currEl = list[4] = 5 | list[7] = 8| list[5] = 6 and return value
*/

const binarySearch2 = (value, list) => {
    let start = 0, end = list.length - 1;

    while (start <= end) { // Iterate while start not meets end
        let mid = Math.floor((start + end) / 2); // Find the mid-index

        if (list[mid] === value) return mid; // If element is present at mid, return indexOfElement

        else if (list[mid] > value) // Else look in left or right half accordingly
            end = mid - 1;
        else
            start = mid + 1;
    }

    return -1;
}
console.time('Время выполнения');
console.log(binarySearch2(10000, arr), 'binary2');
console.log(binarySearch2(10001, arr), 'binary2');
console.timeEnd('Время выполнения');


const binarySearch3 = (value, list) => {
    let start = -1, end = list.length; // countIterations = 0;

    while (end - start > 1) { // Iterate while start not meets end
        // countIterations++;
        let mid = Math.floor((start + end) / 2); // Find the mid-index

        if (list[mid] === value) return mid; // If element is present at mid, return indexOfElement
        // {countIterations, index: mid}
        else if (list[mid] > value) // Else look in left or right half accordingly
            end = mid;
        else
            start = mid;
    }

    return -1;
}
console.time('Время выполнения');
console.log(binarySearch3(10000, arr), 'binary3');
console.log(binarySearch3(10001, arr), 'binary3');
console.timeEnd('Время выполнения');

const binaryRecursive = (value, list, start = 0, end = list.length - 1) => {
    if (start > end) return -1;

    let mid = Math.floor((start + end) / 2);
    let currentEl = list[mid];

    if (currentEl === value) return mid;

    if (currentEl > value)
        return binaryRecursive(value, list, start, mid - 1);
    else
        return binaryRecursive(value, list, mid + 1, end);
}
console.time('Время выполнения');
console.log(binaryRecursive(10000, arr), 'binaryRecursive');
console.log(binaryRecursive(10001, arr), 'binaryRecursive');
console.timeEnd('Время выполнения');
