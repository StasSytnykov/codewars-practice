function calc(x) {
  const xASCII = x.split("").map((letter) => letter.charCodeAt(0).toString());

  const stringOfNumber1 = xASCII.join("");
  const numberArr1 = stringOfNumber1.split("");
  const tnumberArr2 = [];

  numberArr1.map((num) => {
    if (num === "7") {
      num = "1";
    }
    tnumberArr2.push(num);
  });

  const stringOfNumber2 = tnumberArr2.join("");

  const total1 = stringOfNumber1.split("").reduce((previusValue, number) => {
    return Number(previusValue) + Number(number);
  }, 0);

  const total2 = stringOfNumber2.split("").reduce((previusValue, number) => {
    return Number(previusValue) + Number(number);
  }, 0);

  return total1 - total2;
}

calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
