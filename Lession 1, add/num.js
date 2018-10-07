'use strict';

//Произведение цифр числа
let num = 33721,
    summ = 3 * 3 * 7 * 2 * 1;
console.log(`Результат произведения цифр числа ${num} равен: ${summ}`);

//Вовзведение в куб
function cube() {
    let increase = summ,
        result = increase ** 3;
    return result;
};
console.log("Степень числа в кубе равна: " + cube());

//Преобразование в массив
let numbers = cube(),
    digits = numbers.toString().split('');

//Вывод на экран
alert("Первое число: " + digits[0]);
alert("Второе число: " + digits[1]);