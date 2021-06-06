function checkFruit(fruit) {
  const fruits = [
    'apple',
    'plum',
    'pear',
    'orange',
  ];
    fruits.includes(fruit)
  return fruit;
}

console.log(checkFruit('apple'));

/*Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

Дополни код функции так, что если:

фрукт есть в массиве, то функция возвращает true;
фрукта нет в массиве, то функция возвращает false. */