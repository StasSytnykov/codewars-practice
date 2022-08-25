function accum(string) {
  const lettersArr = string
    .split("")
    .map((letter, index) => letter.toLowerCase().repeat(index + 1));

  return lettersArr
    .map((str) => str.slice(0, 1).toUpperCase() + str.slice(1))
    .join("-");
}

console.log(accum("ZpglnRxqenU"));
