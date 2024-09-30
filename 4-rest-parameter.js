// Using rest parameter syntax to gather all arguments into args array
export default function returnHowManyArguments(...args) {
  return args.length;  // Return the count of arguments
}

