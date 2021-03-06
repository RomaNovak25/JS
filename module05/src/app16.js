class Car {
  static #MAX_PRICE = 50000;

  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) {
      return 'Внимание! Цена превышает допустимую.'; 
    }

    return ('Всё хорошо, цена в порядке.');
  }

  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });
const bmw2 = new Car({ price: 75000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

console.log(Car.checkPrice(bmw2.price));

/*Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.

Если цена автомобиля превышает максимальную, метод должен вернуть строку 'Внимание! Цена превышает допустимую.'.
В противном случае метод должен вернуть строку 'Всё хорошо, цена в порядке.'.
Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать как будет использоваться метод checkPrice(price).*/