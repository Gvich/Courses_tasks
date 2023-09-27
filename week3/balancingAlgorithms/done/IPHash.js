const ads = [
    {name: 'ad1', price: 1.8, show: 0},
    {name: 'ad2', price: 1.55, show: 0},
    {name: 'ad3', price: 1.13, show: 0},
    {name: 'ad4', price: 0.48, show: 0},
];

const ipAddresses = [
    "192.168.1.101",
    "192.168.1.102",
    "192.168.1.103",
    "192.168.1.104",
    "192.168.1.105",
    "192.168.1.106",
    "192.168.1.107",
    "192.168.1.108",
    "192.168.1.109",
    "192.168.1.110",
];

function calculateHash(ipAddress) {
    // Пример упрощенной хэш-функции
    let hash = 0;
    for (let i = 0; i < ipAddress.length; i++) {
        hash += ipAddress.charCodeAt(i);
    }
    return hash;
}
// console.log(calculateHash(ipAddresses[9]))

function selectServer(ipAddress, servers) {
    const hashValue = calculateHash(ipAddress);
    const numServers = servers.length;
    const selectedServerIndex = hashValue % numServers;
    return servers[selectedServerIndex].show++;
}


console.time('Время выполнения');
for (let user = 1; user <= 1000000; user++) {
    const clientIPAddress = ipAddresses[Math.floor(Math.random() * ipAddresses.length)];
    selectServer(clientIPAddress, ads)
}
console.timeEnd('Время выполнения');
console.log(ads)

