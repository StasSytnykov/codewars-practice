function findOdd(A) {
  const obj = {};

  for (let i = 0; i < A.length; i += 1) {
    obj[A[i]] = 0;
  }

  const objKeys = Object.keys(obj);

  for (let i = 0; i < A.length; i += 1) {
    objKeys.forEach((item) => {
      if (+item === A[i]) {
        obj[A[i]] += 1;
      }
    });
  }

  for (const key in obj) {
    if (obj[key] % 2 != 0) {
      return +key;
    }
  }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
