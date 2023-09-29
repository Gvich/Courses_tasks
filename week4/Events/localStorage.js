// // Сохранение данных в localStorage
// localStorage.setItem('username', 'John');
//
// // Получение данных из localStorage
// const username = localStorage.getItem('username');
// console.log(`Привет, ${username}!`);
//
// // Удаление данных из localStorage
// localStorage.removeItem('username');

// Сохранение объекта в localStorage
const user = { name: 'Alice', age: 30 };
localStorage.setItem('user', JSON.stringify(user));

// Получение объекта из localStorage
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(`Имя: ${storedUser.name}, Возраст: ${storedUser.age}`);
