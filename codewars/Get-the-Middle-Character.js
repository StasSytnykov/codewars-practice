function getMiddle(string) {
  const lettetArr = string.split("");
  for (let i = lettetArr.length; i != 0; i--) {
    if (lettetArr.length % 2 != 0 && lettetArr.length != 1) {
      lettetArr.pop();
      lettetArr.shift();
    }
    if (lettetArr.length > 2) {
      lettetArr.pop();
      lettetArr.shift();
    }
  }

  if (string.length === 1) {
    return string;
  }

  return lettetArr.join("");
}

console.log(
  getMiddle(
    "CPyhAdoUwxBCfeAVYBpyXsVeMgtXKBIrxTJlbTKRnMxHkTbPWKNcgcDskyyMlnoYsSvgYIdiBzpefpHtsTEfTcotfl"
  )
);
console.log(
  getMiddle(
    "bpPankiyHwhJoTPZWyBradYhzTDmVnSdZJIakundzdHaEciqqMMVUKTbzMKGvuAPqCIsdHYEzuBsVSsCszVcKptxdxFWAsgArAKrXocWsOWHKkbSVIGfDMXtUcCaJdorPwIqoPIenKWRcxdWz"
  )
);
console.log(getMiddle("test"));
console.log(getMiddle("A"));
