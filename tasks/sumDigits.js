function sumDigits(num) {
  return Math.abs(num)
      .toString()
      .split('')
      .reduce((accum, current) => accum + Number(current), 0);
}

console.log(sumDigits(99)); //18
console.log(sumDigits(-32)); //5