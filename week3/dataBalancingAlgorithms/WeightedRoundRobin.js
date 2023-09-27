const servers = [
    { name: 'Server A', weight: 3 },
    { name: 'Server B', weight: 5 },
    { name: 'Server C', weight: 2 }
];

let currentServerIndex = 0;

// function weightedRoundRobin() {
//     const totalWeight = servers.reduce((sum, server) => sum + server.weight, 0);
//     const maxWeight = Math.max(...servers.map(server => server.weight));
//
//     for (let i = 0; i < totalWeight; i++) {
//         for (const server of servers) {
//             if (i % server.weight === 0) {
//                 console.log(`Request assigned to ${server.name}`);
//             }
//         }
//     }
// }
//
// weightedRoundRobin();


class WeightedRoundRobin {
    constructor() {
        this.servers = [];
        this.totalWeight = 0;
        this.currentServerIndex = 0;
    }

    addServer(name, weight) {
        this.servers.push({ name, weight });
        this.totalWeight += weight;
    }

    getNextServer() {
        if (this.servers.length === 0) {
            return null;
        }

        const server = this.servers[this.currentServerIndex];
        this.currentServerIndex = (this.currentServerIndex + 1) % this.servers.length;
        return server.name;
    }

    runRequests(numRequests) {
        for (let i = 0; i < numRequests; i++) {
            const serverName = this.getNextServer();
            console.log(`Request ${i + 1} assigned to ${serverName}`);
        }
    }
}

// Создаем экземпляр WeightedRoundRobin
const wrr = new WeightedRoundRobin();

// Добавляем серверы с их весами
wrr.addServer('Server A', 3);
wrr.addServer('Server B', 5);
wrr.addServer('Server C', 2);

// Запускаем распределение запросов
wrr.runRequests(10);
