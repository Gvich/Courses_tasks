const text = 'I paid 750 USDT for plane tickets and 921 USDT for a flat and 449 USDT for baby sitter. My wallet balance is 14690 USDT.'

const getBalance = (str) => {
    let balance = 0;
    let temp = 0;
    let decimalPower = 1;
    const zero = '0'.charCodeAt(0);
    const nine = '9'.charCodeAt(0);

    for (let i = str.length - 1; i >= 0; i--) {
        const char = str.charCodeAt(i);

        if (char >= zero && char <= nine) {
            const digitNum = char - zero;
            temp = temp + digitNum * decimalPower;
            decimalPower *= 10;
            continue;
        }

        if (temp) {
            // console.log(temp)
            balance = balance ? balance - temp : temp;
            decimalPower = 1;
            temp = 0;
        }
    }

    return balance;
}

console.log(getBalance(text));
