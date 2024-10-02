// 2-then.js

export default function handlePromiseChain() {
    return Promise.resolve()
        .then(() => {
            console.log("Step 1: Promise resolved");
            return "Data from step 1";
        })
        .then((data) => {
            console.log(`Step 2: Received ${data}`);
            return `${data} -> Data from step 2`;
        })
        .then((data) => {
            console.log(`Step 3: Received ${data}`);
            return `${data} -> Final data`;
        })
        .catch((error) => {
            console.error("Error occurred in chain:", error);
        });
}

