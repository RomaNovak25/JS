function filterArray(numbers, value) {
  const result = [];

  for (let i = 0; i <= numbers.length; i += 1) {
    if (numbers[i] > value) {
      result.push(numbers[i]);
    }
  }

  return result;
}

console.log(filterArray([1, 2, 3, 4, 5, 6], 3));
