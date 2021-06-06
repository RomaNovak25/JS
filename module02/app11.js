function calculateEngravingPrice(
  message,
  pricePerWord,
) {
  message = message.split(' ').length;
  
  let totalMessage = message * pricePerWord;

  return totalMessage;
}

console.log(calculateEngravingPrice('JavaScript is in my blood'), 10);


/*Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

 */