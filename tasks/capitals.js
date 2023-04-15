function capitals(str) {
  let arr = [];
  let lastFoundIndex = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      let ind = str.indexOf(str[i], lastFoundIndex);
      arr.push(ind);
      lastFoundIndex = ind + 1;
    }
  }

  return arr;
}

console.log(capitals('CodEWaRsRs')); // [0, 3, 4, 6, 8];
console.log(capitals('justForTest')); // [4, 7]