function toInitials(str) {
  let initials = str[0].toUpperCase() + '. ';
  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      initials += str[i].toUpperCase() + '. ';
    }
  }

  return initials.trim();
}

let elonInitials = toInitials('elon mask');
let billInitials = toInitials('Bill Gates');

console.log(elonInitials); // E. M.
console.log(billInitials); // B. G.



