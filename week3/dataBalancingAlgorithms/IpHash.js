const express = require('express');
const app = express();

// Список доступных серверов
const availableServers = ['ServerA', 'ServerB', 'ServerC'];

// Пример упрощенной хэш-функции
function calculateHash(ipAddress) {
    let hash = 0;
    for (let i = 0; i < ipAddress.length; i++) {
        hash += ipAddress.charCodeAt(i);
    }
    return hash;
}

// Метод для выбора сервера на основе IP-адреса
function selectServer(ipAddress) {
    const hashValue = calculateHash(ipAddress);
    const numServers = availableServers.length;
    const selectedServerIndex = hashValue % numServers;
    return availableServers[selectedServerIndex];
}

app.get('/', (req, res) => {
    const clientIPAddress = req.ip; // Получаем IP-адрес клиента
    const selectedServer = selectServer(clientIPAddress);

    res.send(`Запрос от ${clientIPAddress} будет обработан сервером ${selectedServer}`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
