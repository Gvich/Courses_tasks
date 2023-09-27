// Convert string toUpperCase without native method, with "for", charCodeAt, fromCharCode
const text = 'Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network or may also be sent via satellite or Internet connection.'
const text2 = 'programming is fun';
const text3 = 'Hello, world!';

const toUpperCase = (str) => {
    let result = '';
    const a = 'a'.charCodeAt(0);
    const z = 'z'.charCodeAt(0);
    const space = ' '.charCodeAt(0); 

    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);

        if (char >= a && char <= z) {
            const upperChar = char - space; // make letter in UpperCase
            result += String.fromCharCode(upperChar);
        } else {
            result += str[i]; // if symbol
        }
    }

    return result;
}

console.log(toUpperCase(text));
console.log(toUpperCase(text2));
console.log(toUpperCase(text3));