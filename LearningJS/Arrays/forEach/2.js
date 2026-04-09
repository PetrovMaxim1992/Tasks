// 2. Задача: Анализ массива с накоплением данных
// Условие: Дан массив транзакций:
//     const transactions = [
//         { type: 'income', amount: 1000, category: 'salary' },
//         { type: 'expense', amount: 200, category: 'food' },
//         { type: 'expense', amount: 150, category: 'transport' },
//         { type: 'income', amount: 500, category: 'freelance' },
//         { type: 'expense', amount: 300, category: 'food' },
//         { type: 'expense', amount: 50, category: 'cafe' }
//     ];
// Используя только forEach (один раз!), нужно:
// 1.Посчитать общий доход (income) и расход (expense)
// 2.Найти самую большую транзакцию (по сумме) и сохранить её объект

const transactions = [
    { type: 'income', amount: 1000, category: 'salary' },
    { type: 'expense', amount: 200, category: 'food' },
    { type: 'expense', amount: 150, category: 'transport' },
    { type: 'income', amount: 500, category: 'freelance' },
    { type: 'expense', amount: 300, category: 'food' },
    { type: 'expense', amount: 1150, category: 'cafe' }
];
let incomeSum = 0;
let expenseSum = 0;
let expenseCategories = [];
let biggerTransaction = transactions[0];

transactions.forEach(transaction => {
    (transaction.type === 'income') ? (incomeSum = incomeSum + transaction.amount) : (expenseSum = expenseSum + transaction.amount);
    (transaction.amount > biggerTransaction.amount) ? biggerTransaction = transaction : biggerTransaction;
})

console.log(incomeSum, expenseSum, `самая большая транзакция:`, biggerTransaction);