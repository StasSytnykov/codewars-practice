const worker1 = {
  name: "Mark",
  salary: 1300,
};

const worker2 = {
  name: "John",
  salary: 2500,
};

function changeSalary(value) {
  this.salary += value;
}

changeSalary.call(worker1, 200);
changeSalary.call(worker2, -200);

console.table(worker1);
console.table(worker2);
