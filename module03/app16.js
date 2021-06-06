function countTotalSalary(salaries) {
  let totalSalary = 0;
  const keys = Object.keys(salaries);
  for (const key of keys) {
    totalSalary += salaries[key];
  }
  return totalSalary;
}

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
/*Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для */
