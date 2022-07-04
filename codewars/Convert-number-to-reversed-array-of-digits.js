function digitize(n) {
  const numberArr = n.toString().split("");
  const reverseNum = [];

  for (let i = numberArr.length - 1; i > -1; i -= 1) {
    reverseNum.push(Number(numberArr[i]));
  }

  return reverseNum;
}

digitize(71468);
