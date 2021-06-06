function getCommonElements(array1, array2) {
  const uniqieElements = [];
  for (const element of array1) {
    if (array2.includes(element)) {
      uniqieElements.push(element);
    }
  }
  return uniqieElements;
}

console.log(getCommonElements([1, 2, 3], [2, 4]));