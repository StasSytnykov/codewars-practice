function descendingOrder(n) {
  const result = String(n)
    .split("")
    .sort((num1, num2) => num2 - num1);
  return +result.join("");
}

console.log(descendingOrder(123456789));
