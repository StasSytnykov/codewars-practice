const calculator = {
  a: 0,
  b: 0,
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    console.log(this.a + this.b);
  },
  mul() {
    console.log(this.a * this.b);
  },
};

// calculator.read(5, 5);
// calculator.sum();
// calculator.mul();

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    console.log(this.step);
    return this;
  },
};

// ladder.up().up().down().showStep().down().showStep();

function Calculator(a, b) {
  this.a = +a;
  this.b = +b;
  this.read = function () {
    console.log(this.a);
    console.log(this.b);
  };
  this.sum = function () {
    console.log(this.a + this.b);
  };
  this.mul = function () {
    console.log(this.a * this.b);
  };
}

const calc = new Calculator(
  prompt("Введіть число a"),
  prompt("Введіть число b")
);

calc.read();
calc.sum();
calc.mul();
