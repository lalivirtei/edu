function filterRange(arr, from, to) {
  return arr.filter(item => (item >= from && item <= to));
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered); // 3, 1