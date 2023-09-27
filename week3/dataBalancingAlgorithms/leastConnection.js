// Пример списка серверов с количеством активных соединений
const servers = [
    { name: 'Server A', connections: 5 },
    { name: 'Server B', connections: 3 },
    { name: 'Server C', connections: 6 }
];

// Функция для выбора сервера с наименьшим количеством активных соединений
function selectServer(servers) {
    let leastConnections = Infinity;
    let selectedServer = null;

    servers.forEach(server => {
        if (server.connections < leastConnections) {
            leastConnections = server.connections;
            selectedServer = server;
        }
    });

    return selectedServer;
}

// Производим балансировку нагрузки с помощью алгоритма Least Connection
function balanceLoad() {
    const selectedServer = selectServer(servers);
    selectedServer.connections++; // Увеличиваем количество соединений на выбранном сервере
    console.log(`Request directed to ${selectedServer.name}`);
}

// Пример симуляции прихода новых запросов
for (let i = 0; i < 20; i++) {
    balanceLoad();
}

// Выводим текущее состояние серверов
console.log(servers);


/*class LoadBalancer {
    constructor(servers) {
        this.servers = servers;
    }

    findServerWithLeastConnections() {
        let leastConnections = Infinity;
        let selectedServer = null;

        for (const server of this.servers) {
            if (server.connections < leastConnections) {
                leastConnections = server.connections;
                selectedServer = server;
            }
        }

        return selectedServer;
    }

    handleRequest() {
        const server = this.findServerWithLeastConnections();
        server.connections++;
        console.log(`Request handled by server ${server.name} (Connections: ${server.connections})`);
    }
}

class Server {
    constructor(name) {
        this.name = name;
        this.connections = 0;
    }
}

const server1 = new Server('Server 1');
const server2 = new Server('Server 2');
const server3 = new Server('Server 3');

const loadBalancer = new LoadBalancer([server1, server2, server3]);

// Simulate handling multiple requests
for (let i = 0; i < 10; i++) {
    loadBalancer.handleRequest();
}*/


