//Тест, текущий день недели;
function check(num) {
    if (!num) return 7;
    else return num;
}
let dayNumb = new Date();
alert(`Номер дня недели: ` + check(dayNumb.getDay()));

// Функция на текущий день недели через методы и массив;
function dayArray(num) {
    let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    return days[num];
};

let today = new Date();
alert(`Это ` + dayArray(today.getDay()));

//Разность
// function difference(params) {
//     let inputOne = document.querySelector('.dateOne'),
//         inputTwo = document.querySelector('.dateTwo'),
//         result = document.querySelector('result');
// };

//Перевод
function check(num) {
    if (num < 10) return '0' + num;
    else return num;
};
let zeroPlus = new Date();
alert(
    check(`Точное время: ` + zeroPlus.getHours()) + ':' + check(zeroPlus.getMinutes()) + ':' +
    check(zeroPlus.getSeconds()) + ' ' +
    check(`Точная дата: ` + zeroPlus.getDate()) + '.' +
    check(zeroPlus.getMonth() + 1) + '.' +
    check(zeroPlus.getFullYear())
);