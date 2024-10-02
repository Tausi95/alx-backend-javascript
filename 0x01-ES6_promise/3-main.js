// 3-main.js

import handleMultiplePromises from './3-all.js';

// Define promises
const promise1 = Promise.resolve("Promise 1 resolved");
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, "Promise 2 resolved"));
const promise3 = Promise.resolve("Promise 3 resolved");

// Put promises into an array
const promises = [promise1, promise2, promise3];

// Call the function
handleMultiplePromises(promises)
    .then((results) => {
        console.log("Final results:", results);
    })
    .catch((error) => {
        console.error("Error in handling promises:", error);
    });

