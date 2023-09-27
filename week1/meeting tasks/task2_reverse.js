const text = 'I paid 750,093 USDT for plane tickets and 921,004 USDT for a flat, 23,11 USDT for taxi. My initial wallet balance was 14690,717 USDT.'

const getBalance = (str) => {
    let balance = 0;
    let temporaryNum = 0;
    let decimalPower = -1;
    let zero = '0'.charCodeAt(0);
    let nine = '9'.charCodeAt(0);
    let coma = ','.charCodeAt(0);
    let isDecimal = false;

    for (let i = str.length - 1; i >= 0; i--) {
        const char = str.charCodeAt(i);

        if (char === coma) {
            isDecimal = true;
            continue;
        }

        if (char >= zero && char <= nine) { 
            const digitNum = char - zero;

            if (isDecimal) {
                decimalPower = decimalPower + 1;
            }

            temporaryNum = temporaryNum / 10 + digitNum;
            continue;
        } else {
            isDecimal = false;
        }
        
        if (temporaryNum) {
            temporaryNum = temporaryNum * 10 ** decimalPower;
            decimalPower = -1;

            balance = balance ? balance - temporaryNum : temporaryNum;
            
            temporaryNum = 0;
        }
        
    }
    return balance;
}

console.log(getBalance(text));