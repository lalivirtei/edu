printNumbersTimeout(1, 5);

function printNumbers(from, to) {
  let timerId = setInterval(() => {
    if (from <= to) {
      console.log(from++);
    } else {
      clearInterval(timerId);
    }
  }, 1000)
}

function printNumbersTimeout(from, to) {
  setTimeout(function print() {
    console.log(from++);
    if (from <= to) {
      setTimeout(print, 1000);
    }
  }, 1000);
}