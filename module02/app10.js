function splitMessage(message, delimeter) {
  let words;

  words = message.split(delimeter);

  return words;
}

console.log(splitMessage('best_for_week', '_'));

console.log(
  splitMessage('Mango hurries to the train', ' '),
);


/*Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк. */

