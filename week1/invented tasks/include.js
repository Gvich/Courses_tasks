// Write custom method that work as native includes. Then test on string.

const assert = require("assert");

function includes(text, matchStr, index = 0) {
    switch (matchStr) {
        case null:
        case undefined:
            return false;
        default:
            for (let i = index; i <= text.length - matchStr.length; i++) {
                let match = true;
                for (let j = 0; j < matchStr.length; j++) {
                    if (text[i + j] !== matchStr[j]) {
                        match = false;
                        break;
                    }
                }
                if (match) {
                    return true;
                }
            }    
    }
    return false;
}

let text = "Hello, World!";

assert.ok(includes(text, "Hello"), "Test 1 Failed");
assert.ok(includes(text, "World"), "Test 2 Failed");
assert.ok(!includes(text, "Hi"), "Test 3 Failed");
assert.ok(includes(text, "!", 12), "Test 4 Failed");
assert.ok(!includes(text, "Hello", 5), "Test 5 Failed");
assert.ok(!includes(text, {name: 'Jonh'}), "Test 6 Failed");
assert.ok(!includes(text, null), "Test 7 Failed");
assert.ok(!includes(text, undefined), "Test 8 Failed");
assert.ok(includes(text, []), "Test 9 Failed");
assert.ok(includes(text, ''), "Test 10 Failed");
console.log("All tests passed!");

console.log(includes(text, "Hello"))