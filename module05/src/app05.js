function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

Car.prototype.getPrice = function () {
  return this.price;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

console.log(
  Car.prototype.hasOwnProperty('getPrice'),
);

console.log(
  new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 36000,
  }),
);



/*Добавь в свойство prototype функции-конструктора Car два метода:

getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
*/
