function palindrome(str) {
  const fixedString = str.toLowerCase().split("");
  const strArr = [];
  let reverseArr = [];

  for (let i = 0; i < fixedString.length; i += 1) {
    if (
      fixedString[i] !== "," &&
      fixedString[i] !== "." &&
      fixedString[i] !== " " &&
      fixedString[i] !== "_" &&
      fixedString[i] !== "-" &&
      fixedString[i] !== ")" &&
      fixedString[i] !== "("
    ) {
      strArr.push(fixedString[i]);
    }
  }

  reverseArr = [...strArr].reverse();
  console.log(reverseArr.join(""));
  console.log(strArr.join(""));

  return reverseArr.join("") === strArr.join("");
}

console.log(`not a palindrome  ${palindrome("not a palindrome")}`);
console.log(`_eye ${palindrome("0_0 (: - :) 0-0")}`);
