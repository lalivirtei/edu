let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)

function copySorted(arr) {
  let newArr = arr.slice();
  return newArr.sort();
}