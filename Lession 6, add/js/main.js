// 'use strict';
// //Переменные кнопок и блоков;
// let startButton = document.getElementById("start"),
//     budgetValue = document.getElementsByClassName('budget-value')[0],
//     yearValue = document.querySelector('.year-value'),
//     monthValue = document.querySelector('.month-value'),
//     dayValue = document.querySelector('.day-value'),

//     expensesButton = document.getElementsByTagName('button')[0],
//     expensesItem = document.getElementsByClassName('expenses-item'),
//     expensesValue = document.getElementsByClassName('expenses-value')[0],

//     optionalExpensesButton = document.getElementsByTagName('button')[1],
//     optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
//     optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
//     counterButton = document.getElementsByTagName('button')[2],

//     dayliBudget = document.getElementsByClassName('daybudget-value')[0],
//     levelValue = document.getElementsByClassName('level-value')[0],
//     incomeValue = document.getElementsByClassName('income-value')[0],

//     incomeItem = document.querySelector('.choose-income'),
//     checkSavings = document.querySelector('#savings'),
//     summValue = document.querySelector('.choose-sum'),
//     percentValue = document.querySelector('.choose-percent'),

//     monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
//     yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

// //Main;
// let money, time;

// //Блок кнопок;
// expensesButton.disabled = true;
// optionalExpensesButton.disabled = true;
// counterButton.disabled = true;

// //Старт расчета;
// startButton.addEventListener('click', function() {
//     money = +prompt("Ваш бюджет на месяц? ");
//     time = prompt('Введите дату в формате YYYY-MM-DD ');
//     //Проверка корректности данных user_input(общий бюджет);
//     while (isNaN(money) || money == "" || money == null) {
//         money = +prompt("Ваш бюджет на месяц? ");
//     }
//     //В объект
//     appData.budget = money;
//     appData.timeData = time;
//     //Запись в app;
//     budgetValue.textContent = money.toFixed();
//     //Date.parse
//     yearValue.value = new Date(Date.parse(time)).getFullYear();
//     monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
//     dayValue.value = new Date(Date.parse(time)).getDate();
//     //Unlock
//     expensesButton.disabled = false;
//     optionalExpensesButton.disabled = false;
//     counterButton.disabled = false;

// });

// //Методы ==> обработчики событий; Обязательные расходы;
// expensesButton.addEventListener('click', function() {
//     let summ = 0;
//     //вопросы для пользователя через цикл for
//     for (let i = 0; i < expensesItem.length; i++) {
//         let answer1 = expensesItem[i].value,
//             answer2 = expensesItem[++i].value;
//         //Проверка корректности данных;
//         if ((typeof(answer1) === 'string' && (typeof(answer1)) != null && (typeof(answer2)) != null && answer1 != '' && answer2 != '' && answer1.length < 50)) {
//             console.log("Проверка работает");
//             //Присваивание в объект;
//             appData.expenses[answer1] = answer2;
//             //Сумма + answer2;
//             summ += +answer2;
//         } else {
//             console.log("Not");
//             //Возврат в цикл;
//             i--;
//         }
//     }
//     //expensesValue, запись;
//     expensesValue.textContent = summ;
// });

// //Методы ==> обработка событий; Необязательные расходы;
// optionalExpensesButton.addEventListener('click', function() {
//     //По кол-ву item'ов;
//     for (let index = 0; index < optionalExpensesItem.length; index++) {
//         //Параметр статьи;
//         let question = optionalExpensesItem[index].value;
//         //Запись в объект;
//         appData.optionalExpenses[index] = question;
//         //Вывод на страницу;
//         optionalExpensesValue.textContent += appData.optionalExpenses[index] + ' ';
//     }
// });

// //Методы ==> обработка событий; Бюджет на один день;
// counterButton.addEventListener('click', function() {
//     //Бюджет на один день;
//     if (appData.budget != undefined) {
//         //Для расчета бюджета с учетом все трат - отнимаем value расходов, записанные в HTML;
//         appData.expenses_per_day = ((appData.budget - expensesValue.innerHTML) / 30).toFixed();
//         dayliBudget.textContent = appData.expenses_per_day;
//         //Условия уровня дохода с записью;
//         if (appData.expenses_per_day < 1000) {
//             levelValue.textContent = "Низкий.";
//         } else if (appData.expenses_per_day > 1000 && appData.expenses_per_day < 4500) {
//             levelValue.textContent = "Средний.";
//         } else if (appData.expenses_per_day > 4500) {
//             levelValue.textContent = "Высокий.";
//         } else {
//             levelValue.textContent = "Некорректные данные.";
//         }
//     } else {
//         dayliBudget.textContent = "Сначала нужно начать расчет.";
//     }
// });

// //Методы ==> обработка событий; Статьи возможного дохода;
// incomeItem.addEventListener('input', function() {
//     for (let counter = 0; counter < 1; counter++) {
//         let incomeQuestion = incomeItem.value;
//         //равно строке && не равно null && не равно пустой строке;
//         if ((typeof(incomeQuestion)) === 'string' && incomeQuestion != null && incomeQuestion != '') {
//             appData.income = incomeQuestion.split(', ');
//             incomeValue.textContent = appData.income;
//             appData.income.push();
//             appData.income.sort();
//         } else {
//             //возврат
//             counter--;
//         }
//     };
//     // Запись в массив, вывод в лог;
//     appData.income.forEach(function(item, index, array) {
//         if ((typeof(item)) === 'string' && item != null && item != '') {
//             console.log(`Номер: ${index + 1}, источника доп. заработка "${item}" из массива ${array}`);
//         } else {
//             counter--;
//         }
//     });
// });

// //Методы ==> обработка событий; Чекбокс;
// checkSavings.addEventListener('click', function() {
//     if (appData.savings == true) {
//         appData.savings = false;
//     } else {
//         appData.savings = true;
//     }
// });

// //Методы ==> обработка событий; Сумма = месяц/год. Проценты;
// summValue.addEventListener('input', function() {
//     if (appData.savings == true) {
//         let sum = +summValue.value,
//             percent = +percentValue.value;
//         //Месяц;
//         appData.monthIncome = (sum / 100 / 12 * percent);
//         //Год;
//         appData.yearIncome = (sum / 100 * percent);
//         //Вывод на экран;
//         monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
//         yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
//     }
// });

// percentValue.addEventListener('input', function() {
//     if (appData.savings == true) {
//         let sum = +summValue.value,
//             percent = +percentValue.value;
//         //Месяц;
//         appData.monthIncome = (sum / 100 / 12 * percent);
//         //Год;
//         appData.yearIncome = (sum / 100 * percent);
//         //Вывод на экран;
//         monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
//         yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
//     }
// });

// //объект данных пользователя
// let appData = {
//     //Общая сумма;
//     budget: money,
//     //Дата;
//     timeData: time,
//     //Обязательные статьи ${key}:${value}
//     expenses: {},
//     //Необязательные статьи;
//     optionalExpenses: {},
//     income: [],
//     //Состояние депозита;
//     savings: false,
// };

// //Лог объекта
// console.log(appData);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// // console.log(summ);
// if (function f() {}) {
//     console.log(typeof f);
// }

// let sas = 2 && 1 && null && 0 && undefined;
// console.log(sas);

// if (function f() {}) {
//     console.log(typeof f);
// }

// function User() {}
// User.prototype = { admin: false };

// let user = new User();

// User.prototype = { admin: true };

// console.log(user.admin);

// let a = 1;
// let b = { toString() { return '1' } };
// let c = 1;
// console.log(a + b + c);

// let obj = {
//     "0": 1,
//     0: 2
// };

// console.log(obj["0"] + obj[0]);

// f.call(null);

// function f() {
//     console.log(this);
// }
let a = new Array(1, 2),
    b = new Array(3);
console.log(a[0] + b[0]);

let sas = [] + 1 + 2;
console.log(sas)

console.log(+"Infinity");