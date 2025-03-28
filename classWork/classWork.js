//Вывести в консоль заданную строку N раз

// const text= "заданную строку";
// const N=12;
// for (i = 0; i < N; i++) {
//     console.log(text)
// }

// let number = 20;
// for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//         console.log(i**2,'чётное');
//     } else { console.log(i**2,'нечётное')}
// }

// let N = 100
// let M = 10
//  for (let i = 1; N>M; i++) {
//        N=N / 2;
//      if (N>M) {console.log(i,N);}
//  }

// let start = 1800;
// let end = 2020;
// let iteration = 0;
//
// for (let i=start; i<=end; i++){
//     iteration++
//     if (i==1961) {
//         console.log('год первого полета в космос - 1961, кол-во итераций=', iteration);
//     }
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Написать функцию, которая будет принимать имя пользователя,
// и выводить строку с приветствием данного пользователя,
// если имени пользователя нет, выводить приветствие гостя/

// const prompt = require("prompt-sync")({ sigint: true });
// let userName = prompt("What is your name?",'gues');
//
// const toGreet = (userName='guest') => {
//     console.log(`Hi,${userName}`);
// }
// toGreet(userName)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Написать функцию, которая в качестве первого параметра будет принимать
// численное значение, а в качестве второго параметра будет принимать степень,
// в которую надо возвести первый аргумент. По умолчанию, второй аргумент единица.

// const prompt1 = require("prompt-sync")({ sigint: true });
// let num = prompt1("What num?",2);
// const prompt2 = require("prompt-sync")({ sigint: true });
// let degree = prompt2("What degree?",1);
//
// // let num=2;
// // let degree=3;
// let riseNumToDegree = (degree = 1) => {
//     console.log(num**degree);
// }
// riseNumToDegree(degree);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Написать функцию, которая будет принимать в качестве входного параметра
// массив любых, целых чисел, и будет возвращать среднее арифметическое
// значение данного массива
// const min = 1;
// const max = 100;
// const massAnyNumber = [...Array(max)];
//     for (let i = 0; i < massAnyNumber.length; i ++) {
//         massAnyNumber[i] = Math.floor (Math.random()*max) ;
//     }
//     const midSum = massAnyNumber.reduce(function (currentSum,currentNumber) {
//         return currentSum + currentNumber;
//     },0)/max;
// console.log(massAnyNumber, midSum);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Напишите стрелочную функцию, которая будет выводить переданную строку в консоль n раз
//
// let writeString = (necString = 'hi', numberRows=3) => {
//
//     //---------------Конструкция запроса на присвоение значения через консоль----------
//     const prompt1 = require("prompt-sync")({ sigint: true });
//     necString = prompt1("What write? ");
//     const prompt2 = require("prompt-sync")({ sigint: true });
//     numberRows = prompt2("How many times? ");
//     //---------------Конструкция запрос а на присвоение значения через консоль----------
//
//     for (let i = 1; i <= numberRows; i++) {
//         console.log(necString);
//     }
// }
// writeString();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Напишите стрелочную функцию, которая будет принимать в качестве параметра букву
//и если она гласная, функция будет возвращать true, в противном случае false
//
// let searchIsVowel = () => {
//     let vowelLetters = 'аоуеиёэюяы'
//     let testLetter = 'а';
//     console.log(vowelLetters.includes(testLetter));
// }
// searchIsVowel();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Напишите стрелочную функцию, котрая будет возвращать true если строка является
//палиндромом и false в противном случае

// let word = 'а роза упала на лапу азора';
// let noSpacesWord = word.replace(/\s/g, ''); //нашли пробелы
// // и заменили их на пустые символы ('')
// let checkPalindrome = () => {
//     let massWord  = noSpacesWord.split(''); // преобразование строки
//     // в массив
//     massWord.reverse() //переворачиваем массив
//     let revWord = massWord.join(''); //собираем массив в строку
//     if (noSpacesWord===revWord) {
//         console.log(`${word} - Палиндром`)
//     } else {
//         console.log(`${word} - Не палиндром`)
//     }
// };
// checkPalindrome();

// let word = 'а роза упала на лапу азора';
// let revWord='';
// let checkPalindrome = () => {
//     noSpaceWord = word.replace(/\s/g, '');
//     for (let i = noSpaceWord.length-1; i >=0; i--) {
//         revWord = revWord + noSpaceWord[i];
//     }
//         console.log(noSpaceWord===revWord);
// }
// checkPalindrome();

// let word = 'а роза упала на лапу азора';
// let noSpacesWord = word.replace(/\s/g, ''); //нашли пробелы
// // и заменили их на пустые символы ('')
// let checkPalindrome = () => {
//     let revWord  = noSpacesWord.split('').reverse().join('');
//     console.log(noSpacesWord===revWord)
// };
// checkPalindrome();
