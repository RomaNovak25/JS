const calculateTotalPrice = (quantity, pricePerItem) =>
    quantity * pricePerItem;
  
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

console.log(calculateTotalPrice(5, 100)); // 500
console.log(calculateTotalPrice(8, 60)); // 480
console.log(calculateTotalPrice(3, 400)); // 1200

/*
Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.
*/
