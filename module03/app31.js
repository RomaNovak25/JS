// Change code below this line
function add(...args) {
  let sum = 0;

  for (const arg of args) {
    sum += arg;
  }

  return sum;
}

console.log(add(12, 4, 11, 48));
/*
Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.
*/
