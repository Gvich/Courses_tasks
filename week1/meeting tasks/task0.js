const text = 'My wallet balance is 14690 USDT';
const getNum = (str) => {
    let numStr = 0;
    let zero = '0'.charCodeAt(0);
    let nine = '9'.charCodeAt(0);

    // console.log(zero, nine);
    for (let i = 0; i < str.length ; i++) {
        const char = str.charCodeAt(i);
        // console.log(char);

        if (char >= zero && char <= nine) {
            const digitNum = char - zero;
            // console.log(digitNum);
            numStr = numStr * 10 + digitNum;
            // console.log(numStr);
        }
    }

    return numStr;
}
console.log(getNum(text)); // 14960


const text2 = 'My wallet balance is 14690 USDT. I paid 750 USDT for plane tickets and 921 USDT for a flat';

const getNum2 = (str) => {
    let result = 0;
    let temporary = 0;
    let zero = '0'.charCodeAt(0);
    let nine = '9'.charCodeAt(0);

    for (let i = 0; i < str.length ; i++) {
        const char = str.charCodeAt(i);

        if (char >= zero && char <= nine) {
            const digitNum = char - zero;
            temporary = temporary * 10 + digitNum;
            continue;
        }

        if (temporary) {
            result = result ? result - temporary : temporary;
            temporary = 0;
        }
    }
    return result;
}

console.log(getNum2(text2));