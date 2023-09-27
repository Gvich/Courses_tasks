//////// STACK //////////
const flatten = (...stack) => {
    let res = [];

    while (stack.length) {
        const element = stack.shift();
        // if (Array.isArray(element)) {
        //    stack.unshift(...element);
        //    continue;
        // }
        // res.push(element);
        Array.isArray(element) ? stack.unshift(...element) : res.push(element)
    }

    return res;
}

// console.log(flatten('a', ['b', 2], [[[3]]], [[4], [['a'], 'c']]))


const calculate = expression => { // polish notation
    let arr = expression.split(' ');
    let stack = [];


    while (arr.length) {
        console.log(stack)
        const el = arr.pop();
        const numberEl = Number(el);

        if(!isNaN(numberEl)) {
            stack.push(numberEl);
            continue;
        }
        const firstNum = stack.pop();
        const secondNum = stack.pop();
        console.log(firstNum, secondNum, 'nums')

        switch (el) {
            case "+":
                stack.push(firstNum + secondNum);
                break
            case "-":
                stack.push(firstNum - secondNum);
                break
            case "/":
                stack.push(firstNum / secondNum);
                break
            case "*":
                stack.push(firstNum * secondNum);
                break
        }
    }

    return stack[0];
}

// console.log(calculate('+ 3 5'), 8);
// console.log(calculate('* + 2 2 3'), 12);
// console.log(calculate('/ + 3 5 * 2 2'), 2);


//////// QUEUE //////////

const queueTime = (customers, n) => {
    // return customers.reduce((a, b) => a + b) / n;
    if (!customers.length) return 0;

    const queue = [...customers];
    const tills = Array(Math.min(n , customers.length)).fill(0);

    while (queue.length) {
        // console.log(tills)
        const customer = queue.shift();
        const tillMinID = tills.indexOf(Math.min(...tills))
        tills[tillMinID] += customer;
    }
    // console.log(tills)
    return Math.max(...tills);
}

// console.log(queueTime([], 1), 0);
// console.log(queueTime([1,2,3,4], 1), 10);
// console.log(queueTime([2,2,3,3,4,4], 2), 9);
// console.log(queueTime([1,2,3,4,5], 100), 5);