function flatten(arr) {
  if (arr.every((item) => typeof item === "number")) {
    return arr;
  }
  return flatten(arr.flatMap((item) => item));
}

function removeDupes(str) {
  const result = new Set(str);
  return [...result].join("");
}

console.log(flatten([[1], [[2, 3]], [[[4]]]]));

console.log(removeDupes("aaaabbbbcccdeeefg"));
