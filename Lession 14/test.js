//Jquery;
//Загружаем документ;
$(document).ready(function() {
    //Получаем первую кнопку
    $('.list-item:first').hover(function() {
        //класс по наведению
        $(this).toggleClass('active');
    });
    //аналог addEventListener
    $('.list-item:eq(2)').on('click', function() {
        //анимация исчезновения;
        $('.image:even').fadeToggle(300);
    });
    //последняя кнопка
    //Анимация;
    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 3000);
    });
});