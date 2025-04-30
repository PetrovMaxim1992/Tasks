/*page57*/
//Построение треугольника в цикле
// let triangle = '#'
// for (let i = 0; i < 7; i++) {
//     console.log(triangle);
//     triangle+='#';
// }

//FizzBuzz
// for (let i=1; i <= 100; i++) {
//     if (i%3===0&&i%5===0) {
//         console.log('FizzBuzz')
//     } else if (i%3===0) {
//         console.log("Fizz");
//     } else if (i%5===0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

//Шахматная доска
// let size = 5;
// let shahMatBlack = "#"
// let shahMatWhite = " "
// let shahMat=''
// for (let i = 1; i <= size; i++) {
//     for (let j = 1; j <= size; j++) {
//         if ((i+j)%2===0){
//             shahMat = shahMat + shahMatWhite;
//         } else {
//             shahMat = shahMat + shahMatBlack;
//         }
//     }
//     console.log(shahMat);
//     shahMat = shahMat+'\n'
//     shahMat = ''
// }
//
//

//Напишите функцию min, которая принимает два аргумента и возвращает их минимум

// let min =(num1, num2) => {
//     if (num1>num2) {
//         return num2;
//     } else return num1;
// }
// console.log(min(7,6));

// Еще один способ определить, является ли положительное целое число четным или нечетным:
//-ноль четный;
//-единица нечетная;
//-четность любого другого числа N совпадает с четностью N-2.
//1.Определить рекурсивную функцию isEven, соответствующую этому описанию. Функция должна
//принимать один параметр (положительное целое число) и возвращать логическое значение.
//2.Проверить эту функцию на числах 50 и 75. Посмотерть, как она ведет себя для -1. Почему?
//Придумать способ как это исправить.

// let isEven = (num) => {
//     if (num<0) num = num * (-1); //Если число меньше нуля, умнажаем на -1 для получения положительного числа
//     if (num === 0) {
//         return true;
//     } else if (num === 1) {
//         return false;
//     } else {
//         return isEven(num - 2);
//     }
// };


//1.Напишите функцию countBs, которая принимает строку в качестве единственного аргумента и возвращает число,
//показывающее, сколько больших букв "В" содержится в этой строке.
//2.Напишите функцию countChar, которая ведет себя как countBs, за исключением того, что принимает второй аргумент,
//указывающий, какие именно символы нужно посчитать (вместо того что бы считать только большие "В").
// Перепишите counterBs, что бы использовать эту новую функцию.

let countBs = (string) => {
    let sumB=0;
    for (let i = 0; i <= string.length-1; i++) {
        if (string[i] === "B") {
            sumB++;
        }
    }
    return sumB;
}
console.log(countBs('BBbBBB'));

let countChar = (string,char) => {
    let sumB=0;
    for (let i = 0; i <= string.length-1; i++) {
        if (string[i] === char) {
            sumB++;
        }
    }
    return sumB;
}
console.log(countChar('BBbBBB','b'));