// Выполняем GET запрос
fetch("https://api.unsplash.com/photos/random/?client_id=Mo9m6pTtP1yOPtESG6KA70wEr4pAtoBemhLbhNx4Gpo")
    .then(function(response) {
        // Проверяем статус ответа
        if (!response.ok) {
            throw new Error("Произошла ошибка HTTP: " + response.status);
        }
        // Декодируем JSON ответ
        return response.json();
    })
    .then(function(data) {
        // Обрабатываем полученные данные
        console.log(data);
    })
    .catch(function(error) {
        // Обрабатываем ошибку
        console.error("Произошла ошибка: " + error.message);
    });
