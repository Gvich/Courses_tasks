const express = require('express');
const app = express();
const port = 3000;

function randomAction() {
    if (Math.random() < 0.5) {
        throw new Error("Random error occurred");
    }

    return "Random action succeeded";
}

function randomWithRetry(action, maxRetries) {
    for (let i = 0; i <= maxRetries; i++) {
        try {
            const result = action();
            return result;
        } catch (error) {
            if (i === maxRetries) {
                throw new Error("Max retries reached. Action could not be completed.");
            }
        }
    }
}

app.get('/', (req, res) => {
    const maxRetries = 3;
    try {
        const result = randomWithRetry(randomAction, maxRetries);
        res.send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
