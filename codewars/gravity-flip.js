const flip = (d, a) =>
  d === "R" ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a);

console.log(flip("L", [3, 2, 1, 2]));
