console.log(ucFirst(''));
function ucFirst(str) {
  if (!str) return str;
  str = str[0].toUpperCase() + str.slice(1);
  return str;
}

console.log(checkSpam('buy ViAgRA now')) // == true
console.log(checkSpam('free xxxxx')) // == true
console.log(checkSpam("innocent rabbit")) // == false
function checkSpam(str) {
  if (!str) return false;
  let lowStr = str.toLowerCase();
  return lowStr.includes('viagra') || lowStr.includes('xxx');
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) ) //= "Вот, что мне хотело…"
console.log(truncate("Всем привет!", 20) )// = "Всем привет!"
function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, 19) + '...';
}

console.log( extractCurrencyValue('$120') === 120 ); // true
function extractCurrencyValue(str) {
  return +str.slice(1);
}