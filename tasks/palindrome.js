function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome('шалаш'))
console.log(isPalindrome('шалау'));