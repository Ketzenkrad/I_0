'use strict';

//Переменные даты и суммы;
let money, time;

//входные значения от user_input;
function start(params) {
    money = +prompt("Ваш бюджет на месяц? ");
    time = prompt('Введите дату в формате YYYY-MM-DD ');
    //Проверка корректности данных user_input(общий бюджет);
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц? ");
    };
};
start();

//объект данных пользователя
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};
//лог объекта
console.log(appData);

//Функция статей и сумм расходов;
function cycleOfQuestions(params) {
    //вопросы для пользователя через цикл for
    for (let i = 0; i < 2; i++) {
        let answer1 = prompt("Введите обязательную статью расходов в этом месяце: "),
            answer2 = +prompt("Во сколько обойдется? ");
        //Проверка корректности данных;
        if ((typeof(answer1) === 'string' && (typeof(answer1)) != null && (typeof(answer2)) != null && answer1 != '' && answer2 != '' && answer1.length < 50)) {
            console.log("Проверка работает");
            appData.expenses[answer1] = answer2;
        } else {
            //Возврат в цикл;
            i--;
        }
    };
};
//Вызов;
cycleOfQuestions();

//Функция о статьях необязательных расходов;
function chooseOptExpenses(params) {
    for (let counter = 1; counter < 4; counter++) {
        let question = prompt("Название статьи необязательных расходов: ");
        //Проверка на корректность;
        if ((typeof(question) === 'string' && (typeof(question)) != null && (typeof(question)) != '' && question.length < 30)) {
            console.log("Проверка работает");
            appData.optionalExpenses[`Номер ответа ${counter}`] = question;
        } else {
            //Возврат к вопросам;
            counter--;
        }
    }
};
chooseOptExpenses();

//Функция бюджета на один день;
function dayliBudget() {
    appData.expenses_per_day = (appData.budget / 30).toFixed();
    alert(`Бюджет на один день: ${appData.expenses_per_day}`);
};
//Вызов;
dayliBudget();

//Функция депозита;
function deposit(params) {
    if (appData.savings == true) {
        let storage = +prompt("Сумма ваших накоплений: "),
            percents = +prompt("Под какой процент? ");
        appData.monthIncome = (storage / 100 / 12) * percents;
        alert(`Доход в месяц по депозиту: ${appData.monthIncome}`);
    }
};
//Вызов;
deposit();

//expenses_value_roll; зависимость уровня дохода на сравнении входных значений;
function detectLevel(params) {
    if (appData.expenses_per_day < 1000) {
        console.log("Minimal expenses value");
    } else if (appData.expenses_per_day > 1000 && appData.expenses_per_day < 4500) {
        console.log("Middle expenses value");
    } else if (appData.expenses_per_day > 4500) {
        console.log("High expenses value");
    } else {
        console.log("Not a expenses value");
    };
};
//Вызов;
detectLevel();