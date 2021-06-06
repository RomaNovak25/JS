function createArrayOfNumbers(min, max) {
    const numbers = [];
    
      for (let i = min; i <= max; i += 1) {
        numbers.push(i);
      }

  return numbers;
}
console.log(createArrayOfNumbers(1, 7));



/*Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max. */