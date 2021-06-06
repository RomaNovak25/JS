// Оператор %

/*5 % 1 = 0;
// 5, разделенное на 1, равно 5, а остаток - 0

5 % 2 = 1;
//  5, разделенное на 2, равно 2, а остаток - 1

5 % 3 = 2;
//  5, разделенное на 3, равно 1, а остаток - 2

5 % 4 = 1;
//  5, разделенное на 4, равно 1, а остаток - 1

5 % 5 = 0;
//  5, разделенное на 5, равно 1, а остаток - 0 */

const fruits = [
  'banana',
  'apple',
  'orange',
  'watermelon',
  'apple',
  'orange',
  'grape',
  'apple',
];
const randomFruit =
  fruits[
    Math.floor(Math.random() * fruits.length)
  ];
console.log(randomFruit); 

// рандомний вивод 1 елемента масива...