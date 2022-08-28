function isIsogram(str) {
  const stringArr = str.toLowerCase().split("");
  const obj = {};

  stringArr.forEach((element) => {
    obj[element] ? obj[element]++ : (obj[element] = 1);
  });

  for (const key in obj) {
    if (obj[key] > 1) {
      return false;
    }
  }

  return true;
}

console.log(isIsogram("Dermatoglyphics"));
