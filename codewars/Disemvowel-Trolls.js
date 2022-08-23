function disemvowel(str) {
  const regex = /[^aeiou]/g;
  return str.match(regex).join("");
}

console.log(disemvowel("What are you, a communist?"));
