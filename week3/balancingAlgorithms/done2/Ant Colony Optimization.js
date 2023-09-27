// Массив запросов (муравьев)
const requests = [
    { id: 1, size: 10 },
    { id: 2, size: 8 },
    { id: 3, size: 15 },
];

// Массив серверов (путей)
const servers = [
    { id: 101, capacity: 20, wasChosen: 0 },
    { id: 102, capacity: 30, wasChosen: 0  },
    { id: 103, capacity: 25, wasChosen: 0  },
];

// Матрица феромонов (каждый элемент представляет уровень феромона между парой запрос-сервер)
const pheromoneMatrix = [
    [0.1, 0.2, 0.3], // Феромон между запросом 1 и сервером 101, 102, 103
    [0.2, 0.1, 0.4], // Феромон между запросом 2 и сервером 101, 102, 103
    [0.3, 0.4, 0.2], // Феромон между запросом 3 и сервером 101, 102, 103
];

// Матрица эвристики (каждый элемент представляет "привлекательность" сервера для запроса)
const heuristicMatrix = [
    [0.9, 0.8, 0.7], // Эвристика для запроса 1 и серверов 101, 102, 103
    [0.7, 0.9, 0.6], // Эвристика для запроса 2 и серверов 101, 102, 103
    [0.6, 0.7, 0.8], // Эвристика для запроса 3 и серверов 101, 102, 103
];

// Другие параметры ACO
const numAnts = 10; // Количество муравьев
const numIterations = 10; // Количество итераций
const evaporationRate = 0.1; // Скорость испарения феромонов
const alpha = 1; // Вес феромона
const beta = 2; // Вес эвристики


const distributeAnts = (requests, servers, pheromoneMatrix, heuristicMatrix, numAnts, numIterations, evaporationRate, alpha, beta) => {
    const numRequests = requests.length;
    const numServers = servers.length;
    let bestSolution = null;
    let bestTotalSize = Infinity;

    // Инициализация начальных значений феромонов
    const pheromoneLevels = Array.from({ length: numRequests }, () =>
        Array.from({ length: numServers }, () => 1)
    );

    for (let iteration = 0; iteration < numIterations; iteration++) {
        // Создание массива для хранения решений муравьев
        const antSolutions = [];

        // Создание муравьев и вычисление их решений
        for (let ant = 0; ant < numAnts; ant++) {
            const antSolution = [];

            for (let requestIndex = 0; requestIndex < numRequests; requestIndex++) {
                const request = requests[requestIndex];
                const serverProbabilities = [];

                for (let serverIndex = 0; serverIndex < numServers; serverIndex++) {
                    const pheromone = pheromoneLevels[requestIndex][serverIndex];
                    const heuristic = heuristicMatrix[requestIndex][serverIndex];
                    const probability = Math.pow(pheromone, alpha) * Math.pow(heuristic, beta);
                    serverProbabilities.push({ serverIndex, probability });
                }

                // Выбор сервера на основе вероятностей
                const totalProbability = serverProbabilities.reduce((sum, { probability }) => sum + probability, 0);
                const randomValue = Math.random() * totalProbability;
                let cumulativeProbability = 0;
                let selectedServerIndex = -1;

                for (const { serverIndex, probability } of serverProbabilities) {
                    cumulativeProbability += probability;
                    if (randomValue <= cumulativeProbability) {
                        selectedServerIndex = serverIndex;
                        break;
                    }
                }
                servers[selectedServerIndex].wasChosen++;
                antSolution.push({ requestId: request.id, serverId: servers[selectedServerIndex].id, wasChosen: servers[selectedServerIndex].wasChosen });
            }

            antSolutions.push(antSolution);
        }

        // Оценка решений муравьев
        for (const antSolution of antSolutions) {
            // Вычислите суммарный размер запросов для данного решения муравья
            const totalSize = antSolution.reduce((sum, { requestId }) => sum + requests.find(req => req.id === requestId).size, 0);

            // Если текущее решение лучше (имеет меньший суммарный размер запросов), обновите лучшее решение
            if (totalSize < bestTotalSize) {
                bestSolution = antSolution;
                bestTotalSize = totalSize;
            }
        }

        // Обновление феромонов на основе лучшего решения
        for (let requestIndex = 0; requestIndex < numRequests; requestIndex++) {
            for (let serverIndex = 0; serverIndex < numServers; serverIndex++) {
                if (bestSolution) {
                    const request = requests[requestIndex];
                    const server = servers[serverIndex];

                    // Находим соответствующий выбор в лучшем решении
                    const bestChoice = bestSolution.find(choice => choice.requestId === request.id && choice.serverId === server.id);

                    if (bestChoice) {
                        // Увеличиваем феромон на этом пути
                        pheromoneLevels[requestIndex][serverIndex] += 1;
                    }
                }
            }
            console.log(`Iteration ${iteration + 1}:`);
            console.log(antSolutions);
        }
    }

    // Возвращение лучшего решения
    // Здесь можно вернуть лучшее решение или выполнить другие необходимые действия
    // Возвращение лучшего решения
    console.log("Best Solution:");
    console.log(bestSolution);
    console.log("Best Total Size:", bestTotalSize);
};

distributeAnts(requests, servers, pheromoneMatrix, heuristicMatrix, numAnts, numIterations, evaporationRate, alpha, beta);


