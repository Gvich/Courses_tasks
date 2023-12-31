/* function to sort arr using shellSort */
function shellSort3 (arr) {
    let n = arr.length;

    // Start with a big gap, then reduce the gap
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {

        // Do a gapped insertion sort for this gap size.
        // The first gap elements a[0..gap-1] are already
        // in gapped order keep adding one more element
        // until the entire array is gap sorted
        for (let i = gap; i < n; i += 1) {

            // add a[i] to the elements that have been gap
            // sorted save a[i] in temp and make a hole at
            // position i
            let temp = arr[i];

            // shift earlier gap-sorted elements up until
            // the correct location for a[i] is found
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
                arr[j] = arr[j - gap];

            // put temp (the original a[i]) in its correct
            // location
            arr[j] = temp;
        }
    }
    return arr;
}

module.exports = shellSort3;

// console.log(shellSort3([3, 0, 2, 5, -1, 4, 1, 10]));
//
//
// let arr1 = [];
//
// for (let i = 0; i < 100000; i++) {
//     arr1.push(Math.floor(Math.random() * 100000));
// }
//
// console.time('Время выполнения');
// console.log(shellSort3(arr1));
// console.timeEnd('Время выполнения');