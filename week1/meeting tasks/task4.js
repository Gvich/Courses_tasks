const str = '?tfel yenom hcum woH .TDSU 082.091 tneps I yadretsey ,TDSU 1002,049 si ecnalab tellaw yM';

function countBalance(str) {
    let result = 0;
    let temporary = 0;
    let zero = '0'.charCodeAt(0);
    let nine = '9'.charCodeAt(0);
    let dote = '.'.charCodeAt(0);
    let coma = ','.charCodeAt(0);
    let isDecimal = false;
    let decimalPower = 0;

    for (let i = str.length - 1 ; i >= 0; i--) {
        const char = str.charCodeAt(i);
        
        if (char === dote || char === coma) {
            isDecimal = true;
            continue;
        }
        if (char >= zero && char <= nine) {
            const digitNum = char - zero;

            if (isDecimal) {
                decimalPower = decimalPower + 1;
            }

            temporary = temporary * 10 + digitNum;
            continue;
        } else {
            isDecimal = false;
        }

        if (temporary) {
            // console.log('before', temporary)
            temporary = temporary / 10 ** decimalPower;
            decimalPower = 0;
            // console.log('after', temporary)
            result = result ? result - temporary : temporary;
            temporary = 0;
        }
    }
    return result;
}

console.log(countBalance(str));