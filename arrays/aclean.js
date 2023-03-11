let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

function aclean(arr) {
  let resultArray = [];

  arr.forEach((current, index) => {
    console.log('current: ', current);
    let hasDuplicateFurther = false;
    for (let next of arr.slice(index + 1)) {
      console.log('  next: ', next);
      let currentMap = getLetters(current);
      let nextMap = getLetters(next);
      hasDuplicateFurther = compareMaps(currentMap, nextMap);
      if (hasDuplicateFurther) break;
    }
    if (!hasDuplicateFurther) resultArray.push(current);
  });
  return resultArray;
}

function compareMaps(map1, map2) {
  for (let [key, val] of map1) {
    if (val !== map2.get(key)) return false;
  }
  return true;
}

function getLetters(word) {
  let map = new Map();
  for (let letter of word.toLowerCase()) {
    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1);
    } else {
      map.set(letter, 1);
    }
  }
  return map;
}