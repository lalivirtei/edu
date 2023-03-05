let f = debounce(log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

function debounce(f, ms) {
  let checker = true;

  return function (...args) {
    if (checker) {
      checker = false;
      setTimeout(() => checker = true, ms);
      f.apply(this, args);
    }
  }
}

function log(x) {
  console.log(x)
}