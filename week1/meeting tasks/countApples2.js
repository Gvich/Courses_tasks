function countApples2(str, emoji){
    const result = {};
    let word = '';
    let count = 0;
    let canWrite = false;
    let lastFocusOnName = false;

    const a = 'a'.charCodeAt(0);
    const A = 'A'.charCodeAt(0);
    const z = 'z'.charCodeAt(0);
    const Z = 'Z'.charCodeAt(0);

    const dots = ':'.charCodeAt(0);
    const dog = '@'.charCodeAt(0);
    const slash = '/'.charCodeAt(0);

    const toLowerCase = (charCode) => {
        let code = charCode;
        if (code >= A && code <= Z) {
            code = (a - A) + code;
        }

        return String.fromCharCode(code);
    }
    const isString = (charCode) => {
        return (charCode >= a && charCode <= z) || (charCode >= A && charCode <= Z);
    }

    for (let i = str.length - 1; i >= 0; i--) {
        const charCode = str.charCodeAt(i);

        // Открываем запись, как только встретим символ / или :
        if (!canWrite && (charCode === dots || charCode === slash)) {
            canWrite = true;
            continue;
        }

        // Если запись открыта
        if (canWrite) {
            // Закрыть запись если нарвались на :
            if (charCode === dots) {
                canWrite = false;
                if (word === emoji) {
                    // console.log('before',count)
                    count = lastFocusOnName ? 1 : count + 1;
                    // console.log('after',count)
                }
                word = '';
                lastFocusOnName = false;
                continue;
            }

            // Закрыть запись если я нарвался на @
            if (charCode === dog) {
                canWrite = false;
                lastFocusOnName = true;
                continue;
            }

            // закрыть запись если нарвались на /
            if (charCode === slash) {
                word = '';
                continue;
            }

            // Если символ в диапазоне от a-z записываем его в word
            if (isString(charCode)) {
                word = toLowerCase(charCode) + word;
            }
            continue;
        }

        // Если у нас есть готовое слово
        if (word) {
            result[word] = (result[word] || 0 ) + count;
            word = '';
        }
    }

    return result;
}

const text = '<@Kate />:apple: <@Max/><@alisa /> :like: received:apple::apple:';
const text2 = '<@Kate />apple: <@Max/><@alisa /> :like: received:apple::apple:';
const text3 = '<@Kate />:pear: <@Max/><@alisa /> :like: received:pear::pear:';
const text4 = '<@Kate />pear: <@Max/><@alisa /> :like: received:apple::pear:';

// console.log(countApples2(text, 'apple'), { alisa: 2, max: 2, kate: 1 });
// console.log(countApples2(text2, 'apple'), { alisa: 2, max: 2, kate: 2 }) ;
// console.log(countApples2(text, 'like'), { alisa: 1, max: 1, kate: 1 });
// console.log(countApples2(text2, 'like'), { alisa: 1, max: 1, kate: 1 });
// console.log(countApples2(text3, 'pear'), { alisa: 2, max: 2, kate: 1 });
// console.log(countApples2(text4, 'pear'), { alisa: 1, max: 1, kate: 1 });
// console.log(countApples2(text4, 'grape'), { alisa: 0, max: 0, kate: 0 });

const _ = require('lodash');
console.log(_.isEqual(countApples2(text, 'apple'), { kate: 1, max: 2,  alisa: 2}));
console.log(_.isEqual(countApples2(text2, 'apple'), { alisa: 2, max: 2, kate: 2 }));
console.log(_.isEqual(countApples2(text, 'like'), { alisa: 1, max: 1, kate: 1 }));
console.log(_.isEqual(countApples2(text2, 'like'), { alisa: 1, max: 1, kate: 1 }));
console.log(_.isEqual(countApples2(text3, 'pear'), { alisa: 2, max: 2, kate: 1 }));
console.log(_.isEqual(countApples2(text4, 'pear'), { alisa: 1, max: 1, kate: 1 }));
console.log(_.isEqual(countApples2(text4, 'grape'), { alisa: 0, max: 0, kate: 0 }));