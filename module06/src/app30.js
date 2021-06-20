const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};

const playtimes = Object.values(players); // [1270, 468, 710, 244]
console.log("playtimes", playtimes)// [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((acc, number) => {
  return acc + number;
}, 0)
console.log("totalPlayTime", totalPlayTime) // 2692

const averagePlayTime = totalPlayTime / playtimes.length;
console.log("averagePlayTime", averagePlayTime) // 673


/*Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes. */

