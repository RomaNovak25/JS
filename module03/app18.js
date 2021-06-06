const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const product of products) {
    const name = product.name;
    if (productName === name) {
      return product.price;
    }
  }
  return null;
}

console.log(getProductPrice('Radar'));
console.log(getProductPrice('Scanner'));
console.log(getProductPrice('Droid'));
console.log(getProductPrice('disvjsoidaj'));

/*Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.
 */
