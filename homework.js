class FormatError extends SyntaxError {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
  }
}

let err = new FormatError("ошибка форматирования");

console.log( err.message ); // ошибка форматирования
console.log( err.name ); // FormatError
console.log( err.stack ); // stack

console.log( err instanceof FormatError ); // true
console.log( err instanceof SyntaxError ); // true (пот