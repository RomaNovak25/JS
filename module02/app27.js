function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));

/*Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of. */
