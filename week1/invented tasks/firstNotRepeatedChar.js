// Write a  function to find the first not repeated character. Don't use split(). Use only for loop.
// Arguments : 'xyzabcyazx'
// Expected output : 'b'

const firstNotRepeatedChar = (str) => {;
    let result = '';
    let countChar = 0;

    for (let i = 0; i < str.length; i++) {
        countChar = 0;

        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                countChar++;
            }
        }

        if (countChar < 2) {
            result = str[i];
            break;
        }
    }

    return result;
}

const test = [
    'abacddbec', // e
    'aldsfkja;skjf;adsj', // l
    'apeouvuahap', // e
    'agpahpaprappa', // g
    'xyzabcyazx', // b
    'hello', // h
    '1498407450061134596', // 8
    'pqrst', // p
    'test', // e
    'example', // x
    'randomstring', // a
]

test.forEach(el => console.log(firstNotRepeatedChar(el), el));



// const firstNotRepeatedChar = (str) => {;
//     let result = '';
//     let countChar = {};

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         countChar[char] = (countChar[char] || 0) + 1;
//     }
//     for (key in countChar) {
//         // console.log(key)
//         if (countChar[key] === 1) {
//             return key;
//         }
//     }
//     return result;
//     //return result = Object.keys(countChar).find(key => countChar[key] === 1);
// }
