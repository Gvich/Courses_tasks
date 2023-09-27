const dns = require('dns');

// List of server IP addresses
const serverIPs = [
    // '192.168.1.101',
    // '192.168.1.102',
    // '192.168.1.103',
    {ip: '192.168.1.101', wasChosen: 0},
    {ip: '192.168.1.102', wasChosen: 0},
    {ip: '192.168.1.103', wasChosen: 0},
];

function resolveDNS(hostname, callback) {
    dns.resolve4(hostname, (err, addresses) => {
        if (err) {
            callback(err);
        } else {
            callback(null, addresses);
        }
    });
}

function loadBalanceDNS(hostname) {
    resolveDNS(hostname, (err, addresses) => {
        if (err) {
            console.error('DNS resolution error:', err);
        } else {
            // Simple round-robin load balancing
            const nextServerIP = serverIPs.shift();
            nextServerIP.wasChosen++;
            serverIPs.push(nextServerIP);

            console.log(`Forwarding request to server: ${nextServerIP.ip} was chosen ${nextServerIP.wasChosen}`);
        }
    });
}

// Usage example
const targetHostname = 'example.com';

setInterval(() => {
    loadBalanceDNS(targetHostname);
}, 2000); // Simulate requests every 2 seconds

// console.time('Время выполнения');
// for (let user = 1; user <= 100; user++) {
//     loadBalanceDNS(targetHostname)
// }
// console.timeEnd('Время выполнения');
// setTimeout(() => {
//     console.log(serverIPs)
// }, 1000)





/*
const express = require('express');
const app = express();

const servers = [
    "192.168.1.10",
    "192.168.1.11",
    "192.168.1.12"
];

app.get('/', (req, res) => {
    const randomIndex = Math.floor(Math.random() * servers.length);
    const selectedServer = servers[randomIndex];
    res.send(`Connecting to server: ${selectedServer}`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Load balancer is running on port ${PORT}`);
});*/
