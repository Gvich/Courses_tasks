//Source:https://bit.ly/3hEZdCl
//HeapSort
const heapSort2 = arr => {
    const a = [...arr];
    let l = a.length;

    const heapify = (a, i) => {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let max = i;
        if (left < l && a[left] > a[max]) max = left;
        if (right < l && a[right] > a[max]) max = right;
        if (max !== i) {
            [a[max], a[i]] = [a[i], a[max]];
            heapify(a, max);
        }
    };

    for (let i = Math.floor(l / 2); i >= 0; i -= 1) heapify(a, i);
    for (let i = a.length - 1; i > 0; i--) {
        [a[0], a[i]] = [a[i], a[0]];
        l--;
        heapify(a, 0);
    }
    return a;
};

module.exports = heapSort2;

// console.log(heapSort2([6, 3, 4, 1]));
//
// let arr = [];
//
// for (let i = 0; i < 100000; i++) {
//     arr.push(Math.floor(Math.random() * 100000));
// }
//
// console.time('Время выполнения');
// console.log(heapSort2(arr));
// console.timeEnd('Время выполнения');
