let calc = new Calculator;

console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8


function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b
  };
  this.calculate = function (str) {
    let splited = str.split(' '),
        a = +splited[0],
        sign = splited[1],
        b = +splited[2];
    return this.methods[sign](a, b);
  }
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  }
}