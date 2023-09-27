const countingSort3 = (inputArr, n = inputArr.length) => {
    let k = Math.max(...inputArr);
    let t;
    //Create a temporary with 0 zero value
    //as the same length of max elemet + 1
    const temp = new Array(k + 1).fill(0);

    //Count the frequency of each element in the original array
    //And store it in temp array
    for(let i = 0; i < n; i++){
        t = inputArr[i];
        temp[t]++;
    }

    //Update the count based on the previous index
    for(let i = 1; i <= k; i++){
        // Updating elements of count array
        temp[i] = temp[i] + temp[i - 1];
    }

    //Output arr
    const outputArr = new Array(n).fill(0);

    for(let i = n - 1; i >= 0; i--) {
        // Add elements of array A to array B
        t = inputArr[i];
        outputArr[temp[t] - 1] = t;

        // Decrement the count value by 1
        temp[t] = temp[t] - 1;
    }

    return outputArr;
}


const unsortedArray = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort3(unsortedArray)); // Вывод: [1, 2, 2, 3, 3, 4, 8]

let arr = [];

for (let i = 0; i < 100000; i++) {
    arr.push(Math.floor(Math.random() * 100000));
}

console.time('Время выполнения');
console.log(countingSort3(arr));
console.timeEnd('Время выполнения');