function createPhoneNumber(num) {
  let str = num.toString();
  return `+${str[0]} (${str.slice(1, 4)}) ${str.slice(4, 7)} ${str.slice(7, 9)}-${str.slice(9)}`;
}

console.log(createPhoneNumber(71234567899)); // +7 (123) 456 78-99