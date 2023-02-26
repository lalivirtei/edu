let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries));

function topSalary(obj) {
  let maxName = null;

  for (let [name, salary] of Object.entries(obj)) {
    if (maxName === null) maxName = name;

    if (salary > obj[maxName]) {
      maxName = name;
    }

  }

  return maxName;
}
