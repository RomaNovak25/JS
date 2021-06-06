function countProps(object) {
  let propCount = 0;

  const keys = Object.keys(object);
  console.log(keys);

  propCount = keys.length;

  return propCount;
}

console.log(countProps({ name: 'Mango', age: 2 }));
console.log(
  countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }),
);

/*Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.
 */
