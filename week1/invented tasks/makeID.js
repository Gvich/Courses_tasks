// Write a function that generates a string ID (specified length) of random characters.
// Methods Math.trunc, floor, ceil, round are not allowed. Write your own similar method 
// You can use Math.random. Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

const makeID = (lengthID) => {
    let ID = '';
    const char_list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < lengthID; i++) {
        ID += char_list.charAt(myTrunc(Math.random() * char_list.length));
    }

    return ID;
}

const myTrunc = (number) => {
    if (typeof number !== 'number' && isNaN(number)) {
        throw new TypeError('Argument should be a valid number');
    }

    return number - (number % 1); //subtract the decimal part from the number
}

console.log(makeID(8))
console.log(makeID(8))
console.log(makeID(8))
console.log(makeID(8))

// console.log(4.2 - (4.2 % 1)) // 4

