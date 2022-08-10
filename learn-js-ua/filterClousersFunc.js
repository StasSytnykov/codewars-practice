let arr = [1, 2, 3, 4, 5, 6, 7];

const inBetween = (a, b) => {
  return function (c) {
    if (c >= a && c <= b) {
      return c;
    }
  };
};

const inArray = (arg) => {
  return function (array) {
    if (arg.includes(array)) {
      return array;
    }
  };
};

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));
