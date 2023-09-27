// Создаем граф, представляющий расстояния между городами
const graph = [
    [0, 29, 20, 21],
    [29, 0, 15, 27],
    [20, 15, 0, 18],
    [21, 27, 18, 0]
];

const numCities = graph.length;
const numAnts = 10;
const numIterations = 100;
const evaporationRate = 0.5;
const initialPheromone = 1.0;

// Инициализация феромонов на ребрах графа
let pheromones = [];
for (let i = 0; i < numCities; i++) {
    pheromones[i] = [];
    for (let j = 0; j < numCities; j++) {
        pheromones[i][j] = initialPheromone;
    }
}
let antPaths = [];
// Основной цикл ACO
for (let iteration = 0; iteration < numIterations; iteration++) {


    // Перемещение муравьев
    for (let ant = 0; ant < numAnts; ant++) {
        let currentCity = Math.floor(Math.random() * numCities);
        let path = [currentCity];

        for (let step = 0; step < numCities - 1; step++) {
            const probabilities = [];

            for (let nextCity = 0; nextCity < numCities; nextCity++) {
                if (!path.includes(nextCity)) {
                    const pheromone = pheromones[currentCity][nextCity];
                    const distance = graph[currentCity][nextCity];
                    const probability = Math.pow(pheromone, 1) * Math.pow(1 / distance, 5);
                    probabilities.push({ city: nextCity, probability });
                }
            }

            const totalProbability = probabilities.reduce((sum, entry) => sum + entry.probability, 0);
            let random = Math.random() * totalProbability;
            let chosenCity;

            for (const entry of probabilities) {
                random -= entry.probability;
                if (random <= 0) {
                    chosenCity = entry.city;
                    break;
                }
            }

            path.push(chosenCity);
            currentCity = chosenCity;
        }

        antPaths.push(path);
    }

    // Обновление феромонов на ребрах
    for (let i = 0; i < numCities; i++) {
        for (let j = 0; j < numCities; j++) {
            if (i !== j) {
                pheromones[i][j] *= (1 - evaporationRate);
            }
        }
    }

    for (const path of antPaths) {
        const pathLength = calculatePathLength(path);
        for (let i = 0; i < numCities - 1; i++) {
            const from = path[i];
            const to = path[i + 1];
            pheromones[from][to] += 1 / pathLength;
            pheromones[to][from] += 1 / pathLength;
        }
    }
}

// Выбор оптимального пути
const bestPath = antPaths.reduce((shortest, path) => {
    const pathLength = calculatePathLength(path);
    if (pathLength < calculatePathLength(shortest)) {
        return path;
    }
    return shortest;
}, antPaths[0]);

console.log("Best path:", bestPath);

function calculatePathLength(path) {
    let length = 0;
    for (let i = 0; i < path.length - 1; i++) {
        length += graph[path[i]][path[i + 1]];
    }
    length += graph[path[path.length - 1]][path[0]]; // Возвращение в начальный город
    return length;
}