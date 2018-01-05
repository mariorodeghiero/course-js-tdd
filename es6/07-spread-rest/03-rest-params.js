function multiply(mult, ...args) {
  return args.map(arg => mult * arg);
}

console.log(multiply(2, 4, 5, 6, 7));
