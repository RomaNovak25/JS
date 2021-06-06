function findLongestWord(string) {
  const arrayString = string.split(' ');
  let longestWord = arrayString[0];
  for (
    let i = 0;
    i < arrayString.length;
    i += 1
  ) {
    if (
      longestWord.length < arrayString[i].length
    ) {
      longestWord = arrayString[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord('Google do a roll'));

/*Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

 */
