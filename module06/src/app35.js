const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates = [...releaseDates].sort((firstEl, secondEl) => firstEl - secondEl);
console.log(" ascendingReleaseDates", ascendingReleaseDates)

const descendingReleaseDates = [...releaseDates].sort((firstEl, secondEl) => secondEl - firstEl);
console.log("descendingReleaseDates", descendingReleaseDates)

/*
Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.
 */