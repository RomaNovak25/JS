const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const anyElementInFirstIsEven = firstArray.some(
  value => value % 2 === 0,
);
console.log('anyElementInFirstIsEven', anyElementInFirstIsEven); // true
const anyElementInFirstIsOdd = firstArray.some(
  value => value % 2 === 1,
);
console.log('anyElementInFirstIsOdd', anyElementInFirstIsOdd); // false

const anyElementInSecondIsEven = secondArray.some(
  value => value % 2 === 0,
);
console.log('anyElementInSecondIsEven', anyElementInSecondIsEven); // false

const anyElementInSecondIsOdd = secondArray.some(
  value => value % 2 === 1,
);
console.log('anyElementInSecondIsOdd', anyElementInSecondIsOdd); // true

const anyElementInThirdIsEven = thirdArray.some(
  value => value % 2 === 0,
);
console.log('anyElementInThirdIsEven', anyElementInThirdIsEven); // true

const anyElementInThirdIsOdd = thirdArray.some(
  value => value % 2 === 1,
);
console.log('anyElementInThirdIsOdd', anyElementInThirdIsOdd); // true

/*
Используя метод some() дополни код так, чтобы:

В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.
 */
