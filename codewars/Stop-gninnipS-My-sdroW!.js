const spinWords = (string) =>
  string
    .split(" ")
    .map((item) =>
      item.length >= 5 ? item.split("").reverse().join("") : item
    )
    .join(" ");

console.log(spinWords("Just kidding there is still one more"));
