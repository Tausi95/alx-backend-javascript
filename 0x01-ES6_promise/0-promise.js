// 0-promise.js

// Function that returns a new promise
export default function getResponseFromAPI() {
  // The Promise constructor takes a function with resolve and reject as arguments
  return new Promise((resolve) => {
    // You can resolve with some dummy data for now
    resolve('Response received');
  });
}

