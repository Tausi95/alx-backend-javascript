// 5-photo-reject.js

// Function to reject the promise with an error
export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}

