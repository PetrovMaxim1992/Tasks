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
let size = 8;
let shahMatBlack = "#"
let shahMatWhite = " "
let shahMat=''
for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
        if ((i+j)%2===0){
            shahMat = shahMat + shahMatWhite;
        } else {
            shahMat = shahMat + shahMatBlack;
        }
    }
    console.log(shahMat);
    shahMat = shahMat+'\n'
    shahMat = ''
}


