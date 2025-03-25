////*****************************************Задача №2***************************************
// Каждый следующий элемент ряда Фибоначчи получается при сложении двух предыдущих. Начиная с 1 и 2, первые 10 элементов будут:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// Найдите сумму всех четных элементов ряда Фибоначчи, которые не превышают четыре миллиона.
//*********************************************************************************************************

//--------------------------С промежуточной суммой по циклам
// let first=0;
// let second=1;
// let sum=0;
// let sumCheck
// console.log(first);
// console.log(second);
// console.log('sum=',sum);
// for (let i = 1; sum <= 4*10**6; i++) {
//     first = first + second;
//     second = second + first;
//     sumCheck=sum;
//     if (first % 2 === 0 && sum <= 4*10**6) {
//         sum = sum + first;
//     }
//     if (second % 2 === 0 && sum <= 4*10**6) {
//         sum = sum + second;
//     }
//     if (sum <= 4*10**6) {
//         console.log(i,'цикл');
//         console.log('first=',first);
//         console.log('second=',second);
//         console.log('sum=',sum);
//     }
//     if (sum >= 4*10**6) {
//         console.log(sumCheck)
//         break
//     }
// }

//--------------------------Решение по ТЗ задачи
let first=0;
let second=1;
let sum=0;
let sumCheck
for (let i = 0; sum <= 4*10**6; i++) {
    first = first + second;
    second = second + first;
    sumCheck=sum;
    if (first % 2 === 0) {
        sum = sum + first;
    }
    if (second % 2 === 0) {
        sum = sum + second;
    }
    if (sum >= 4*10**6) {
        console.log(sumCheck)
        break;
    }
}
//********************************************Конец задачи №2***************************************