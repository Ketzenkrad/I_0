//###Переменные
// let head = document.getElementsByTagName('header'),
//     navigate = document.getElementsByTagName('nav');

// column = document.querySelector('.column'),
// div = document.getElementsByTagName('div'),
// secondcolumn = document.querySelector('.column'),
// advertising = document.querySelector('.adv');

//###Логи
// console.log(head);
// console.log(navigate);
// console.log(menubar);
// console.log(menuitem);

// console.log(column);
// console.log(div);
// console.log(titles);
// console.log(advertising);
// console.log(secondcolumn);
// console.log(question);

//###Добавление пункта меню;
let menubar = document.querySelector('.menu'),
    newLi = document.createElement('li');
newLi.classList.add('menu-item');
newLi.innerHTML = 'Пятый пункт+';
menubar.appendChild(newLi);
menubar.insertBefore(menubar.getElementsByTagName("li")[2], menubar.getElementsByTagName("li")[1]);
console.log(menubar);

//###replace;
// let menubar = document.querySelector('.menu'),
//     menuitem = document.querySelectorAll('.menu-item'),
//     li = document.createElement('li');
// lists.appendChild('li');
// li.classList.add('menu-item');
// li.innerHTML = 'Пятый пункт';
// console.log(lists);

//###Бэкграунд;
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

//###заголовок;
let titles = document.querySelector('.title');
titles.innerHTML = 'Мы продаем только <strong>подлинную</strong> технику Apple';

//###remove||реклама;
//Я вообще не понял, как можно было из двух одинаковых дивов column 
//выбрать тот, в котором был class = "adv"; Поэтому перебор такой.
let advRemove = (advertising) => [...advertising].forEach(elements => elements.remove());
advRemove(document.querySelectorAll(".adv"));

//###prompt;
input = document.querySelector('.prompt');
input.innerHTML = prompt("Как вы относитесь к технике apple?");
//###проверка на запись в div element;
console.log(`User answer: ${input}`);

//###Лог для проверки;
console.log("InnerHTML++");