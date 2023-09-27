class ConsistentHashing {
    constructor(nodes = [], replicas = 3) {
        this.nodes = new Map();
        this.replicas = replicas;

        for (const node of nodes) {
            this.addNode(node);
        }
    }

    addNode(node) {
        for (let i = 0; i < this.replicas; i++) {
            const virtualNode = `${node.name}_replica_${i}`;
            const hash = this.hash(virtualNode);
            this.nodes.set(hash, node);
        }
    }

    removeNode(node) {
        for (let i = 0; i < this.replicas; i++) {
            const virtualNode = `${node.name}_replica_${i}`;
            const hash = this.hash(virtualNode);
            this.nodes.delete(hash);
        }
    }

    getNode(resourceKey) {
        const hash = this.hash(resourceKey);
        const keys = Array.from(this.nodes.keys()).sort((a, b) => a - b);
        // console.log(hash, keys)

        for (const key of keys) {
            if (hash <= key) {
                return this.nodes.get(key);
            }
        }

        // If no match is found, return the first node in the ring
        return this.nodes.get(keys[0]);
    }

    hash(key) {
        // Simple hash function for demonstration purposes
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            const char = key.charCodeAt(i);
            hash = (hash << 5) - hash + char;
        }
        return hash;
    }
}

const ads = [
    { name: 'ad1', price: 1.8, show: 0 },
    { name: 'ad2', price: 1.55, show: 0 },
    { name: 'ad3', price: 1.13, show: 0 },
    { name: 'ad4', price: 0.48, show: 0 },
];

const hashRing = new ConsistentHashing(ads);

console.time('Время выполнения');
for (let user = 1; user <= 1000000; user++) {
    const resourceKey = `user_${user}`;
    const selectedAd = hashRing.getNode(resourceKey);
    selectedAd.show++;
}
console.timeEnd('Время выполнения');
console.log(ads)


// const hashring = require('hashring');
// const ads = [
//     { name: 'ad1', price: 1.8, show: 0 },
//     { name: 'ad2', price: 1.55, show: 0 },
//     { name: 'ad3', price: 1.13, show: 0 },
//     { name: 'ad4', price: 0.48, show: 0 },
// ];
//
// const ring = new hashring(ads.map(ad => ad.name));
//
// console.time('Время выполнения');
// for (let user = 1; user <= 1000000; user++) {
//     const resourceKey = `user_${user}`;
//     const selectedAdName = ring.get(resourceKey);
//     const selectedAd = ads.find(ad => ad.name === selectedAdName);
//     selectedAd.show++;
// }
// console.timeEnd('Время выполнения');
// console.log(ads)
