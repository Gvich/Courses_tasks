const dataCenters = [
    { name: 'US', latency: 50, servers: [] },
    { name: 'EU', latency: 100, servers: [] },
    { name: 'ASIA', latency: 150, servers: [] },
];

function addServerToDataCenter(dataCenter, server) {
    dataCenter.servers.push(server);
}

function gslb(dataCenters) {
    // Simulate user's geographical location (latency).
    const userLatency = Math.random() * 150; // Assume users have latencies up to 150 ms.

    // Find the closest data center based on latency.
    let closestDataCenter = null;
    let minLatency = Number.MAX_VALUE;

    for (const dataCenter of dataCenters) {
        const latencyDifference = Math.abs(dataCenter.latency - userLatency);
        if (latencyDifference < minLatency) {
            minLatency = latencyDifference;
            closestDataCenter = dataCenter;
        }
    }

    // Select a server from the closest data center.
    if (closestDataCenter && closestDataCenter.servers.length > 0) {
        const randomServerIndex = Math.floor(Math.random() * closestDataCenter.servers.length);
        return closestDataCenter.servers[randomServerIndex];
    }

    // If no servers are available, return a default response.
    return { name: 'No servers available' };
}


addServerToDataCenter(dataCenters[0], { name: 'Server1', wasChosen: 0 });
addServerToDataCenter(dataCenters[1], { name: 'Server2', wasChosen: 0 });
addServerToDataCenter(dataCenters[1], { name: 'Server3', wasChosen: 0 });
addServerToDataCenter(dataCenters[2], { name: 'Server4', wasChosen: 0 });


console.time('Время выполнения');
for (let user = 1; user <= 1000000; user++) {
    const selectedServer = gslb(dataCenters);
    selectedServer.wasChosen++
}
console.timeEnd('Время выполнения');

dataCenters.forEach((el) => console.log(el.servers))