// let calculator = {
//     read() {
//         this.x = +prompt('x: ');
//         this.y = +prompt('y: ');
//     },
//     sum() {
//         return this.x + this.y;
//     },
//     mul() {
//         return this.x * this.y;
//     }
// }
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() { // показывает текущую ступеньку
//         console.log( this.step );
//         return this;
//     }
// };
// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

// let obj = {};
// function A() {
//     return obj;
// }
// function B() {
//     return obj;
// }
// let a = new A();
// let b = new B();
// console.log(a == b)

// function Calculator() {
//     this.read = function () {
//         this.x = +prompt('x: ');
//         this.y = +prompt('y: ');
//     }
//
//     this.sum = function () {
//         return this.x + this.y;
//     }
//
//     this.mul = function () {
//         return this.x * this.y;
//     }
// }
//
// let calc = new Calculator();
//
// calc.read();
//
// console.log(calc.sum());
// console.log(calc.mul());

function Accumulator(startingValue) {
    this.val = startingValue;
    this.read = function() {
        this.val += +prompt('val: ');
    }
}

let accum = new Accumulator(1);
accum.read();
accum.read();
console.log(accum.val);