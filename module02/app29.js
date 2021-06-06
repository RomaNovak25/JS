function getEvenNumbers(start, end) {
  const evenNumbers = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }    
  }

  // for (const number of end) {
  //   if (i % 2 === 0) {
  //     evenNumbers.push(i);
  //   }
  // }

  return evenNumbers;
}


console.log(getEvenNumbers(2, 5)); // возвращает [2, 4]
