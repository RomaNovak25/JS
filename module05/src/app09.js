class Car {
    brand;
    model;
    price;

    constructor ({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}
}

console.log(
  new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 36000,
  }),
);

/*Выполни рефакторинг кода, заменив функцию-конструктор Car на класс с методом-конструктором, принимающим объект.*/