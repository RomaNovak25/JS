const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

// for (const product of products) {
//   console.log(product);
//   const add = product.price * product.quantity;
//   console.log(add);
// }

function calculateTotalPrice(productName) {
    let result = 0;
    for (const product of products) {
      if (product.name === productName ) {
          result = product.price * product.quantity;

          return result;
      }
    }
    return 0;
}

console.log(calculateTotalPrice('Radar'));
console.log(calculateTotalPrice('Radarss'));

/*Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.
 */
