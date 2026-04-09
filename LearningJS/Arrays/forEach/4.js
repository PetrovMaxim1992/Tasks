// Дан массив строк:
//  const words = ['яблоко', 'банан', 'апельсин', 'банан', 'киви', 'яблоко', 'банан'];
//  1. Посчитай, сколько раз встречается каждое слово.
//  2. Найди слово, которое встречается чаще всего (если таких несколько - выведи любое).
//  3. Выведи в консоль результат в формате:
// Статистика:
// яблоко: 2
// банан: 3
// апельсин: 1
// киви: 1
//
// Самое частое слово: "банан" (3 раза)
//
// Запрещено использовать: map, filter, reduce, sort. Только forEach, объекты и обычные переменные.

const words = ['яблоко', 'банан', 'апельсин', 'банан', 'киви', 'яблоко', 'банан'];
const stats = {};
let maxCount = 0;
let popularWord = '';

words.forEach(word => {
    if(stats[word]){
        stats[word]++;
    } else {
        stats[word] = 1;
    }
    if (stats[word]>maxCount) {
        maxCount = stats[word];
        popularWord = word;
    }
})

console.log(`Статистика:`)
for (let word in stats) {
    console.log(`${word}: ${stats[word]}`);
}
console.log(`Самое частое слово: "${popularWord}" (${maxCount} раза)`);
