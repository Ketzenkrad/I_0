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
    //Общая сумма;
    budget: money,
    //Дата;
    timeData: time,
    //Обязательные статьи ${key}:${value}
    expenses: {},
    //Необязательные статьи;
    optionalExpenses: {},
    income: [],
    //Состояние депозита;
    savings: true,
    //Функция статей и сумм расходов;
    cycleOfQuestions: function() {
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
        }
    },
    //Функция бюджета на один день;
    dayliBudget: function() {
        appData.expenses_per_day = (appData.budget / 30).toFixed();
        alert(`Бюджет на один день: ${appData.expenses_per_day}`);
    },
    //Функция уровня дохода на сравнении входных значений;
    detectLevel: function() {
        if (appData.expenses_per_day < 1000) {
            console.log("Minimal expenses value");
        } else if (appData.expenses_per_day > 1000 && appData.expenses_per_day < 4500) {
            console.log("Middle expenses value");
        } else if (appData.expenses_per_day > 4500) {
            console.log("High expenses value");
        } else {
            console.log("Not a expenses value");
        };
    },
    //Функция депозита;
    deposit: function() {
        if (appData.savings == true) {
            let storage = +prompt("Сумма ваших накоплений: "),
                percents = +prompt("Под какой процент? ");
            appData.monthIncome = (storage / 100 / 12) * percents;
            alert(`Доход в месяц по депозиту: ${appData.monthIncome}`);
        }
    },
    //Функция о статьях необязательных расходов;
    chooseOptExpenses: function() {
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
    },
    //Функция дополнительного дохода:
    incomeValue: function() {
        for (let counter = 0; counter < 1; counter++) {
            let incomeQuestion = prompt("Что может принести доп.доход? \n (Указать через запятую: )");
            //равно строке && не равно null && не равно пустой строке;
            if ((typeof(incomeQuestion)) === 'string' && incomeQuestion != null && incomeQuestion != '') {
                appData.income = incomeQuestion.split(', ');
                appData.income.push(prompt("Дополнительные источники заработка: "));
                appData.income.sort();
            } else {
                //возврат
                counter--;
            }
        };
        //Запись в массив, вывод в лог;
        appData.income.forEach(function(item, index, array) {
            for (let counter = 0; counter < array.length; counter++) {
                //Не понял момента с передачей в условия проверки. Выносить в отдельную переменную?
                // if ((typeof(##)) === 'string' && ## != null && ## != '') {
                // } else {
                //     counter--;
                // }
                console.log(`Номер: ${index+1}, источника доп. заработка "${item}" из массива ${array}`);
            }
        });
    },
    //Функция ключей;
    objectKeys: function() {
        for (let key in appData) {
            console.log(`Наша программа включает в себя данные : ${key}`);
        }
    }
};

// appData.incomeValue();
// appData.objectKeys();

//лог объекта
console.log(appData);