// Число-палиндром с обеих сторон (справа налево и слева направо) читается одинаково.
// Самое большое число-палиндром, полученное умножением двух двузначных чисел –
// 9009 = 91 × 99.
// Найдите самый большой палиндром, полученный умножением двух трехзначных чисел.
let sum1 = 0;
for (let num1 = 100; num1 <= 999; ++num1) {
    for (let num2 = num1; num2 >= 100; num2--) {
        let sum = num1 * num2;
        if (sum === Number(String(sum).split('').reverse().map(Number).join(''))) {
            if (sum>sum1) sum1=sum;
            break;
        }
    }
}
console.log(sum1)
