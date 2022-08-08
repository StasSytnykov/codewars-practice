function filter_list(l) {
  return l.filter((item) => typeof item === "number");
}

console.log(filter_list([1, 2, "a", "b"]));
