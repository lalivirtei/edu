function findShortestWord(str) {
  let words = str.split(' ');
  let shortest = words[0];

  words.forEach(item => {
    if (item.length < shortest.length) {
      shortest = item;
    }
  });

  return shortest;
}

console.log(findShortestWord('The smallest word in sentence')); // in
console.log(findShortestWord('Just test string')); // Just