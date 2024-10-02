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

// Simulated uploadPhoto function
async function uploadPhoto() {
    await delay(1000); // Simulate a delay for the upload
    return { status: 200, body: 'photo-profile-1' }; // Simulated successful upload response
}

// Simulated createUser function
async function createUser() {
    await delay(500); // Simulate a delay for user creation
    return { firstName: 'Guillaume', lastName: 'Salva' }; // Simulated successful user creation response
}

// Utility to handle async/await errors in a cleaner way
async function asyncWrapper(promise) {
    try {
        const result = await promise;
        return [null, result]; // Return the result if successful
    } catch (error) {
        return [error, null]; // Return the error if failed
    }
}

// Utility to log a promise's result
function logPromiseResult(promise) {
    promise
        .then((result) => {
            console.log("Promise resolved with:", result);
        })
        .catch((error) => {
            console.error("Promise rejected with:", error);
        });
}

// Exporting the utility functions
export {
    delay,
    getRandomInt,
    asyncWrapper,
    logPromiseResult,
    uploadPhoto,
    createUser,
};

