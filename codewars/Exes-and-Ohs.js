function XO(str) {
  const strArr = str.toLowerCase().split("");
  const obj = {};

  strArr.forEach((element) => {
    obj[element] ? (obj[element] += 1) : (obj[element] = 1);
  });

  if (!obj.o && !obj.x) {
    return true;
  } else {
    return obj.o === obj.x ? true : false;
  }
}

console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("zpzpzpp"));
console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zzoo"));
