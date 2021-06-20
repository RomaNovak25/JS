function changeEven(numbers, value) {
  const newArray = [];

  numbers.forEach(element => {
    if (element % 2 === 0) {
      element += value;
    }
    newArray.push(element);
  });

  return newArray;
}

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }

console.log(changeEven([1, 2, 3, 4, 5], 10)); //[1, 12, 3, 14, 5]

changeEven([2, 8, 3, 7, 4, 6], 10);
console.log(
  'changeEven([2, 8, 3, 7, 4, 6], 10)',
  changeEven([2, 8, 3, 7, 4, 6], 10),
);

/*Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.
*/
