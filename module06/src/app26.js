const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
console.log("eachElementInFirstIsEven", eachElementInFirstIsEven) // true

const eachElementInFirstIsOdd = firstArray.every(
  value => value % 2 == 1,
);
console.log("eachElementInFirstIsOdd", eachElementInFirstIsOdd) // false

const eachElementInSecondIsEven = secondArray.every(
  value => value % 2 == 0);
console.log(" eachElementInSecondIsEven", eachElementInSecondIsEven) //false

const eachElementInSecondIsOdd = secondArray.every(
  value => value % 2 == 1);
console.log("eachElementInSecondIsOdd", eachElementInSecondIsOdd) // true

const eachElementInThirdIsEven = thirdArray.every(
  value => value % 2 == 0);
console.log(" eachElementInThirdIsEven", eachElementInThirdIsEven) //false

const eachElementInThirdIsOdd = thirdArray.every(
  value => value % 2 == 1);
console.log("eachElementInThirdIsOdd", eachElementInThirdIsOdd) //false





/*

Используя метод every() дополни код так, чтобы:

В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.
 */