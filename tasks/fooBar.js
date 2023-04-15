function fooBar(num) {
  let arr = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('foobar');
    } else if (i % 3 === 0) {
      arr.push('foo');
    } else if (i % 5 === 0 ) {
      arr.push('bar');
    } else {
      arr.push(i);
    }
  }

  return arr;
}

console.log(fooBar(15)); // 1,2,'foo',4,'bar',...,14,'foobar'