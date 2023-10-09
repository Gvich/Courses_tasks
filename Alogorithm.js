class Node {
    matrix;
    bound;
    route;

    static cloneMatrix(matrix) {
        return matrix.map(row => row.slice());
    }

    static rowMins(matrix) {
        let mins = [];
        for (let row = 0; row < matrix.length; row++) {
            mins[row] = matrix[row][0];
        }

        for (let row = 0; row < matrix.length; row++) {
            for (let column = 1; column < matrix.length; column++) {
                if (mins[row] > matrix[row][column]) {
                    mins[row] = matrix[row][column];
                }
            }
        }

        mins.sumFinites = function() {
            return this.reduce((a, b) => isFinite(b) ? a + b : a, 0);
        }

        return mins;
    }

    static columnMins(matrix) {
        let mins = [];
        for (let column = 0; column < matrix.length; column++) {
            mins[column] = matrix[0][column];
        }

        for (let row = 1; row < matrix.length; row++) {
            for (let column = 0; column < matrix.length; column++) {
                if (mins[column] > matrix[row][column]) {
                    mins[column] = matrix[row][column];
                }
            }
        }

        mins.sumFinites = function() {
            return this.reduce((a, b) => isFinite(b) ? a + b : a, 0);
        }

        return mins;
    }

    static reduceRows(matrix, mins) {
        for (let row = 0; row < matrix.length; row++) {
            for (let column = 0; column < matrix.length; column++) {
                if (isFinite(mins[row])) {
                    matrix[row][column] = matrix[row][column] - mins[row];
                }
            }
        }
    }

    static reduceColumns(matrix, mins) {
        for (let row = 0; row < matrix.length; row++) {
            for (let column = 0; column < matrix.length; column++) {
                if (isFinite(mins[column])) {
                    matrix[row][column] = matrix[row][column] - mins[column];
                }
            }
        }
    }

    static reduce(matrix) {
        const rowMins = Node.rowMins(matrix);
        Node.reduceRows(matrix, rowMins);

        const columnMins = Node.columnMins(matrix);
        Node.reduceColumns(matrix, columnMins);

        return rowMins.sumFinites() + columnMins.sumFinites();
    }

    constructor(matrix, bound, route) {
        this.matrix = matrix;
        this.bound = bound;
        this.route = route;
    }

    getCellWithMaxPenalty() {
        let maxPenalty = -Infinity;
        let cellWithMaxPenalty = null;
        for (let row = 0; row < this.matrix.length; row++) {
            for (let column = 0; column < this.matrix.length; column++) {
                if (this.matrix[row][column] === 0) {
                    let rowMin = Infinity;
                    for (let i = 0; i < this.matrix.length; i++) {
                        if (!isFinite(this.matrix[row][i]) || i === column) {
                            continue;
                        }

                        if (rowMin > this.matrix[row][i]) {
                            rowMin = this.matrix[row][i];
                        }
                    }

                    let columnMin = Infinity;
                    for (let i = 0; i < this.matrix.length; i++) {
                        if (!isFinite(this.matrix[i][column]) || i === row) {
                            continue;
                        }

                        if (columnMin > this.matrix[i][column]) {
                            columnMin = this.matrix[i][column];
                        }
                    }

                    const penalty = rowMin + columnMin;
                    if (maxPenalty < penalty) {
                        maxPenalty = penalty;
                        cellWithMaxPenalty = [row, column, maxPenalty];
                    }
                }
            }
        }

        return cellWithMaxPenalty;
    }
}

const findNextStartCity = function(edges, startCity) {
    for (let i = 0; i < edges.length; i++) {
        if (edges[i][1] === startCity) {
            return i;
        }
    }

    return -1;
}

const findNextEndCity = function(edges, endCity) {
    for (let i = 0; i < edges.length; i++) {
        if (edges[i][0] === endCity) {
            return i;
        }
    }

    return -1;
}

const getCloseEdges = function(route) {
    let result = [];
    let edges = [...route];

    while (edges.length > 0) {
        let length = 1;
        let startCity = edges[0][0];
        let endCity = edges[0][1];
        edges.splice(0, 1);

        let index = findNextStartCity(edges, startCity);
        while (index !== -1) {
            length++;
            startCity = edges[index][0];
            edges.splice(index, 1);
            index = findNextStartCity(edges, startCity);
        }

        index = findNextEndCity(edges, endCity);
        while (index !== -1) {
            length++;
            endCity = edges[index][1];
            edges.splice(index, 1);
            index = findNextEndCity(edges, endCity);
        }

        if (length >= 2) {
            result.push([endCity, startCity]);
        }
    }

    return result;
}

const makeChildren = function(minNode) {
    const [row, column, leftPenalty] = minNode.getCellWithMaxPenalty();

    let leftMatrix = Node.cloneMatrix(minNode.matrix);
    leftMatrix[row][column] = Infinity;
    Node.reduce(leftMatrix);
    const leftBound = minNode.bound + leftPenalty;
    const leftRoute = [...minNode.route];
    const leftChild = new Node(leftMatrix, leftBound, leftRoute);

    let rightMatrix = Node.cloneMatrix(minNode.matrix);
    rightMatrix[column][row] = Infinity;
    for (let i = 0; i < rightMatrix.length; i++) {
        rightMatrix[row][i] = Infinity;
        rightMatrix[i][column] = Infinity;
    }

    const rightRoute = [...minNode.route, [row, column]];
    const closeEdges = getCloseEdges(rightRoute);
    for (const [row, column] of closeEdges) {
        rightMatrix[row][column] = Infinity;
    }

    const rightPenalty = Node.reduce(rightMatrix);
    const rightBound = minNode.bound + rightPenalty;
    const rightChild = new Node(rightMatrix, rightBound, rightRoute);

    return [leftChild, rightChild];
};

const little = function(matrix) {
    const rootMatrix = Node.cloneMatrix(matrix);
    const minBound = Node.reduce(rootMatrix);
    const root = new Node(rootMatrix, minBound, []);
    let priorityQueue = [root];
    let record = null;

    while (priorityQueue.length > 0) {
        let minIndex = 0;
        let minNode = priorityQueue[minIndex];
        for (let i = 1; i < priorityQueue.length; i++) {
            if (minNode.bound > priorityQueue[i].bound) {
                minNode = priorityQueue[i];
                minIndex = i;
            }
        }

        priorityQueue.splice(minIndex, 1);

        if (record != null) {
            if (record.length <= minNode.bound) {
                break;
            }
        }

        if (minNode.route.length === matrix.length - 2) {
            for (let row = 0; row < matrix.length; row++) {
                for (let column = 0; column < matrix.length; column++) {
                    if (isFinite(minNode.matrix[row][column])) {
                        minNode.bound += minNode.matrix[row][column];
                        minNode.route.push([row, column]);
                    }
                }
            }

            if (record == null || record.length > minNode.bound) {
                record = { length: minNode.bound, route: minNode.route };
            }
        } else {
            const [leftChild, rightChild] = makeChildren(minNode);

            priorityQueue.push(leftChild);
            priorityQueue.push(rightChild);
        }
    }

    return record;
};


// const matrix = [
//     [Infinity, 27, 43, 16, 30, 26],
//     [7, Infinity, 16, 1, 30, 25],
//     [20, 13, Infinity, 35, 5, 0],
//     [21, 16, 25, Infinity, 18, 18],
//     [12, 46, 27, 48, Infinity, 5],
//     [23, 5, 5, 9, 5, Infinity]
// ];

// const matrix2 = [
//     [Infinity, 2, Infinity, 3, Infinity, Infinity], //0
//     [2, Infinity, 5, Infinity, 5, Infinity], // 1
//     [Infinity, 5, Infinity, 4, Infinity, 1], // 2
//     [3, Infinity, 4, Infinity, 4, Infinity],// 3
//     [Infinity, 5, Infinity, 4, Infinity, 5], // 4
//     [Infinity, Infinity, 1, Infinity, 5, Infinity] //5
// ];

const matrix3 = [
      // 0 1 2 3 4
    [Infinity,5,3,7,Infinity], //0
    [5,Infinity,1,5,1], //1
    [3,1,Infinity,8,3], //2
    [7,5,8,Infinity,3], //3
    [Infinity,1,3,3,Infinity]  //4
]

console.time('Время выполнения')
console.log(little(matrix3));
console.timeEnd('Время выполнения')

// {
//   length: 63,
//   route: [ [ 0, 3 ], [ 1, 0 ],
//            [ 4, 5 ], [ 2, 4 ],
//            [ 3, 2 ], [ 5, 1 ] ]
// }