const duplicateEncode = (word) =>
  word
    .toLowerCase()
    .split("")
    .map((letter, index, arr) =>
      arr.indexOf(letter) === index && arr.lastIndexOf(letter) === index
        ? "("
        : ")"
    )
    .join("");

console.log(duplicateEncode("din"));
console.log(duplicateEncode("Success"));
