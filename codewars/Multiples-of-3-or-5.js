function solution(number) {
  let result = 0;
  for (let i = 3; i < number; i += 1) {
    if (i % 3 == 0 || i % 5 == 0) {
      result += i;
    }
  }
  return result;
}

solution(10);
