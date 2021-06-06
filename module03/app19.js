const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];
const array = [];

function getAllPropValues(propName) {
  for (const product of products) {
    if (product[propName]) {
      array.push(product[propName]);
    }
  }
  return array;
}

console.log(getAllPropValues('name'));

/*Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
 */

// перебрать масив ключей
// возвращает масив всех значений []
