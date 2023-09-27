const quickSort_3 = arr => {
    const _partition = (arr, begin, end) => {
        let pivot = begin;
        for (let i = begin; i <= end; i++) {
            if (arr[i] < arr[begin]) {
                pivot++;
                [arr[pivot], arr[i]] = [arr[i], arr[pivot]];
            }
        }
        [arr[begin], arr[pivot]] = [arr[pivot], arr[begin]];
        return pivot;
    }
    const _quicksort = (arr, begin, end) => {
        if (begin < end) {
            const pivot = _partition(arr, begin, end);
            _quicksort(arr, begin, pivot - 1);
            _quicksort(arr, pivot + 1, end);
        }
    }

    _quicksort(arr, 0, arr.length);
}

module.exports = quickSort_3;