// Utility to simulate asynchronous delay
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Utility to fetch a random integer between two values (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Utility to handle async/await errors in a cleaner way
async function asyncWrapper(promise) {
    try {
        const result = await promise;
        return [null, result];
    } catch (error) {
        return [error, null];
    }
}

// Utility to log a promise's result
function logPromiseResult(promise) {
    promise
        .then((result) => {
            console.log("Promise resolved with: ", result);
        })
        .catch((error) => {
            console.error("Promise rejected with: ", error);
        });
}

module.exports = {
    delay,
    getRandomInt,
    asyncWrapper,
    logPromiseResult
};

