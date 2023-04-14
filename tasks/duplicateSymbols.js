function duplicateSymbols(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let duplicated = str[i].toUpperCase();
    duplicated += duplicated.toLowerCase().repeat(i);
    if (!(i === str.length - 1)) {
      duplicated += '-';
    }
    result += duplicated;
  }

  return result;
}

console.log(duplicateSymbols('abCDe')) // A-Bb-Ccc-Dddd-Eeeee
