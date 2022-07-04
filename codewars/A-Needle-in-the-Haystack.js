function findNeedle(haystack) {
  let string = "";
  haystack.find((item, index) => {
    if (item === "needle") {
      return (string = `found the ${item} at position ${index}`);
    }
  });
  return string;
}

findNeedle([
  "3",
  "123124234",
  undefined,
  "needle",
  "world",
  "hay",
  2,
  "3",
  true,
  false,
]);
