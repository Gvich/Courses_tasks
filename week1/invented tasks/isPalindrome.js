// Write a function to check if a string is a palindrome or not. All tests must return true, except for the last 4 words. 
// It is forbidden to use split, join. Write your choice of toLowerCase or indexOf (or both).

const isPalindrome = (str) => {
    let lowerStr = '';
    const symbols = '!?,.`';
    for (let i = 0; i < str.length; i++) {
        // if (symbols.indexOf(str[i]) !== -1) {
        if (myIndexOf(symbols, str[i]) !== -1) {
            continue;
        }
        if (str[i] !== ' ') {
            lowerStr += toLowerCaseCustom(str[i]);
            // lowerStr += str[i].toLowerCase();
        }
    }

    for (let i = 0; i < lowerStr.length / 2; i++) {
        if(lowerStr[i] !== lowerStr[lowerStr.length - 1 - i]){
            return false;
        }
    }

    return true;
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
            if (str[j+i] == substr[j]) {
                count++;
                if (count == sublen) {
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

const toLowerCaseCustom = (str) => {
    let result = '';
    const A = 'A'.charCodeAt(0);
    const Z = 'Z'.charCodeAt(0);
    const space = ' '.charCodeAt(0); 

    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);

        if (char >= A && char <= Z) {
            const upperChar =  char + space; // make letter in LowerCase
            result += String.fromCharCode(upperChar);
        } else {
            result += str[i]; // if symbol
        }
    }

    return result;
}

const test = [
    'Mom',
    'level',
    'civIc',
    'rotator',
    'UFO tofu',
    'We panic in a pew',
    'Now, sir, a war is won!',
    'He lived as a devil, eh?',
    "Red roses run no risk, sir, on Nurse`s order.",
    "Borrow or rob?",
    "Never odd or even.",
    "We panic in a pew.",
    "Won`t lovers revolt now?",
    "Ma is a nun, as I am.",
    "Don`t nod.",
    "Sir, I demand, I am a maid named Iris.",
    "Was it a car or a cat I saw?",
    "Yo, Banana Boy!",
    "Eva, can I see bees in a cave?",
    "Madam, in Eden, I`m Adam.",
    "A man, a plan, a canal, Panama!",
    "Never a foot too far, even.",
    "He lived as a devil, eh?",
    "Ned, I am a maiden.",
    "Now, sir, a war is won!",
    "Evade me, Dave!",
    "Dennis and Edna sinned.",
    "Step on no pets!",
    'hello', // check for not palindrome
    'buy',
    'some',
    'cookies'
]

test.forEach(el => console.log(isPalindrome(el), el))

