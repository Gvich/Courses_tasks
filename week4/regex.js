// const text = 'Hello World 1234'
// const text = '123123123Hello World 1234'

// const regexp = /orld/;
// const regexp = /[abcdefhijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ]/g
// const regexp = /[a-z]/ig // i - ignore case, g - global ищет все совпадения


// const regexp = /[a-z,A-z]{5}/g // {1,5} size
// const regexp = /[a-z]*/gi // ['Hello','','World','','','','','','']
// const regexp = /[a-z]+/gi // + Відповідає попередньому символу, повтореному 1 або більше разів.

// const regexp = /[0-9]+[a-z]+/ig // 123123123Hello

// const regexp = /[^0-9]+/i // ignore only numbers 'Hello World '
// const regexp = /[^a-z]+/ig // ignore letters [ ' ', ' 1234' ]

// const regexp = /\w+/g // [ 'Hello', 'World', '1234' ] Відповідає будь-якому цифробуквенному символу,
// включаючи нижнє підкреслення.
// Еквівалентний [A-Za-z0-9_].
// Наприклад, /\w/ збігається з 'a' в "apple," '5' в "$5.28," і '3' в "3D."

// const regexp = /\d+/g // ['1234'] only numbers \d
// const regexp = /\d/g // [ '1', '2', '3', '4' ] only numbers \d
// console.log(text.match(regexp))

// end of first video
/////////////////////////////////////////////////////////////////////////////////////////////////////
// const text = 'Hello, - World .1234'

// const regexp = /(?<=\s)\w+(?=\s)/ // (?<=\s) check for space before word, (?=\s) check after, both don't add
// const regexp = /(?<=\s)\w+(?=\w)/g // [ 'Worl' ]
// const regexp = /(?<=\s)\w+(?:\w)/g // [ 'World' ]

// const text = 'Hello, - World1234+'

// const regexp = /(?<=\s)\w+[a-z]/g //[ 'World' ]
// const regexp = /[a-z]+[a-z]/ig // [ 'Hello', 'World' ]
// const regexp = /[a-z]+(?:[a-z])/ig // [ 'Hello', 'World' ]


// console.log(text.match(regexp))
// end of second video
/////////////////////////////////////////////////////////////////////////////////////////////////////

// const text = '<@Victor/> Hey team. I would like to have a call with <@Megan/> at 17:00. <@Mike/> would you join us?'
// const regexp = /(?<=@)\w+/g // [ 'Victor', 'Megan', 'Mike' ]

// const text = '<@Victor_Ch/> Hey team. I would like to have a call with <@Megan123/> at 17:00. <@Mike /> would you join us?'
// const regexp = /(?<=@)\w+/g // [ 'Victor_Ch', 'Megan123', 'Mike' ]
// const regexp = /(?<=@)[a-z]+(?=[0-9_\s])/gi // [ 'Victor', 'Megan', 'Mike' ]


// console.time('regexp')
// console.log(text.match(regexp))
// console.timeEnd('regexp')
// end of third video
/////////////////////////////////////////////////////////////////////////////////////////////////////


// const text = '<@Victor_Ch/> Hey team. I would like to have qwer123_aj@gmail.com123.service_5.com a call with <@Megan123/> at 17:00. <@Mike /> test@test.ua would you join us?'
// const regexp = /@[a-z._\d]+(?=\s)/g // [ '@gmail.com123.service_5.com', '@test.ua' ]
// const regexp = /(?<=\s)\w+@[\w.]+(?=\s)/g // [ 'qwer123_aj@gmail.com123.service_5.com', 'test@test.ua' ]
// const regexp = /(?<=\s)\w+@[a-z._\d]+(?=\s)/g // [ 'qwer123_aj@gmail.com123.service_5.com', 'test@test.ua' ]


// const text = '<@Victor_Ch/> Hey team. I would like to have qwer123_aj@gmail.com123.service_5.com._123424134 a call with <@Megan123/> at 17:00. <@Mike /> test@test.ua would you join us?'

// const regexp = /[a-z0-9_.]+@[a-z0-9_.]+/g
// const regexp = /[\w.]+@[\w.]+/g // [ 'qwer123_aj@gmail.com123.service_5.com._123424134', 'test@test.ua' ]

// const regexp = /[a-z0-9_.]+@[a-z0-9_.]+\.[a-z]{2,12}/g // [ 'qwer123_aj@gmail.com123.service_5.com', 'test@test.ua' ]
// const regexp = /.+/g // return full string
// console.time('regexp')
// console.log(text.match(regexp))
// console.timeEnd('regexp')

// end of fourth video
/////////////////////////////////////////////////////////////////////////////////////////////////////

// const text = '<@Victor_Ch/> Hey team. I would +38 (050) 552-35-05 like to have qwer123_aj@gmail.com123.service_5.com._123424134 +380505523505 a call with <@Megan123/> at 17:00. <@Mike /> test@test.ua would you join us?'
// const regexp = /\+[\d\s()-]+(?=\s)/g // [ '+38 (050) 552-35-05', '+380505523505' ]

// const text = '<@Victor_Ch/> Hey team. 380505523505 I would +38 (050) 552-35-05 like to have qwer123_aj@gmail.com123.service_5.com._123424134 +380505523505 a call with <@Megan123/> at 17:00. <@Mike /> test@test.ua would you join us?'
// const regexp = /(\+?)\d+[0-9\-)(\s]{10,16}(?=\s)/g
// // (\+?) опционально , может быть +, а может его не быть
// console.time('regexp')
// console.log(text.match(regexp))
// console.timeEnd('regexp')

// end of fifth video
/////////////////////////////////////////////////////////////////////////////////////////////////////


// const text = 'MESS1KXD6S49CA CALL1KXD6S49USMESS6ZPP0V3LUS, CALLPZDE12S4US, MESSKX49D16US'
// // MESS or CAll
// // CA or US
// // 14 symbols max
//
// const regexp = /(mess|call)\w{8}(ca|us)/ig;
//
// console.time('regexp')
// console.log(text.match(regexp))
// console.timeEnd('regexp')
// end of six video
/////////////////////////////////////////////////////////////////////////////////////////////////////


// const text = 'my@adrenalin.life'
// const regexp = /^\w+@[\w.]+\.[a-z]{2,12}$/; //[ 'my@adrenalin.life' ]
// ^$ для инпутов !!!
//
// const text = 'https://mygoogle.service.com'
// const regexp = /^(hhtp|https):\/\/[\w.]+\.[a-z]{2,12}$/
// const regexp = /^http(s?):\/\/[\w.]+\.[a-z]{2,12}$/

// console.time('regexp')
// console.log(regexp.test(text))
// console.timeEnd('regexp')

// \s - пробел
// \w - a-zA-Z0-9
// \d - 0-9
// \t - enter или отсуп новой строки
// ^ - начало строки. Текст начинается на определенное выражение
// $ - конец строки. Текст заканчиваеться на определенное выражение
// [] - диапозон символов
// [^] - отрицательний диапазон. Символы которые нужно игнорировать
// (abc?) - знак вопроса говорит что abc может быть, а может не быть
// (?<=abc) - наше выражение должно начанаться на abc, при этом abc не будет добавлено на выходе
// (?=abc) - наша фраза заканчиваеться на abc, где abc не будет добавлено к выходу
// (?:abc) - наша фраза заканчиваеться на abc, где abc будет добавлено к выходу
// + - повторять патер, до тех пор пока это возможно
// . - найти любой символ
// знак ? вместо +  - повторять до тех пор пока это возможно, если патерн не повторяется вернуть пустпую строку
// {1,10} - количество символов от 1 до 10
// {2} - должно быть два символа
// {2,} - должно быть 2 симпола или больше
// (abc|def) - насти abc или def

// flag i - игнорирование больших букв
// flag g - глобальный поиск


const text = "Это текст с несколькими email-адресами: example1@gmail.com, user2@yahoo.com, и info@example.org";
const regexp = /\w+@[\w.]+\.[a-z]{1,3}/g
// const regexp = /([\w.-]+)@([\w.-]+)\.([a-zA-Z]{2,4})/g;

console.time('regexp')
console.log(text.match(regexp))
console.timeEnd('regexp')
/////////////////////////////////////////////////////////
const phoneNumber = "+1-555-123-4567";
const regexp2 = /(\+?)+[\d-]+/g
// const regexp2 = /^\+\d{1,3}-\d{3}-\d{3}-\d{4}$/g;

console.time('regexp')
console.log(phoneNumber.match(regexp2))
console.timeEnd('regexp')
/////////////////////////////////////////////////////////
const htmlText = "<p>Это <b>HTML</b> текст</p>";
const regexp3 = /<\/?[^>]+(>|$)/g;

console.time('regexp')
console.log(htmlText.replace(regexp3, ''))
console.timeEnd('regexp')
/////////////////////////////////////////////////////////
const text2 = "Этот текст содержит слово 'регулярное' несколько раз.";
const wordToReplace = "регулярное";

const regexp4 = new RegExp(wordToReplace, 'g')
console.log(text2.replace(regexp4, ''))
/////////////////////////////////////////////////////////
const text3 = "Сегодняшняя дата: 2023/09/29, а завтра будет 2023/09/30.";
const regexp5 = /\d{4}\/\d{2}\/\d{2}/g;

console.time('regexp')
console.log(text3.match(regexp5))
console.timeEnd('regexp')
