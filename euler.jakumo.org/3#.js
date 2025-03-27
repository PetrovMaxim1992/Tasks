//Каков самый большой делитель числа 600851475143, являющийся простым числом?
//*********************************************************************************************************

// let simpleDel = 17;
// for (let simpleNum = 1; simpleNum <= 17; simpleNum++) {
//     for (let i = 1; i <= simpleNum; i++) {
//         if (simpleNum % i === 0) {
//             if (i !== 1 && i !== simpleNum || simpleNum === 1) {
//                 console.log(simpleNum, '-не простое число')
// let necNum = 60;
// for (let simpleNum = 1; simpleNum <= necNum; simpleNum++) { //цикл прогоняет все числа от 1 до necNum
//     for (let i = 1; i <= simpleNum; i++) { //цикл делит каждый simpleNum на число от 1 до simpleNum
//         if (simpleNum % i === 0) { //проверка на деление без остатка
//             if (i !== 1 && i !== simpleNum || simpleNum === 1) { //проверка на непростое число. 1 это
//                 // непростое число. число не простое, если делится на что-то кроме себя и единицы.
// console.log(simpleNum, '-непростое число')
//                 break
//             }
//             if (i === simpleNum) {
//                 console.log(simpleNum, '-простое число')
//             }
//         }
//     }
// }

console.time()
let verNum;
let simpleNum;
let necNum = 999999999;
let lastNum;
for (let simpleNum = 2; simpleNum <= necNum; simpleNum++) { //цикл прогоняет все числа от 2 до necNum
    if (simpleNum % 2 !==0 && necNum % simpleNum === 0) {
        for (let verNum = 2; verNum <= simpleNum; verNum++) {
            if (simpleNum % verNum === 0) {
                if (simpleNum === verNum) {
                    lastNum = simpleNum;
                }
                break;
            }
        }
    }
}
console.log(lastNum);
console.timeEnd()

// function largestPrimeFactor(n) {
//     let largestFactor = 1;
//     // Проверяем делимость на 2
//     while (n % 2 === 0) {
//         largestFactor = 2;
//         n /= 2;
//     }
//     // Проверяем нечётные делители от 3 до √n
//     for (let i = 3; i <= Math.sqrt(n); i += 2) {
//         while (n % i === 0) {
//             largestFactor = i;
//             n /= i;
//         }
//     }
//     // Если оставшееся n > 2, оно простое
//     if (n > 2) {
//         largestFactor = n;
//     }
//     return largestFactor;
// }
// const number = 600851475;
// console.log(largestPrimeFactor(number)); // 6857