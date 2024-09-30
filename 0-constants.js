// taskFirst uses const because the value will not change
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// taskNext uses let because the value of combination can change
export function taskNext() {
  let combination = 'But sometimes let'; // let because we modify this value
  combination += getLast(); // getLast is likely another function that appends more content
  return combination;
}

