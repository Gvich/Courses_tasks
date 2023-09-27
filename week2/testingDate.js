const date = new Date();
const date2 = Date();
console.log(date, date2)
console.log(new Date(null)); // 1970-01-01T00:00:00.000Z
console.log(new Date(undefined)); // Invalid Date

console.log(new Date(["2020-06-19", "17:13"]));


console.log(Date.now())
console.log(Date.parse('2020-05-19, 17:33'))

console.log(date.getFullYear()) // 2023
let Xmas = new Date("December 25, 1995 23:15:43"); // до 1999 года
console.log(Xmas.getYear()) // 95

console.log(date.getDate())
console.log(Xmas.getDate()) // 25

console.log(date.getDay())
console.log(Xmas.getDay()) // 1

console.log(date.getMonth())
console.log(Xmas.getMonth()) // 11

console.log(date.getHours())
console.log(Xmas.getHours()) // 23

console.log(date.getMinutes())
console.log(Xmas.getMinutes()) // 15

console.log(date.getSeconds())
console.log(Xmas.getSeconds()) // 43

console.log(date.getMilliseconds())
console.log(Xmas.getMilliseconds()) // 0

console.log(date.getTime())
console.log(Xmas.getTime()) // 819926143000
console.log(Xmas.valueOf())
console.log(new Date(819926143000)) //1995-12-25T21:15:43.000Z

let theBigDay = new Date(2023, 6, 7); // 1962-07-07
console.log(theBigDay.setDate(24)); // 1690146000000
console.log(theBigDay.setDate(32)); // 1690837200000

console.log( new Date(date.setMonth(0))) // set January
console.log( new Date(date.setHours(0, 54, 32))) // set hours,minutes,sec


console.log(date.setFullYear(2017, 3, 23)) // 1492971998074
console.log(new Date(1492971998074)) //2017-04-23T18:26:38.074Z

console.log(date.setTime(Xmas.getTime()))
console.log(date.setTime(819926143000))


let dateJSON = date.toJSON();
let backToDate = new Date(dateJSON);
let dateToStr = date.toString();
console.log(dateJSON)
console.log(backToDate)
console.log(dateToStr)
