function makeStringFromArray(array, delimeter) {
    let string;
    
    string = array.join(delimeter);

  return string;
}

console.log(
  makeStringFromArray(
    ['Mango', 'hurries', 'to', 'the', 'train'],
    ' ',
  ),
);

/*Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

 */
