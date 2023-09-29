// Импорт Axios
const axios = require('axios');

// Выполняем GET запрос
axios.get('<https://api.example.com/data>')
    .then(function (response) {
        // Обрабатываем успешный ответ
        console.log(response.data);
    })
    .catch(function (error) {
        // Обрабатываем ошибку
        console.error('Произошла ошибка: ' + error.message);
    });