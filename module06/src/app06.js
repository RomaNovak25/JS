const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach( (item) => {
    totalPrice += item;
  });

  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); // 138

/*Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.
*/
