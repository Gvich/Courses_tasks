function countEmojies(message, emoji) {
    const result = {};
    let count = 0;
    let emojiName = '';
    let name = '';

    let at = '@'.charCodeAt(0);
    let divider = '/'.charCodeAt(0);
    let space = ' '.charCodeAt(0);
    let colon  = ':'.charCodeAt(0);
    let less  = '>'.charCodeAt(0);


    let isName = false;
    let isEmoji = false;

    for (let i = 0; i < message.length; i++) {
        const char = message.charCodeAt(i);

        if (char === colon && message.charCodeAt(i + emoji.length + 1) === colon) {
            isEmoji = true;
            continue;
        }

        if (isEmoji) {
            if (char === colon) {
                if (emojiName === emoji) {
                    count++;
                } else {
                    emojiName = '';
                }
                isEmoji = false;
            } else {
                emojiName += String.fromCharCode(message.charCodeAt(i));
                continue;
            }
        }

        if (char === at ) {
            isName = true;
            continue;
        }
        if (isName) {
            if (char === space || char === divider) {
                isName =  false;
            } else {
                name += String.fromCharCode(message.charCodeAt(i));
                continue;
            }
        }

        if(name) {
            result[name] = count;
            emojiName = ''
            name = ''
            // count = 0;
        }
    }

    return result;
}
const text = '<@Kate />:apple: <@Max/><@alisa /> :like: received:apple::apple: :epple:';
const text2 = '<@Kate /> apple: <@Max/><@alisa /> :like: received:apple::apple:';
const symbol = 'apple';


console.log(countEmojies(text, symbol)); // { kate: 1, max: 2, alisa: 2};
console.log(countEmojies(text2, symbol)); // { kate: 2, max: 2, alisa: 2};
