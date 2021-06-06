function makePizza(result) {
  return result;
}

const result = makePizza(
  'Ваша пицца готовится, ожидайте.',
);
const pointer = makePizza;

console.log(makePizza(result));
console.log(pointer);

/*Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.
 */
