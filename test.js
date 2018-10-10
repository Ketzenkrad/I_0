//Урок номер 3;
// // ###Глобальная переменная;
// let numeric = 1024;
// // ###Функция с локальной переменной;
// function one(params) {
//     console.log("начало работы");
//     let numeric = 1200;
//     console.log(`число из функции: ${numeric}`)
// }
// // ###Log и вывод функции;
// console.log(`Число из глобальной переменной: ${numeric}`);
// one();
// // ###user_input;
// let num_one = +prompt("Enter the first digit: "),
//     num_two = +prompt("Enter the second digit: ");

// //###Функция суммы;
// function addition(num_one, num_two) {
//     plus = num_one + num_two;
//     result = plus;
//     return result;
// };
// //###Log;
// console.log(addition(1024, 1024));

// //###Функция;
// function back() {
//     let number = 1024;
//     return number;
// };
// //###Возврат значения;
// let outNumber = back();
// //###Вывод;
// console.log(outNumber);

// ###Функциональное выражение;
// let calculate = function(argument0, argument1) {
//     return (argument0 + argument1);
// };
// console.log(`Result: ${calculate(1024, 1024)}`);

// ###Стрелочная функция;
// let summ = (arg1, arg2) => (arg1 + arg2);
// console.log(summ(1024, 2048));

// ###Length
// let string = "Simple text";
// console.log(string.length);
// console.log(string.toLowerCase());
// console.log(string.toUpperCase());

// ###Преобразование числа;
// let floatNum = '10.24';
// console.log("Округление: " + Math.round(floatNum));

//###Методы parseInt, parseFloat - integer//float;
// let integNum = '1024.01byte';
// console.log("Округление: " + parseInt(integNum));
// console.log("Число с плавающей точкой: " + parseFloat(integNum));

// ###Callback
// function firstFunc(params) {
//     //Таймер
//     setTimeout(function() {
//         console.log("Первая функция.");
//     }, 1000);
// };

// function secondFunc(params) {
//     console.log("Вторая функция");
// };

// firstFunc();
// secondFunc();

function callBackTest(test, callback) {
    console.log("Тест callback. " + test);
    callback();
};

function work(params) {
    console.log("Отдельная отработка работает. ");
}
work("Отдельный тест", work)

callBackTest("Тест работает. [1]", function(params) {
    console.log("Тест callback. Тест работает. [2]")
});