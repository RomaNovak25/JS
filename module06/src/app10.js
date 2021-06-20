const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

const planetsLengths = planets.map((planet) => planet.length);
console.log("planetsLengths", planetsLengths)
console.log(" planets:", planets)

/*Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().


=================== Тесты ===================
Объявлена переменная planets.
Значение переменной planets это массив ['Земля', 'Марс', 'Венера', 'Юпитер'].
Объявлена переменная planetsLengths.
Значение переменной planetsLengths это массив [5, 4, 6, 6].
Для перебора массива планет использован метод map().
 */
