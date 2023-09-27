const express = require('express');
const app = express();

const servers = [
    { name: 'Server1', connections: 3 },
    { name: 'Server2', connections: 5 },
    { name: 'Server3', connections: 1 }
];

function getServerWithLeastConnections() {
    let minConnections = servers[0].connections;
    let selectedServer = servers[0];

    for (const server of servers) {
        if (server.connections < minConnections) {
            minConnections = server.connections;
            selectedServer = server;
        }
    }

    return selectedServer;
}

app.get('/', (req, res) => {
    const server = getServerWithLeastConnections();
    server.connections++;
    console.log(`Request handled by ${server.name}`);

    // Здесь может быть обработка запроса на сервере

    server.connections--;
    res.send(`Request handled by ${server.name}`);
});

app.listen(3000, () => {
    console.log('Load balancer started on port 3000');
});