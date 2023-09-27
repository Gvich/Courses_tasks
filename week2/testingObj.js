const personPrototype = {
    greet: function () {
        console.log(`hello, my name is ${this.name}, I'm ${this.age} years old`)
    }
}

const person = Object.create(personPrototype, {
    name: {value: 'Tom', writable: true, enumerable: true},
    age: {value: 24, writable: true, enumerable: true},
    // hello: {value: function () {console.log('hello')}, writable: true, enumerable: true}
});
console.log(person) // { name: 'Tom', age: 24 }

const personTwo = Object.assign({}, person);
console.log(personTwo) // { name: 'Tom', age: 24 }
// personTwo.hello()
// personTwo.greet() // error
for (const personTwoKey in personTwo) {
    console.log(personTwo[personTwoKey]) // Tom , 24
}
person.greet() //hello, my name is Tom, I'm 24 years old

person.name = 'John';
person.age = 30;
person.job = 'SEO'
person.greet() // hello, my name is John, I'm 30 years old
// person.hello()

for (const personKey in person) {
    console.log(person[personKey]) // John, 30, SEO, [Function: greet]
}

let keysPerson = Object.keys(person);
let keysPersonTwo = Object.keys(personTwo)
console.log(keysPerson, keysPersonTwo) // [ 'name', 'age', 'job' ] [ 'name', 'age' ]
console.log(Object.keys('foo')) // [ '0', '1', '2' ]


let valuesPerson = Object.values(person);
let valuesPersonTwo = Object.values(personTwo)
console.log(valuesPerson, valuesPersonTwo) // [ 'John', 30, 'SEO' ] [ 'Tom', 24 ]
console.log(Object.values('foo')) // [ 'f', 'o', 'o' ]

const text = 'Метод Object.values() возвращает массив значений перечисляемых свойств объекта в том же порядке что и цикл for...in. Разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов.'
const arr = Object.values(text)
console.log(arr[13])

let entriesPerson = Object.entries(person)
let entriesPersonTwo = Object.entries(personTwo)
console.log(entriesPerson, entriesPersonTwo)
console.log(Object.entries('foo'))

for (const [key, value] of entriesPerson) {
    console.log(`${key}: ${value}`) // name: John , age: 30 ,job: SEO
}
Object.entries(personTwo).forEach(([key, value]) => console.log(`${key}: ${value}`)); // name: Tom , age: 24
const map = new Map(entriesPerson);
console.log(map)

console.log(Object.seal(personTwo)) // { name: 'Tom', age: 24 }
console.log(Object.isSealed(person)) // false
console.log(Object.isSealed(personTwo)) // true
personTwo.job = 'HR'
console.log(personTwo) // { name: 'Tom', age: 24 }

console.log(Object.freeze(person)); // { name: 'John', age: 30, job: 'SEO' }
console.log(Object.isFrozen(person)); // true
person.job = 'no job'
console.log(person) // { name: 'John', age: 30, job: 'SEO' }


const newObjectFromMap = Object.fromEntries(map)
console.log('from map', newObjectFromMap)
const array = [['name', 'Jim'], ['age', 43], ['job', 'Manager']]
const newObjFromArr = Object.fromEntries(array)
console.log(newObjFromArr);


console.log(Object.is(person, newObjectFromMap)) // false
console.log(Object.is(person, personTwo)) // false
console.log(Object.is(person, person)) // true

let test = { a: 1 };
console.log(Object.is("foo", "foo")) // true
console.log(Object.is("foo", "bar")) // false
console.log(Object.is([], [])) // false
console.log(Object.is(test, test)) // true
console.log(Object.is(null, null)) // false
console.log(Object.is(0, -0)) // false
console.log(Object.is(-0, -0)) // true
console.log(Object.is(NaN, 0 / 0)) // true
console.log(Object.is(NaN, NaN)) // true
console.log(Object.is(23, 23)) // true
console.log(Object.is(23, 10)) // true

console.log(newObjFromArr); //{ name: 'Jim', age: 43, job: 'Manager' }
newObjFromArr.city = 'Kyiv'
console.log(newObjFromArr); //{ name: 'Jim', age: 43, job: 'Manager' , city: 'Kyiv'}
Object.preventExtensions(newObjFromArr);
delete newObjFromArr.job;
newObjFromArr.city = 'London';
newObjFromArr.email = 'email.com';
console.log(newObjFromArr); // { name: 'Jim', age: 43, city: 'London' }

///////////////////////
////// MAP , SET //////
///////////////////////

console.log('\n/////// MAP ///////\n')
const map2 = new Map(Object.entries(newObjFromArr))
console.log(map2.size) // 3
console.log(map2) // Map(3) { 'name' => 'Jim', 'age' => 43, 'city' => 'London' }

map2.set("id", "jwkejf0201")
map2.set(newObjFromArr, 1000)
map2.delete('city')

console.log(map2.has('city')) // false
console.log(map2.get('name')) // Jim
console.log(map2.size) // 4
console.log(map2)  // Map(4) { 'name' => 'Jim', 'age' => 43, 'id' => 'jwkejf0201',  { name: 'Jim', age: 43, city: 'London' } => 1000}

const objMap2 = Object.fromEntries(map2)
console.log(objMap2) // { name: 'Jim', age: 43, id: 'jwkejf0201', '[object Object]': 1000 }

const iterator1 = map2[Symbol.iterator] ();
console.log(iterator1) // [Map Entries] { [ 'name', 'Jim' ], [ 'age', 43 ], [ 'id', 'jwkejf0201' ], [ { name: 'Jim', age: 43, city: 'London' }, 1000 ]
for (const item of iterator1) {
    console.log(item); // [ 'name', 'Jim' ], [ 'age', 43 ], [ 'id', 'jwkejf0201' ], [ { name: 'Jim', age: 43, city: 'London' }, 1000 ]
}

const iterator2 = map.entries();
console.log('entries', iterator2) // { [ 'name', 'John' ], [ 'age', 30 ], [ 'job', 'SEO' ] }

const iterator3 = map2.values()
console.log(iterator3) // { 'Jim', 43, 'jwkejf0201', 1000 }
// for (const el of iterator3) {
//     console.log(el) // Jim 43 jwkejf0201 1000
// }

map.forEach(el => console.log('map1', el))
map2.forEach(el => console.log('map2', el))

console.log('keys-map1', map.keys()) // keys-map1 [Map Iterator] { 'name', 'age', 'job' }
console.log('keys-map2', map2.keys()) // keys-map2 [Map Iterator] { 'name', 'age', 'id' , { name: 'Jim', age: 43, city: 'London' } }

map2.clear()
console.log(map2) //Map(0) {}



console.log('\n/////// SET ///////\n')
const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 9 },
    { name: "bananas", type: "fruit", quantity: 5 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 12 },
    { name: "fish", type: "meat", quantity: 22 },
];

const set = new Set(Object.values(newObjFromArr))
console.log(set) // Set(3) { 'Jim', 43, 'London' }

const set2 = new Set(Object.values(inventory))
console.log(set2)
/* Set(5) { { name: 'asparagus', type: 'vegetables', quantity: 9 },
    { name: 'bananas', type: 'fruit', quantity: 5 },
    { name: 'goat', type: 'meat', quantity: 23 },
    { name: 'cherries', type: 'fruit', quantity: 12 },
    { name: 'fish', type: 'meat', quantity: 22 }
} */
set.add('Kyiv')
set.delete('London')
console.log(set.has('Jim')) // true
console.log(set.size) // 3


const iterator4 = set[Symbol.iterator] ();
console.log(iterator4) //[Set Iterator] { 'Jim', 43, 'Kyiv' }

console.log(set.keys()) // [Set Iterator] { 'Jim', 43, 'Kyiv' }
console.log(set.values())  // [Set Iterator] { 'Jim', 43, 'Kyiv' }
console.log(set.entries()) // [Set Iterator] { 'Jim', 43, 'Kyiv' }

set.forEach(el => console.log('map1', el)) // console elements
set2.forEach(el => console.log('map2', el))

console.log(set.clear()) // undefined


console.log('\n///////WEAK SET ///////\n')

const weakSet = new WeakSet(inventory)
console.log(weakSet) // WeakSet { <items unknown> }
const Fish = { name: 'fish', type: 'meat', quantity: 22 }
console.log(weakSet.has(Fish)) // false
weakSet.add(Fish)
console.log(weakSet) // WeakSet { <items unknown> }
console.log(weakSet.has(Fish)) // true
weakSet.delete(Fish)
console.log(weakSet.has(Fish)) // false



console.log('\n/////// WEAK MAP ///////\n')
const wm1 = new WeakMap(),
    wm2 = new WeakMap(),
    wm3 = new WeakMap();
const o1 = {},
    o2 = function () {},
    o4 = [1, 2, 3];

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // значением может быть что угодно, включая объект или функцию
// wm2.set(o3, undefined);
wm2.set(wm1, wm2); // ключами и значениями могут быть объекты. Даже WeakMap-ами

wm1.get(o2); // 'azerty'
wm2.get(o2); // undefined, нет значения для o2 в wm2
// wm2.get(o3); // undefined, это установленное значение

wm1.has(o2); // true
wm2.has(o2); // false
// wm2.has(o3); // true (даже если значение равно 'undefined')

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false






