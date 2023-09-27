// const text = '<@Kate />:apple: <@Max/><@alisa /> :like: received:apple::apple:'
const countApples = (str) => {
    const result = {};
    let count = 0;
    let name = "";
    let apple = '';
    // let endInput = str.length -1;

    let at = '@'.charCodeAt(0);
    let divider = '/'.charCodeAt(0);
    let space = ' '.charCodeAt(0);
    let colon  = ':'.charCodeAt(0);
    let less  = '>'.charCodeAt(0);

    let isName = false;
    let isApple = false;

    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        // if (char === at ) {
        //     isName = true;
        //     continue;
        // }
        // if (isName) {
        //     if (char === space || char === divider) {
        //         isName =  false;
        //     } else {
        //         name += String.fromCharCode(str.charCodeAt(i));
        //         continue;
        //     }
        // }
        //parse names until you find an apple, count apples until you find the next name or end of input.
        if (char === colon && str.charCodeAt(i+6) === colon) {
            isApple = true;
            continue;
        }

        if (isApple) {
            if (char === colon) {
                isApple = false;
            } else {
                apple += String.fromCharCode(str.charCodeAt(i));
                if (apple === 'apple') {
                    count++
                }
            // continue;
            }
        }


        if (name )  {
            console.log(apple)
            name = name.toLowerCase();
            result[name] = count;
            apple = "";
            name = "";
            // count = 0;
        }
    }

    return result;
}

// if (char === at ) {
//     isName = true;
//     continue;
// }
// //parse names until you find an apple, count apples until you find the next name or end of input.
// if (isName) {
//     if (char === space || char === divider) {
//         isName =  false;
//     } else {
//         name += String.fromCharCode(str.charCodeAt(i));
//         continue;
//     }
// }
// if (char === colon && str.charCodeAt(i+6) === colon) {
//     isApple = true;
//     continue;
//     if (isApple) {
//         if (char === colon){
//             count++;
//             isApple = false;
//         } else {
//             apple += String.fromCharCode(str.charCodeAt(i));
//             continue;
//         }
//     }
// }

const text = '<@Kate /> apple: <@Max/><@alisa /> :like: received:apple::apple:'
console.log(countApples(text));
// const countApples = (str) => {
//     const result = {};
//     let count = 0;
//     let name = '';
//
//     // Regular expression for matching names and apples
//     const regex = /<@(.*?) \/>|:apple:/g;
//     let match;
//
//     while ((match = regex.exec(str)) !== null) {
//         if (match[1]) {
//             // Name is found
//             if (name) {
//                 // Save the count of apples for the previous name
//                 result[name] = count;
//             }
//
//             name = match[1];
//             count = 0;
//         }
//         else {
//             // Increment the count of apples
//             count++;
//         }
//     }
//
//     // Save the count for the last name
//     if (name) {
//         result[name] = count;
//     }
//
//     return result;
// };

// for (let i = 0; i < str.length; i++) {
//     const char = str.charCodeAt(i);
//     if (char === at ) {
//         isName = true;
//         continue;
//     }
//     //parse names until you find an apple, count apples until you find the next name or end of input.
//     if (isName) {
//         if (char === divider || char === space) {
//             isName =  false;
//         } else {
//             name += String.fromCharCode(str.charCodeAt(i));
//             continue;
//         }
//     }
//
//     if (name) {
//         name = name.toLowerCase();
//         result[name] = count;
//         count = 0;
//         name = "";
//     }
// }