// Using the spread operator to pass an array of values to a function
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];  // Combine two arrays and a string
}

