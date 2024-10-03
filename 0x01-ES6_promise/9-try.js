// Function to handle math operations and ensure guardrails are processed
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  }
  queue.push('Guardrail was processed');
  return queue;
}

