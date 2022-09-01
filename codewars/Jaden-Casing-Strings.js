const JadenCase = (str) =>
  str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

console.log(JadenCase("How can mirrors be real if our eyes aren't real"));
