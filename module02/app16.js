function makeArray(
  firstArray,
  secondArray,
  maxLength,
) {
  let arr = firstArray.concat(secondArray);
  if (arr.length > maxLength) {
    arr.length = maxLength;
    return arr;
  }

  return arr.slice(0);
}

/*Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком. */
