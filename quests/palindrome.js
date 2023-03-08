function isPalindrome(str) {
  let val = false;
  let newStr = str.split('').reverse().join('');

  if (newStr === str) {
    val = true;
  }

  return val;
}

console.log(isPalindrome('тест')); // false
console.log(isPalindrome('шалаш')); // true
console.log(isPalindrome('112211')); // true