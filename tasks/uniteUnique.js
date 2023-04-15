function uniteUnique(...arr) {
  let unique = new Set();

  arr.forEach(innerArr => {
    innerArr.forEach(item => {
      unique.add(item);
    });
  })

  let uniqueArr = [];

  for (let item of unique) {
    uniqueArr.push(item);
  }

  return uniqueArr;
}

console.log(uniteUnique([1, 2, 3], [4, 1, 5], [6, 7, 8, 5]))
