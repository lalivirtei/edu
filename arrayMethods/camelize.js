function camelize(str) {
  if (!str) return str;

  let arr = str.split('-');
  arr = arr.map(item => {
    return item[0] ? item[0].toUpperCase() + item.substring(1) : '';
  });

  if (str[0] !== '-') {
    arr[0] = arr[0][0].toLowerCase() + arr[0].substring(1);
  }

  return arr.join('');
}

console.log(camelize('-background-color'))