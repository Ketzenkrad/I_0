//Переменные кнопок и блоков;
//Start
let payment = document.getElementById("start");
console.log(payment);
//все блоки в правой части программы
let rightBlock = document.getElementsByClassName(".budget-value .daybudget-value .level-value .expenses-value .optionalexpenses-value .income-value .monthsavings-value .yearsavings-value");
console.log(rightBlock);
//Получение input-поля
let inputExpenses = document.getElementsByClassName(".expenses-item");
console.log(inputExpenses);
//кнопки “Утвердить” и “Рассчитать”
let approve = document.getElementsByTagName('button');
console.log(approve);
let calculate = document.getElementsByTagName('button');
console.log(calculate);
//поля для ввода необязательных расходов
let optionalExpInput = document.querySelectorAll('.optionalexpenses-item');
console.log(optionalExpInput);
//статьи возможного дохода
let possible = document.querySelector('.choose-income-label');
console.log(possible);
//чекбокс
let checkbox = document.querySelector('.checksavings');
console.log(checkbox);
//сумма
let summ = document.querySelector('.choose-sum');
console.log(summ);
//процент
let percentCheck = document.querySelector('.choose-percent');
console.log(percentCheck);
//год
let yearCheck = document.querySelector('.year');
console.log(yearCheck);
//месяц
let monthCheck = document.querySelector('.month');
console.log(monthCheck);
//день
let dayCheck = document.querySelector('.day');
console.log(dayCheck);