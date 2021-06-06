function checkStorage(available, ordered) {
  if (ordered === 0) {
    return 'Your order is empty!';
  }

  if (ordered > available) {
    return 'Your order is too large, not enough goods in stock!';
  }

  return 'The order is accepted, our manager will contact you';
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(150, 0));

/*Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

available - доступное количество товаров на складе
ordered - количество единиц товара в заказе
Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат». */
