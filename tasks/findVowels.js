function findVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  let arr = str.toLowerCase().split('');
  let filtered = arr.filter(letter => vowels.includes(letter));
  return filtered.length;
}

function findVowelsReg(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(findVowels('hello')); // 2
console.log(findVowels('hello world')); // 3