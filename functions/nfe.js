function makeCounter() {

  function counter() {
    return counter.count++;
  }

  counter.count = 0;
  counter.set = function (value) {
    this.count = value;
  }
  counter.decrease = function () {
    this.count--;
  }

  return counter;
}

let counter = makeCounter();

counter.set(109);
counter.decrease();
console.log(counter()); // 10


function sum(num) {
  let current = num;

  function inner(next) {
    current += next;
    return inner;
  }

  inner.toString = function () {
    return current;
  }

  return inner;
}

console.log(sum(0)(1)(2)(3)(4)(5).toString()); // 15