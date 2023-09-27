// Write a function that counts the number of vowels in a string without using the match() method. 
// By writing your indexOf method, without the fromIndex parameter
const text = 'Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network or may also be sent via satellite or Internet connection.'
const text2 = 'programming is fun'

const countVowels = (str) => {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (myIndexOf(vowels, str[i]) !== -1) {
            count++;
        }
        // if (vowels.indexOf(str[i]) !== -1) {
        //     count++;
        // } //the same result as native method
    }

    return count;
}

const myIndexOf = (str, substr) => {
    let len = str.length;
    let sublen = substr.length;
    let count = 0;
    if (sublen > len) {
        return -1;
    }
    for (let i = 0; i < len - sublen + 1; i++) {
        for (let j = 0; j < sublen; j++) {
            if (str[j+i] === substr[j]) {
                count++;
                if (count === sublen) {
                    return i;
                }
            } else {
                count = 0;
                break;
            }
        }
    }
    return -1;
}

console.log('first text:', countVowels(text));
console.log('second text:', countVowels(text2));


// console.log(myIndexOf('Синий кит', 'Синий'))
// console.log(myIndexOf('Синий кит', 'Голубой'))
// console.log('Синий кит'.indexOf('Синий'))   // вернёт  0
// console.log('Синий кит'.indexOf('Голубой'))  // вернёт -1
// console.log('Синий кит'.indexOf('кит', 0))    // вернёт  6
// console.log('Синий кит'.indexOf('кит', 5))    // вернёт  6
// console.log('Синий кит'.indexOf('', 8))     // вернёт  8
// console.log('Синий кит'.indexOf('', 9))      // вернёт 9
// console.log('Синий кит'.indexOf('', 10))      // вернёт 9