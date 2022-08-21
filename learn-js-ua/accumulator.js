function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.newNum = +prompt("Введіть число");
    this.newNum + this.value;
  };
}

const accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);
