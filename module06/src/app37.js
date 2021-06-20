const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    rating: 8.38,
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    rating: 8.51,
  },
  {
    title: 'Сон смешного человека',
    author: 'Федор Достоевский',
    rating: 7.75,
  },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
];

const sortedByAuthorName = [...books].sort(
  (firstStudent, secondStudent) =>
    firstStudent.author.localeCompare(secondStudent.author),
);
console.log(sortedByAuthorName);

const sortedByReversedAuthorName = [...books].sort(
  (firstStudent, secondStudent) =>
    secondStudent.author.localeCompare(firstStudent.author),
);
console.log(sortedByReversedAuthorName);

const sortedByAscendingRating = [...books].sort(((firstStudent, secondStudent) => firstStudent.rating - secondStudent.rating));
console.log("sortedByAscendingRating", sortedByAscendingRating)

const sortedByDescentingRating = [...books].sort(
  (firstStudent, secondStudent) => secondStudent.rating
  - firstStudent.rating,
);
console.log("sortedByDescentingRating", sortedByDescentingRating)

/*
Дополни код так, чтобы:

В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.
 */
