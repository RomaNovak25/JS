const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
const {
  icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
} = highTemperatures;

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

const meanTemperature =
  (highYesterday + highToday + highTomorrow) / 3;


  /*Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".*/

