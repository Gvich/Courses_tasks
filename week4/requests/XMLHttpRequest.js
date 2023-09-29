// Создаем экземпляр объекта XMLHttpRequest
let xhr = new XMLHttpRequest();

// Настраиваем запрос
xhr.open("GET", "<https://api.unsplash.com/photos/random/?client_id=Mo9m6pTtP1yOPtESG6KA70wEr4pAtoBemhLbhNx4Gpo>", true);

// Определяем обработчик события при успешном завершении запроса
xhr.onload = function () {
    if (xhr.status === 200) {
        // Обработка успешного ответа
        console.log(xhr.responseText);
    }
};

// Определяем обработчик события при возникновении ошибки
xhr.onerror = function () {
    // Обработка ошибки
    console.error("Произошла ошибка при запросе");
};

// Отправляем запрос
xhr.send();
