function minMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return [min, max];
}

console.log(minMax([2, 9, 10, 25, 47, 4, 1])) // [1, 47]
console.log(minMax([2, 1])) // [1, 2]
console.log(minMax([1])) // [1, 1]

function minMaxEs(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMaxEs([1,2,5,2,-5])) // [-5, 5]