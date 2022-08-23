function disemvowel(str) {
  const regex = /[^aeiouAEIOU]/g;
  return str.match(regex) && str.match(regex).join("");
}

console.log(disemvowel("This website is for losers LOL!"));
