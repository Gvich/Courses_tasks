const countApples = (str, emoji) => {
    const result = {};
    let count = 0;
    let name = "";
    let emojiName = '';
    let previousName = '';

    const at = '@'.charCodeAt(0);
    const divider = '/'.charCodeAt(0);
    const space = ' '.charCodeAt(0);
    const colon  = ':'.charCodeAt(0);
    const A = 'A'.charCodeAt(0);
    const Z = 'Z'.charCodeAt(0);

    let isName = false;
    let isEmoji = false;

    for (let i = str.length - 1; i >= 0; i--) {
        const char = str.charCodeAt(i);

        if (char === divider) {
            isName = true;
            continue;
        }
        if (char === colon && str.charCodeAt(i - emoji.length - 1) === colon) {
            isEmoji = true;
            continue;
        }

        if (isName) {
            if (char === at) {
                isName = false;
            } else if (char !== space) {
                if (char >=A && char <= Z) {
                    const upperChar =  char + space;
                    name = String.fromCharCode(upperChar) + name;
                } else {
                    name = String.fromCharCode(char) + name;
                    continue;
                }
            }
        }

        if (isEmoji) {
            if (char === colon) {
                if (emojiName === emoji) {
                    count++;
                    emojiName = '';
                } else {
                    emojiName = '';
                }
                isEmoji = false;
            } else {
                emojiName = String.fromCharCode(char) + emojiName;
            }
        }

        if (name) {
            if (!count) {
                count = (result[previousName] || 0);
            }
            previousName = name;
            result[name] = count;
            count = 0;
            name = "";
        }
    }
    return result;
}

const text = '<@Kate />:apple: <@Max/><@alisa /> :like: received:apple::apple:';
const text2 = '<@Kate />apple: <@Max/><@alisa /> :like: received:apple::apple:';
const text3 = '<@Kate />:pear: <@Max/><@alisa /> :like: received:pear::pear:';
const text4 = '<@Kate />pear: <@Max/><@alisa /> :like: received:apple::pear:';

// console.log(countApples(text, 'apple'), { alisa: 2, max: 2, kate: 1 });
// console.log(countApples(text2, 'apple'), { alisa: 2, max: 2, kate: 2 }) ;
// console.log(countApples(text, 'like'), { alisa: 1, max: 1, kate: 1 });
// console.log(countApples(text2, 'like'), { alisa: 1, max: 1, kate: 1 });
// console.log(countApples(text3, 'pear'), { alisa: 2, max: 2, kate: 1 });
// console.log(countApples(text4, 'pear'), { alisa: 1, max: 1, kate: 1 });
// console.log(countApples(text4, 'grape'), { alisa: 0, max: 0, kate: 0 });

const _ = require('lodash');
console.log(_.isEqual(countApples(text, 'apple'), { kate: 1, max: 2,  alisa: 2}));
console.log(_.isEqual(countApples(text2, 'apple'), { alisa: 2, max: 2, kate: 2 }));
console.log(_.isEqual(countApples(text, 'like'), { alisa: 1, max: 1, kate: 1 }));
console.log(_.isEqual(countApples(text2, 'like'), { alisa: 1, max: 1, kate: 1 }));
console.log(_.isEqual(countApples(text3, 'pear'), { alisa: 2, max: 2, kate: 1 }));
console.log(_.isEqual(countApples(text4, 'pear'), { alisa: 1, max: 1, kate: 1 }));
console.log(_.isEqual(countApples(text4, 'grape'), { alisa: 0, max: 0, kate: 0 }));

/*порахувати в кого скільки яблок

expected result
{
kate: 1,
max: 2,
alisa: 2
}

обмеженя:
- 1 цикл for
- 1 object для збереження результатів
- charCodeAt для знаходження необхідних символів, та fromCharCode для перетворення в lower case */
