let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

// ... ваш код ...
let formatter = new Intl.Collator('ru');

animals.sort((a, b) => {
  return formatter.compare(a, b);
})


console.log( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК
