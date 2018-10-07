'use strict';

//входные значения от user_input
let money = +prompt("Ваш бюджет на месяц? "),
    time = prompt('Введите дату в формате YYYY-MM-DD ');

//объект данных пользователя
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
//лог объекта
console.log(appData);


//цикл while
// let counter = 0;
// while (counter < 2) {
//     let answer1 = prompt("Введите обязательную статью расходов в этом месяце: "),
//         answer2 = +prompt("Во сколько обойдется? ");
//     appData.expenses[answer1] = answer2;
//     console.log("while is work");
//     counter++;
// };

//цикл do..while
// let counter = 0;
// do {
//     let answer1 = prompt("Введите обязательную статью расходов в этом месяце: "),
//         answer2 = +prompt("Во сколько обойдется? ");
//     appData.expenses[answer1] = answer2;
//     console.log("do..while is work")
//     counter++;
// } while (counter < 2);

//вопросы для пользователя через цикл
for (let i = 0; i < 2; i++) {
    let answer1 = prompt("Введите обязательную статью расходов в этом месяце: "),
        answer2 = +prompt("Во сколько обойдется? ");
    if (
        (typeof(anwser1)) === 'string' && (typeof(answer1)) != null && (typeof(answer2)) != null &&
        answer1 != '' && answer2 != '' && answer1.length < 50
    ) {
        console.log("Проверка работает");
        appData.expenses[answer1] = answer2;
    } else {
        //условия выхода
        break;
    }
};

//to expenses
appData.expenses_per_day = appData.budget / 30;

//user_alert 
alert(`Бюджет на один день: ${appData.expenses_per_day}`);

//expenses_value_roll
if (appData.expenses_per_day < 1000) {
    console.log("Minimal expenses value")
} else if (appData.expenses_per_day > 1000 && appData.expenses_per_day < 2000) {
    console.log("Middle expenses value");
} else if (appData.expenses_per_day > 2000) {
    console.log("High expenses value");
} else {
    console.log("Not a expenses value");
};