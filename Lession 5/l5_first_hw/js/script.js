//###Добавление пункта меню;
let menubar = document.querySelector('.menu'),
    newLi = document.createElement('li');
newLi.classList.add('menu-item');
newLi.innerHTML = 'Пятый пункт+';
menubar.appendChild(newLi);
//###replace;
menubar.insertBefore(menubar.getElementsByTagName("li")[2], menubar.getElementsByTagName("li")[1]);

//###Бэкграунд;
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

//###заголовок;
let titles = document.querySelector('.title');
titles.innerHTML = 'Мы продаем только <strong>подлинную</strong> технику Apple';

//###Правка рекламы;
let advertising = document.querySelectorAll('.adv')[0];
let column = document.querySelectorAll('.column');
advertising.remove();

//###prompt;
input = document.querySelector('.prompt');
input.innerHTML = prompt("Как вы относитесь к технике apple?");
//###проверка на запись в div element;
console.log(`User answer: ${input}`);

//###Лог для проверки;
console.log("InnerHTML++");