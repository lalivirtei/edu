function sumNumbers(...args) {
  return args.reduce((accum, current) => accum + current, 0);
}

console.log(sumNumbers(1, 2, -2, 2)); // 3