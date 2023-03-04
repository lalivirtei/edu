console.log(sumTo(100)); // = 100 + 99 + ... + 2 + 1 = 5050

// function sumTo(num) {
//   let res = 0;
//   for (let i = 0; i <= num; i++) {
//     res += i;
//   }
//
//   return res;
// }

function sumTo(num) {
  if (num <= 1) {
    return 1
  } else {
    return num + sumTo(num - 1);
  }
}

// function sumTo(num) {
//   return (num * (num + 1)) / 2;
// }

// --- factorial

console.log(factorial(5));
function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// --- fibbonachi
console.log(fib(7)); // 13
console.log(fib(3)); // 2

function fib(n) {
  if (n === 1 || n === 2) return 1;
  else {
    return fib(n - 1) + fib(n - 2);
  }
}

// --- linked list
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
printList(list);
// function printList(list) {
//   let tempL = list;
//   while (tempL) {
//     console.log(tempL.value);
//     tempL = tempL.next;
//   }
// }
function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}

// function printReverseList(list) {
//   let tempL = list;
//   let arr = [];
//   while(tempL) {
//     arr.push(tempL.value);
//     tempL = tempL.next;
//   }
//   console.log(arr.reverse());
// }

function printReverseList(list) {
  if (list.next) printReverseList(list.next);
  console.log(list.value);
}

printReverseList(list);


