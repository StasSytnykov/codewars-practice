function highAndLow(numbers) {
  const numsArr = numbers.split(" ");

  let maxNum = 0;
  let minNum = 0;

  for (let i = 0; i < numsArr.length; i++) {
    maxNum = numsArr.reduce(
      (previosNum, num) => (previosNum > +num ? previosNum : +num),
      numsArr[i]
    );

    minNum = numsArr.reduce(
      (previosNum, num) => (previosNum < +num ? previosNum : +num),
      numsArr[i]
    );
  }

  const resultNum = [maxNum, minNum];

  return resultNum.join(" ");
}

const shortResolve = (numbers) => {
  const numsArr = numbers.split(" ");
  return `${Math.max(...numsArr).toString()} ${Math.min(
    ...numsArr
  ).toString()}`;
};

console.log(
  shortResolve(
    "2284 4586 3080 1585 4288 2983 2011 3186 4179 2953 1560 4382 2213 1777 3194 1744 3300 4357 3114 2117 3325"
  )
);
