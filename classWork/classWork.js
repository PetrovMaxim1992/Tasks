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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Создайте объект myFavoriteFilm, описывающий ваш любимый фильм.
// Объект должен содержать свойства с названием фильма, с датой выпуска,
// именем режиссера и страной выпуска

// let myFavoriteFilm = {
//     name : 'Interstellar',
//     yearOfProduction : 2014,
//     director : 'Christopher Nolan',
//     country : 'USA'
// };
// // console.log(myFavoriteFilm);
//
// //Добавить свойство содержащее значение выручки фильма в прокате
//
// myFavoriteFilm.fees ='736546575$';
// // console.log(myFavoriteFilm);
//
// //Добавить метод, который будет выводить название фильма в консоль
//
// myFavoriteFilm.sayName = function() {
//     console.log(myFavoriteFilm.name);
// }
// // myFavoriteFilm.sayName();
//
// //Удалить свойство содержащее год выпуска
//
// delete myFavoriteFilm.yearOfProduction;
//
// console.log(myFavoriteFilm);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Реализовать функцию которая будет принимать числовой диапазон в качестве параметров
// [min,max] и будет возвращать случайное целое число из данного диапазона

// let min= 1;
// let max= 10;
// let randomNumber = () => {
//     let random = Math.floor(Math.random()*(max-min+1)+min);
//     return console.log(random);
// }
// randomNumber();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Реализовать функцию которая будет определять, в каком регистре записан n элемент
// переданной строки,если в верхнем то вернуть true, в противном случае вернуть false

// let n = 2;
// let necString = 'МАКаронка';
// let whatCase = () => {
//     let upperString = necString.toUpperCase();
//     return console.log(necString[n-1]===upperString[n-1]);
// }
// whatCase();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Реализовать функцию которая заменяет в строке str, все вхождения подстроки find,
//на подстроку  replace.

// let str = 'максим';
// let replaceStr = () => {
//     let findStr = 'м';
//     let replaceStr = 'л';
//     let newStr = str.replace(new RegExp(findStr,'g'), replaceStr);
//     return console.log(newStr);
// };
// replaceStr();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let arr = new Array(5);
// console.log(arr);
// let arr2 = [1];
// console.log(arr2);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//очистка массива
//
// let arr = [1,2,3,4,5];
// let arr2 = [1,2,3,4,5];
// console.log(arr);
// arr.length = 0; //удаление данных из массива
// console.log(arr);
// arr = new Array(5).fill(1); //заполнение массива новыми данными
// console.log(arr);
// arr2 = new Array(5).fill(1); //заполнение данными без удаления
// console.log(arr2);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//методы []

// let mass = [1,2,3];
// mass.push(2,1);
// console.log(mass);
// mass.unshift(2);
// console.log(mass);
// mass.pop();
// console.log(mass);
// mass.shift();
// console.log(mass);
// console.log(mass.indexOf(2,0));
// console.log(mass.indexOf(6,0));
// console.log(mass.includes(2,0));
// console.log( Number (mass.includes(6,0)));
//
// let findElement = mass.find((num)=> num ===3);
// console.log(findElement); //если значение элемента удовлетворяет условию
// // возвращает его (первый из найденных элементов)
//
// let filterElement = mass.filter((num) => num % 2 === 0);
// console.log(filterElement); //новый массив из значений элементов удовлетворяющих
// //условию
//
// let mapArr = mass.map((num)=> num*10);
// console.log(mapArr); //к каждому элементу применяет выражение
//
// mass.forEach((num)=> {
//     console.log(num); //к каждому элементу применяет функцию
// });
//
// let mapArrReduce = mapArr.reduce((sum,now) => sum + now);
// console.log(mapArrReduce);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Написать функцию, которая будет принимать массив чисел, содержащий целые положительные
//и целые отрицательные числа, в качеств результата возвращать сумму четных
//положительных элементов переданного массива

// const massNum = [1,2,3,4,5,-1,-2,-3,-4,-5];
// // const sumNum = (num) => {
// //     console.log(massNum.filter((num)=> num % 2 === 0 && num > 0)
// //         .reduce((sum,number) => sum + number))
// // };
// // sumNum();
//
// const massNum = [1,2,3,4,5,-1,-2,-3,-4,-5];
// const sumEvenPositiveNumbers = () => {
//     let sum = 0;
//     massNum.filter((num)=> num % 2 === 0 && num > 0)
//         .forEach((num) => {
//         sum += num;
//     });
//     console.log(sum);
// }
// sumEvenPositiveNumbers()

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Написать функцию, которая будет принимать массив чисел, и будет убирать повторяющиеся
// значения из переданного массива, в качестве результата возвращать новый массив с
// уникальными значениями из исходного.

// const massNum = [1,2,3,4,5,1,2,3,4,5];
// const delReplyMass = () => {
//     const replyMass = massNum.filter((num,index) =>
//         massNum.indexOf(num) === index);
//     console.log(replyMass);
// };
// delReplyMass();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Написать функцию  которая будет принимать два массива, и будет сравнивать их,
// если они идентичны (элементы совпадают по значению и по индексу) то функция возвращает true,
// в противном случае false.

// const massNum1 = [1,2,3,4,5,1,2,3,4,5];
// const massNum2 = [1,2,3,4,5,5];
//  const massIdent = () => {
//      let revWord = massNum1.join('');
//      let revWord2 = massNum2.join('');
//      console.log(revWord===revWord2);
//  }
// massIdent();

// const massNum1 = [1,2,3,4,5,1,2,3,4,5];
// const massNum2 = [1,2,3,4,5,5,3,3,4,6];
// const massIdent = () => {
//     if (massNum1.length === massNum2.length) {
//         massNum1.forEach((num,index) => {
//             console.log(massNum1[index] === massNum2[index])
//         });
//     }
// };
// massIdent();

// const massNum1 = [1,2,3,4,5,1,2,3,4,5];
// const massNum2 = [1,2,3,4,5,1,2,3,4,5];
// const massIdent = () => {
//     if (massNum1.length === massNum2.length) {
//         console.log(massNum1.every((num,index) =>
//             num === massNum2[index]));
//     }
// };
// massIdent();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Создайте объект и скопируйте данный объект с помощью: Object.assign() и spread
//опреатора. Изменить любое свойство в копии объекта, и проверить, не изменился
//ли исходный.

const user = {
    FIO: { name:'John',
        surname: 'Petrov',
    },
    age: 23,
    job: 'engineer'
}
// console.log(user);
// const useMetAssign = () => {
// const copyUser = Object.assign({},user)
// console.log(copyUser);
// copyUser.age = 'Max';
// console.log(copyUser);
// console.log(user);
// }
// // useMetAssign();
//
// const useSpread = () => {
//     const copyUser = {...user};
//     console.log(copyUser);
//     copyUser.age = 'Max';//изменение ключа 1-го уровня вложенности
//     copyUser.FIO.name = 'engineer'; //изменение ключа 2-го уровня вложенности
//     console.log(user);
//     console.log(copyUser);
// }
// useSpread();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Написать функцию, которая будет принимать n-ое количество аргументов, в качестве
//результата функция будет возвращать сумму всех четных элементов. Для решения
//использовать цикл for(...of...).

// const arr = [1,2,3,4,5,6,7,8,9]
// const sumNumb = () => {
//     let sum = 0;
//     for (let num of arr) {
//         if (num % 2 === 0) {
//             sum += num;
//         }
//     }
//     console.log(sum);
// }
// sumNumb();
