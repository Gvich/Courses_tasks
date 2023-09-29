// Создаем экземпляр AbortController
const controller = new AbortController();
const signal = controller.signal;

// Выполняем Fetch запрос с контроллером
fetch('https://api.unsplash.com/photos/random/?client_id=Mo9m6pTtP1yOPtESG6KA70wEr4pAtoBemhLbhNx4Gpo', { signal })
    .then(function (response) {
        if (!response.ok) {
            throw new Error('Произошла ошибка HTTP: ' + response.status);
        }
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        if (error.name === 'AbortError') {
            console.log('Запрос был отменен');
        } else {
            console.error('Произошла ошибка: ' + error.message);
        }
    });

// Позже, если нужно отменить запрос
controller.abort();
