//Учитывая случайное неотрицательное число, вы должны вернуть цифры этого
// числа в массиве в обратном порядке.
const n=35231;

function digitize(n) {
    const nArray = String(n).split('').reverse();
    console.log(nArray.map(Number));
}
digitize(n);
