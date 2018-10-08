'use strict';

//Вопросы пользователю
let money = +prompt("Ваш бюджет на месяц? "),
    time = prompt('Введите дату в формате YYYY-MM-DD ');
let answer1 = prompt("Введите обязательную статью расходов в этом месяце: "),
    answer2 = +prompt("Во сколько обойдется? "),
    answer3 = prompt("Введите обязательную статью расходов в этом месяце: "),
    answer4 = +prompt("Во сколько обойдется? ");

//объект данных пользователя
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        [answer1]: answer2,
        [answer3]: answer4
    },
    optionalExpenses: {},
    income: [],
    savings: false
};
//лог объекта
console.log(appData);

//to expenses
appData.expenses_per_day = appData.budget / 30;

//user_alert 
alert(`Бюджет на один день: ${appData.expenses_per_day}`);