function digitalRoot(n) {
  const convertToArr = (num) => {
    const string = num + "";
    return string.split("");
  };
  const reducer = (arr) =>
    arr.reduce((prevNum, num) => {
      return prevNum + +num;
    }, 0);
  const numArr = convertToArr(n);
  const getNumLessTen = (number) => {
    let result = reducer(convertToArr(number));
    if (result >= 10) {
      return (result = reducer(convertToArr(result)));
    } else {
      return result;
    }
  };
  return getNumLessTen(reducer(numArr));
}

console.log(digitalRoot(2141241241423142345123512351523214124n));
