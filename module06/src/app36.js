    const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт',
    ];

    const authorsInAlphabetOrder = [...authors].sort(
    (firstString, secondString) =>
        firstString.localeCompare(secondString),
    );
    console.log("~ authorsInAlphabetOrder", authorsInAlphabetOrder)

    const authorsInReversedOrder = [...authors].sort(
    (firstString, secondString) =>
        secondString.localeCompare(firstString),
    );
    console.log("~ authorsInReversedOrder", authorsInReversedOrder)

/*
Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.
 */