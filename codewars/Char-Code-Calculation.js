function calc(x) {
  const xLetterArr = x.split("");

  const numberArr = xLetterArr.map((letter) => letter.charCodeAt(0).toString());
  const test = numberArr.join("").split("");
  console.log(test);
  console.log(x.charCodeAt(0));
}

calc("jfmgklf8hglbe");
