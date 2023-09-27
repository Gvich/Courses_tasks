const arrOfNumbers = [
    [1,2,3],
    [4,5,6, [7, 8, 9, [10, 11, 12, [13, 14, 15, [16, 17, 18, [19, 20, [21, 22, 23, 24]]]]]]]
];
const operator = "+";

const proceedNumbers = (numbersList, operator) => {
    const data = numbersList.flat(Infinity);

    switch (operator) {
        case "+":
            return data.reduce(((acc, el) => acc + el));
        case "-":
            return data.reduce((acc, el) => acc - el);
        case "*":
            return data.reduce((acc, el) => acc * el);
        case "/":
            return data.reduce((acc, el) => acc / el);
    }
}

console.log(proceedNumbers(arrOfNumbers, operator))
console.log(eval(arrOfNumbers.flat(Infinity).join(operator)))