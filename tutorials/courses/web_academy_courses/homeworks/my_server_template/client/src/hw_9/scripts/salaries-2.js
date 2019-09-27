//5

let salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

let max = 0;
let maxName = "";
for (let name in salaries) {
  if (max < salaries[name]) {
    max = salaries[name];
    maxName = name;
  }
}

alert( maxName || "нет сотрудников" );