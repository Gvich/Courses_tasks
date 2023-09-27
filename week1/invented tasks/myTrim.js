// Write a function that trim string at start, end and both, use only for loop and charCodeAt

const myTrim = (str, type = 'both') => {
    const space = ' '.charCodeAt(0);
    let startIdx = 0;
    let endIdx = str.length - 1;

    // Find the start index to trim
    if (type === 'start' || type === 'both') {
        for (let i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) !== space) {
                startIdx = i;
                break;
            }
        }
    }

    // Find the end index to trim
    if (type === 'end' || type === 'both') {
        for (let i = str.length - 1; i >= 0; i--) {
            if (str.charCodeAt(i) !== space) {
                endIdx = i;
                break;
            }
        }
    }

    // Result based on the trimmed startIdx & endIdx
    let result = '';
    for (let i = startIdx; i <= endIdx; i++) {
        result += str[i];
    }

    return result;
}

const text = '   Hello, world!   ';
const test = [
    'start',
    'end',
    'both',
]

test.forEach(el => console.log(myTrim(text, el) + '❤️🤔'));