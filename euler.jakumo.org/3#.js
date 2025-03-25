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
let necNum = 255;
for (let simpleNum = 2; simpleNum <= necNum; simpleNum++) { //цикл прогоняет все числа от 2 до necNum
    if (simpleNum % 2 !==0 && necNum % simpleNum === 0) {
        for (let verNum = 2; verNum <= simpleNum; verNum++) {
            if (simpleNum % verNum === 0) {
                if (simpleNum === verNum) {
                    console.log(simpleNum);
                }
                break;
            }
        }
    }
}
console.timeEnd()