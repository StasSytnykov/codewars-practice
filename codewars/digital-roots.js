function digitalRoot(n) {
  if (n < 10) {
    return n;
  }

  return digitalRoot(
    n
      .toString()
      .split("")
      .reduce((prevNum, num) => {
        return prevNum + +num;
      }, 0)
  );
}

console.log(digitalRoot(2141241241423142345123512351523214124n));
