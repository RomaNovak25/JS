function calculateTotalPrice(order) {
  let total = 0;

  for (const items of order) {
    total += items;
  }

  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));

/*Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.
 */
