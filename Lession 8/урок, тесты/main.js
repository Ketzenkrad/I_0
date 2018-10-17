//Параметры документа, окна и работа с ними
let textBox = document.querySelector('.textBox');
//По клиенту; offset, scroll - на заметку.
let width = textBox.clientWidth,
    height = textBox.clientHeight;
//Лог контента;
console.log('Ширина: ' + width, 'Высота: ' + height);
console.log("Координаты элемента textBox: ");
//Получение координат по JS-метрике, обязательно прочитать подробнее;
//Добавление направления через точку - например .left - выведет именно координаты left
//Добавлять в конце метода;
console.log(textBox.getBoundingClientRect());
//Дальнейшая логика;
//Скролл на раскрытие контента;
let button = document.querySelector('button'),
    buttonClose = document.getElementsByClassName('.close')
    //Закрытие контента в блок;
button.addEventListener('click', function() {
    //Направленная установка высоты;
    //Высота текстового блока равна высоте скролла текстового блока;
    //'px' для грамотного просчета;
    textBox.style.height = textBox.scrollHeight + 'px';
});
//на заметку .scrollTop;
//Работа с документом;
//Выводим ширину и высоту документа, комплексно;
console.log("Ширина документа: " + document.documentElement.clientWidth + 'px', "Высота документа: " + document.documentElement.clientHeight + 'px');
//Так же: методы scrollBy() и scrollTo();
// scrollBy(x, y);
// scrollTo(x, y);