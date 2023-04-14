function sumNumbers(...args) {
  return args.reduce((accum, current) => {
    accum += current;
    return accum;
  }, 0);
}

console.log(sumNumbers(1, 2, -2, 2)); // 3