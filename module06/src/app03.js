function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

    firstArray.forEach(element => {
        if (secondArray.includes(element)) {
            commonElements.push(element);
        }
    });

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }

  return commonElements;
}

console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []



/*
Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
*/