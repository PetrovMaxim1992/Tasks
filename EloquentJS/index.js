//стр.57
/*Напишите цикл, который делает семь вызовов console.log и выводит следующий треугольник
#
##
###
####
#####
######
#######
 */
// let a = "#"
// for (let i = 1; i <= 7; i++) {
//     console.log(a);
//     a = a+"#";
// }

/*Напишите программу, в которой с помощью console.log выводятся все числа от 1 до 100 с двумя исключениями. Для чисел,
кратных 3, вместо числа выводится "Fizz", а для чисел, кратных 5(но не 3),-"Buzz".
*/

// for (let i=1; i<=100; i++){
//     if (i%3===0 ){
//         console.log("Fizz");
//     } else if (i%5===0) {
//         console.log("Buzz");
//     }else console.log(i);
// }

/* P.S. когда это заработает, измените программу так, что бы она печтала "FizzBuzz" для чисел, которые делятся на 3,
и на 5( и по-прежнему печатайте "Fizz" или "Buzz" для чисел, кратных только одному из них).
 */

// for (let i=1; i<=100; i++){
//     if (i%3===0 && i%5===0){
//         console.log("FizzBuzz");
//     } else if (i%3===0) {
//         console.log("Fizz");
//     } else if (i%5===0) {
//         console.log("Buzz");
//     }else console.log(i);
// }

/* Напишите программу, которая созадет строку, пердставляющую сетку 8х8, используя для разделения строк символы новой
строки. В каждой позиции сетки стоит либо пробел, либо сивол "#". Эти символы должны располагаться в шахматном порядке.
Передавая данную строку в console.log вы должны получить что-то вроде этого:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 */

// const w = " ";
// const b = "#";
// let string = "";
// for (let i = 1; i < 8*9; i++) {
//     if (i%(9)===0) {
//         string += "\n";
//     } else if (i%2===0) {
//             string += b;
//         }else{
//             string += w;
//         }
// }
// console.log(string);

/*P.S. Если уже написал программу, которая генерирует этот узор, определите привязку size = 8 и измените программу так,
чтобы она работала для любого size, выводя сетку заданных ширины и высоты
 */

// const beautiful = (width, height) => {
//     const w = " ";
//     const b = "#";
//     let string = "";
//     for (let i = 1; i < height * (width + 1); i++) {
//         if (i % (width + 1) === 0) {
//             string += "\n";
//         } else if (i % 2 === 0) {
//             string += b;
//         } else {
//             string += w;
//         }
//     }
//     console.log(string);
// }
//
// beautiful(260,12);

// стр.62

// const hummus = function(factor) {
//     const ingredient = function (amount,unit, name) {
//         let ingredientAmount = amount * factor;
//         if (ingredientAmount > 1) {
//             unit += "s";
//         }
//         console.log(`${ingredientAmount} ${unit} ${name}`);
//     };
//     ingredient(1,"can", "chicken");
//     ingredient(0.25,"cup", "tahini");
// };
// hummus(2);

// function wrapValue(n){
//     return  () => n;
// }
//
// let wrap1 = wrapValue(1);
// console.log(wrap1());
// let wrap2 = wrapValue(2);
// console.log(wrap2());

// function findSolution(target) {
//     function find(current, history) {
//         if (current === target) {
//             return history;
//         } else if (current > target) {
//             return null;
//         } else {
//             return find(current + 5, `(${history}+5)`) ||
//                 find(current * 3, `(${history}*3)`);
//         }
//     }
//     return find(1, "1");
// }
//
// console.log(findSolution(13));

// let countCowChicken = (cow,chicken) => {
//     let cowString = String(cow);
//     while (cowString.length < 3) {
//         cowString = "0"+cowString;
//     }
//     let chickenString = String(chicken);
//     while (chickenString.length < 3) {
//         chickenString = "0"+chickenString;
//     }
//     console.log(`${chickenString} цыплят`);
//     console.log(`${cowString} коров`);
// }
// countCowChicken(25,3);

/* Напишите функцию min, котррая принимает два аргумента и возвращает их минимум */

// const min = (a,b) => {
//     if (a < b) return a;
//     else return b;
// }
// console.log(min(2,-1));


/*Способ определить, является ли положительное число четным или нечетным:
-ноль четный;
-единица нечетная;
-четность любого другого числа N совпадает с четностью N-2.
1) Определить рекурсивную функцию isEven, соответствующую этому описанию. Функция должна принимать один параметр
 (положительное целое число) и возвращать логическое значеие.
2) Проверьте эту функцию на числах 50 и 75. Посмотрите, как на ведет себя для -1. Почему? Можетет ли вы придумать
спочоб, как это исправить? */

// const isEven = (a) => {
//     return a === 0 && a !== 1 || (a + 2) % 2 === 0;
// }
// console.log(isEven(2));

// const isEven = (a) => {
//     const check = (current = a) => {
//         if (current < 0) {
//             current*=-1;
//         }
//         if (current===0) return true;
//         else if (current===1) return false;
//         else return check(current-2)
//     }
//     return check();
// }
// console.log(isEven(-2));

/*Чтобы получить N-й символ или букву из строки, нужно написать "srting[n]". Возвращаемым значением будет строка,
 содержащая только один символ (например, "b"). Первый символ имеет позицию 0, в результате чего последний находится
 в позиции string.length-1. Другими словами, длина строки из двух символов равна 2, а ее символы находятся
 в позициях 0 и 1.
 1) Напишите функцию countBs, которая принимает строку в качестве единственного аргумента и возвращает число, показывающее,
 сколько больших букв "B" содержится в этой строке.
 2) Затем напишите функцию countChar, которая ведет себя как countBs, за исключением того, что принимает
  второй аргумент, указывающий, какие именно символы нужно посчитать (вместо того чтобы считать только большие
  буквы "B"). Перепишите countBs, чтобы использовать эту новую функцию. */

// const countBs = (str) =>{
//     let count = 0;
//     const findB = (index) => {
//         if (str[index] === "B") {
//             count++;
//         }
//         if (index < str.length-1) {
//             return findB(index + 1);
//         }else return count;
//     }
//     return findB(0);
// }
// console.log(countBs("CuBuB"));

// const countChar = (str,char) =>{
//     let count = 0;
//     const findB = (index) => {
//         if (str[index] === char) {
//             count++;
//         }
//         if (index < str.length-1) {
//             return findB(index + 1);
//         }else return count;
//     }
//     return findB(0);
// }
// console.log(countChar("CuBuB","u"));

// const arr1 = [["a","b","v","g"],["A","B","V","G"]];
//     console.log(arr1[0][1]);
// console.log(arr1[0][0]["length"]);
// console.log(arr1[0][0].toUpperCase());
//


// console.log(Math.abc)
// // Math.abc = "login";
// console.log(Math.abc);
// console.log(Math.min());
// console.log(Math)
// console.log(Object.keys(Math));
// console.log(Object.keys());
// const object1 = {};
// console.log(Object.assign(object1,Math))
//
// const obj1= {1:1,2:2,3:3,4:4};
// const obj2= {1:1,2:2,3:3,4:4};
// console.log(obj1===obj2);

//~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~
//Мутация объекта. Казалось бы, последний лог должен вывести [1,2,3,4,5], но выводит [1,2,3,4]. Это связано с тем, что хоть
//метод .pop и заключен в аргумент функции console.log(), но все равно он оказывает воздействие на изначальный массив,
//изменяя его или "мутируя". Это плохая практика.
// let sequence = [1,2,3];
// sequence.push(4);
// sequence.push(5);
// console.log(sequence);
// console.log(sequence.pop());
// console.log(sequence);
//~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~

// const day1 = {
//     squirrel: false,
//     events: ["work","touch tree","eat pizza","running"]
// };
// console.log(day1.wolf);
// console.log(Object.keys(day1))
// day1.wolf = false;
// console.log(Object.entries(day1));
// console.log(Object.entries(Math)); //не работает
// console.log(Object.getOwnPropertyNames(Math))
// console.log(Object.getOwnPropertyNames(day1))

// let journal = [];
// const addEntry = (events,squirrel) => {
//     journal.push({events,squirrel});
//     console.log(journal);
// }
//
// const phi = (table) => {
//     return (table[3] * table[0] - table[2] * table[1]) /
//         Math.sqrt((table[2] + table[3]) *
//                      (table[0] + table[1]) *
//                      (table[1] + table[3]) *
//                      (table[0] + table[2]));
//             }
// console.log(phi([ ]));
// addEntry();
// addEntry(["работал","трогал дерево","ел пиццу","бегал","смотрел телевизор"],false);
// addEntry(["работал","трогал дерево","ел пиццу","бегал","смотрел телевизор"],false);
// addEntry(["работал","ел мороженое","ел цветную капусту","ел лазанью","трогал дерево","чистил зубы"],false);
// addEntry(["выходной","катался на велосипеде","отдыхал","ел арахис","пил пиво"],true);
// import {journal} from './dataJournal.js';
// console.log(journal);
// const arr = new Set ([]);
// for (let i = 0; arr.size < 10; i++) {
//     arr.add(Math.ceil(Math.random() * 10));
//     console.log(arr);
// }
// console.log(arr);
// console.log(Math.ceil(Math.random()*10))


//~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~
/*Сумма диапазона.
Есть способ вычисления суммы диапазона чисел: console.log(sum(range(1,10))).
1.Напишите функцию range, которая принимает два аргумента, start и end, и возвращает массив, содержащий все числа от
start до end включительно.
2.Затем напишите функцию sum, которая принимает массив чисел и возвращает их сумму. Запустите пример программы и
посмотрите, действительно ли она возвращает 55;
3.В качестве дополнительного задания: измените функцию range так, чтобы она принимала необязательный третий аргумент,
который указывал бы значение шага, используемое при построении массива. Если шаг не задан, элементы увеличиваются на
единицу, что соответствует старому поведению. Вызоав функции range(1,10,2) должен возвращать [1,3,5,7,9]. Убедитесь, что
функция также работает и с отрицательными значениями шага, так что результатом range(5,2,-1) является [5,4,3,2].*/

// 1
// const range = (start,end) => {
//     const arr = [];
//     for (let i = start; i <= end; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(range(2, 100));

// 2
// const sum = (start, end) => {
//     let result = 0;
//     for (let elem of range(start, end)) {
//         result = result + elem;
//     }
//     return result;
// }
// console.log(sum(1,10));

//3
// const range = (start,end,step = 1) => {
//     const arr = [];
//     if(step < 0) {
//         for (let i = start; i >= end; i = i + step) {
//             arr.push(i);
//         }
//         if(arr.length === 0) {
//             return "неверные данные";
//         } else return arr;
//     } else {
//         for (let i = start; i <= end; i = i + step) {
//             arr.push(i);
//         }
//         if(arr.length === 0) {
//             return "неверные данные";
//         } else return arr;
//     }
// }
// console.log(range(5,2,-1));

//~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~
/* Массив в обратном порядке.
У массивов есть метод reverse, который изменяет порядок следования элементов в массиве. Для выполнения этого упраженния
напишите две функции reverseArray и reverseArrayInPlace. Первая функция, reverseArray, принимает массив в качестве
аргумента и создает новый массив, содержащий те же элементы в обратном порядке. Вторая, reverseArrayInPlace, делает то
же, что и метод reverse: преобразовывает массив, заданный в качестве аргумента, меняя порядок следования его элементов
на обратный. Не используйте для этого стандартный метод reverse.
*/

// const  reverseArray = (arr) => {
//     let revArr = [];
//     for (let element of arr) {
//         revArr.unshift(arr.slice(arr.indexOf(element),arr.indexOf(element)+1))
//         console.log(revArr)
//     }
// }
// reverseArray([1,2,3,4,5,6,7,8,9,10])

// const reverseArrayInPlace = (arr) => {
//     for (let i = 0; i < Math.floor((arr.length-1)/2) ; i++ ) {
//         let copy = arr[i];
//         arr[i] = arr[arr.length-1-i];
//         arr[arr.length-1-i] = copy;
//         console.log(arr)
//     }
// }
// reverseArrayInPlace([1,2,3,4,5,6,7,8,9,10,11,12])

//~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~~+~
/* Список.
Напишите функцию arrayToList, которая строит список, чья структура подобна показанной, если передать функции массив
[1,2,3] в качестве аргумента. Напишите также функцию listToArray, создающую массив из списка. Затем добавьте
вспомогательную функцию prepend, принимающую элемент и список и создающую новый список, в котором заданныый элемент
добавлен в начало исходного списка. Кроме того, создайте функцию nth, принимающую список и число и возвращающую элемент,
находящийся в заданной позиции в этом списке (где ноль соответствует первому элементу), или undefined, если элемента в
заданной позиции не существуетю
Напишите рекурсивную версию функции nth.*/

const arrayToList = (arr) => {
    let list = {
        value: null,
        rest: null
    }
    for (let i = 0; i < arr.length; i++) {
        list = {value: arr[i], rest: list}
    }
    // console.log(list);
    return list;
}
arrayToList([1,2,3,4]);


const listToArray = (list) => {
    let arr = [];
    // for (let i = 0; i < list.size; i++) {
    //     console.log(list[i]);
        console.log(list.pop())
    // }
    // console.log(list);
}

listToArray(arrayToList([1,2,3,4]))