function getExtremeElements(array) {
  const firstElement = array[0];

  const lastElementIndex = array.length - 1;

  const lastElement = array[lastElementIndex];

  return [firstElement, lastElement];
}

console.log(getExtremeElements([1, 2, 3, 4, 5, 6, 7]));

console.log(getExtremeElements([
  'qweqwe',
  'dbjshdfijn',
  'iusdh',
  'vuhaugha',
]));

console.log(getExtremeElements([1, 2, 3, 4, 5])); 

/*Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array. */
