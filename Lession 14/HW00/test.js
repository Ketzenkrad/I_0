//Получение документа целиком
$(document).ready(function() {
    let main_btna = $('.main_btna'),
        close = $('.close'),
        main_button = $('.main_btn');
    //выбрать тур
    $(main_btna).on('click', function() {
        $('.overlay').fadeIn();
        $('.modal').animate({
                opacity: "show",
                height: "show"
            },
            1500);
    });
    //получить консультацию
    $(main_button).on('click', function() {
        $('.overlay').fadeIn();
        $('.modal').animate({
                opacity: "show",
                height: "show"
            },
            1500);
    });
    //функция закрытия по крестику и анимация
    $(close).on('click', function() {
        $('.modal').animate({
                opacity: "hide",
                height: "hide"
            },
            1000);
        $('.overlay').fadeOut();
    });
});