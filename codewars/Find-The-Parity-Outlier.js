function findOutlier(integers) {
  const even = [];
  const odd = [];
  integers.forEach((item) => {
    return item % 2 !== 0 ? even.push(item) : odd.push(item);
  });

  return odd.length === 1 ? odd[0] : even[0];
}

console.log(
  findOutlier([
    64040049, 18360009, 42684720, 195915567, 79806249, -162462811, 106102081,
    -183712225, 117051487, -181676803, -54829829, -108597273, 110057387,
    65517373, 150020505, -92948103, 86671935, 75193371, 183185669, -89364005,
    -89439387, -141320613, 63968955,
  ])
);
console.log(findOutlier([0, 0, 3, 0, 0]));
console.log(findOutlier([1, 1, 0, 1, 1]));
