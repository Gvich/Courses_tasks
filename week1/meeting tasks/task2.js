const text = 'I paid 750,093 USDT for plane tickets and 921,004 USDT for a flat, 23,11 USDT for taxi. My initial wallet balance was 14690,717 USDT.'

const getBalance = (str) => {
    let balance = 0;
    let temporaryNum = 0;
    let theLast = 0;
    let decimalPower = 0;
    let zero = '0'.charCodeAt(0);
    let nine = '9'.charCodeAt(0);
    let coma = ','.charCodeAt(0);
    let isDecimal = false;

    for (let i = 0; i < str.length; i++) {
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

            temporaryNum = temporaryNum * 10 + digitNum;
            continue;
        } else {
            isDecimal = false;
        }
        
        if (temporaryNum) {
            temporaryNum = temporaryNum / 10 ** decimalPower;
            decimalPower = 0;
            balance += temporaryNum;
          
            theLast = temporaryNum;
            temporaryNum = 0;
        }
    }
    // console.log(temporaryNum); // 0
    return theLast - balance + theLast;
}

console.log(getBalance(text));