// Ensure variables are block-scoped properly using 'let'
export default function taskBlock(trueOrFalse) {
  let task = false;  // outer block-scoped variable
  let task2 = true;  // outer block-scoped variable
  
  if (trueOrFalse) {
    let task = true;  // if-block scoped
    let task2 = false; // if-block scoped
  }
  
  return [task, task2];  // Return the values from the outer block scope
}

