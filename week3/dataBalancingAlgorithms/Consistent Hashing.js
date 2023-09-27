const express = require('express');
const app = express();

class ConsistentHashing {
    constructor(nodes = [], replicas = 3) {
        this.replicas = replicas;
        this.circle = {};

        for (const node of nodes) {
            this.addNode(node);
        }
    }

    hashString(str) {
        // Упрощенный хэш-алгоритм для примера.
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
            hash |= 0;
        }
        return hash;
    }

    addNode(node) {
        for (let i = 0; i < this.replicas; i++) {
            const virtualNode = `${node}-replica-${i}`;
            const hash = this.hashString(virtualNode);
            this.circle[hash] = node;
        }
    }

    removeNode(node) {
        for (let i = 0; i < this.replicas; i++) {
            const virtualNode = `${node}-replica-${i}`;
            const hash = this.hashString(virtualNode);
            delete this.circle[hash];
        }
    }

    getNode(key) {
        const hash = this.hashString(key);
        const keys = Object.keys(this.circle).sort((a, b) => a - b);

        for (const key of keys) {
            if (hash <= key) {
                return this.circle[key];
            }
        }

        return this.circle[keys[0]];
    }
}

const nodes = ['node1', 'node2', 'node3'];
const consistentHashing = new ConsistentHashing(nodes);

app.get('/get-node', (req, res) => {
    const key = req.query.key;
    const node = consistentHashing.getNode(key);
    res.json({ key, node });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
