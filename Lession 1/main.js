'use strict';

//данные от пользователя
let money = +prompt("Ваш бюджет на месяц? ", "Примерная сумма..."),
    time = prompt("Введите дату в формате YYYY-MM-DD ", "Например 2018-10-04");
alert(`Бюджет на месяц ${money}`);

//вопросы для пользователя
let one = prompt("Введите обязательную статью расходов в этом месяце: ", "Введите статью.."),
    two = +prompt("Во сколько обойдется? ", "Введите сумму.. ");
alert(`Бюджет на один день: ${two}`);

//объект данных пользователя
let AppData = {
    budget: money,
    timeData: time,
    expenses: {
        answers: `Статья расхода: ${one}, сумма: ${two}`
    },
    optionalExpenses: {},
    income: [],
    savings: false
};
//Лог объекта
console.log(AppData);