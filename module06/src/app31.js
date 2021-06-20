const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((totalTime, player) => {
  return totalTime + player.playtime / player.gamesPlayed;
}, 0)

console.log(totalAveragePlaytimePerGame); //1023

/*
Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).
 */

// const playTimeArray = players.map(player => player.playtime);
// const playerTimeSum = playTimeArray.reduce((acc, value) => {
//   return acc + value
// });
// console.log("playerTimeSum", playerTimeSum)

// const gamesPlayedArray = players.map(player => player.gamesPlayed);
// const gamesPlayedSum = gamesPlayedArray.reduce((acc, value) => {
//   return acc + value;
// });
// console.log("~ gamesPlayedSum", gamesPlayedSum)