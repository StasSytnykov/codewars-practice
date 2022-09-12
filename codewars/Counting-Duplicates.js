function duplicateCount(text) {
  const letterArr = text.toLowerCase().split("");
  const duplicateLetter = [];
  const obj = {};
  letterArr.forEach((element) =>
    obj[element] ? (obj[element] += 1) : (obj[element] = 1)
  );
  for (const key in obj) {
    if (obj[key] > 1) {
      duplicateLetter.push(key);
    }
  }
  return duplicateLetter.length;
}

console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("abcde"));
