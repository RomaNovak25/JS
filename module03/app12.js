function countProps(object) {
  let propCount = 0;

  propCount = Object.keys(object).length;

  return propCount;
}

console.log(countProps({ name: 'Mango', age: 2, country: 'USA' }));

/*Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.
 */
