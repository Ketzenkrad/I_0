//Я не понял, как можно было сделать это еще проще;
//Так же не совсем представляю, как такую конструкцию можно вменяемо внедрить в 
//нормальный проект.

window.onload = function() {
    //Переменная скролла и таймера;
    let scroll,
        timer;
    //Получение элемента;
    //Функция скролла;
    document.querySelector('.topButton').onclick = function() {
            //Скролл берем по оси Y;
            scroll = window.pageYOffset;
            //Скроллим вверх; Вызываем функцию;
            scrollToTop();
        }
        //Функция скролла наверх;
    function scrollToTop() {
        //При условии:
        //Если скролл больше нуля, то
        if (scroll > 0) {
            //передаем значения и метод;
            window.scrollTo(0, scroll);
            //Задаем скорость прокрутки, отнимая от значений число
            scroll = scroll - 40;
            //Таймер для скролла наверх.
            timer = setTimeout(scrollToTop, 15);
        } //Но при условии:
        else {
            //Чистим таймер;
            clearTimeout(timer);
            //Сбрасываем координаты;
            window.scrollTo(0, 0);
        }
    }
}