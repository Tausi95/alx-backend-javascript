// 3-multiple-promises.js

export default function handleMultiplePromises(promises) {
    // Check if promises is an iterable
    if (!Array.isArray(promises)) {
        throw new TypeError("Expected an array of promises");
    }

    return Promise.all(promises)
        .then((results) => {
            console.log("All promises resolved:", results);
            return results;
        })
        .catch((error) => {
            console.error("At least one promise failed:", error);
            throw error;
        });
}

