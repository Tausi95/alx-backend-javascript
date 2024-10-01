// Using for...of loop to iterate through the array argument
export default function appendToEachArrayValue(array, appendString) {
  const resultArray = [];  // Create a new array for modified values
  for (const value of array) {
    resultArray.push(appendString + value);  // Append the string to each value
  }
  return resultArray;
}

