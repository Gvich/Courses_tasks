const MIN_MERGE = 32;

function calcMinRun(n) {
    let r = 0;
    while (n >= MIN_MERGE) {
        r |= n & 1;
        n >>= 1;
    }
    return n + r;
}

function insertionSort(arr, left, right) {
    for (let i = left + 1; i <= right; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= left && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
}

function merge(arr, l, m, r) {
    const len1 = m - l + 1;
    const len2 = r - m;

    const left = new Array(len1);
    const right = new Array(len2);

    for (let i = 0; i < len1; i++)
        left[i] = arr[l + i];
    for (let i = 0; i < len2; i++)
        right[i] = arr[m + 1 + i];

    let i = 0;
    let j = 0;
    let k = l;

    while (i < len1 && j < len2) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    while (i < len1) {
        arr[k] = left[i];
        k++;
        i++;
    }

    while (j < len2) {
        arr[k] = right[j];
        k++;
        j++;
    }
}

function timSort(arr) {
    const n = arr.length;

    const minRun = calcMinRun(n);

    for (let start = 0; start < n; start += minRun) {
        const end = Math.min(start + minRun - 1, n - 1);
        insertionSort(arr, start, end);
    }

    for (let size = minRun; size < n; size *= 2) {
        for (let left = 0; left < n; left += 2 * size) {
            const mid = left + size - 1;
            const right = Math.min(left + 2 * size - 1, n - 1);

            if (mid < right) {
                merge(arr, left, mid, right);
            }
        }
    }
}

// Пример использования
const arr = [64, 34, 25, 12, 22, 11, 90];
timSort(arr);
console.log("Отсортированный массив:", arr);
