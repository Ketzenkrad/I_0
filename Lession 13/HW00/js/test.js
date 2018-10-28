//#Табы
// 'use strict'
// console.log('Test++');
//Логика;

//События глобального объекта;
//Загрузка объекта window
// window.addEventListener('load');

//Для работы при загрузке DOM-дерева
window.addEventListener('DOMContentLoaded', function() {
    //Основная логика;
    'use strict'

    //Скрипт табов;
    //Получение элементов;
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    //Функция скрытия
    function hideTabs(hide) {
        //Цикл операции с классами
        //Индекс равен аргументу; индекс меньше длины контента, индекс++
        for (let index = hide; index < tabContent.length; index++) {
            //Удаляем, при каждом проходе цикла;
            tabContent[index].classList.remove('show');
            //Добавляем
            tabContent[index].classList.add('hide');
        }
    }

    //Запуск функции; Передаем 1 передающуюся в hide, которая
    //отрабатывает в цикле;
    hideTabs(1);
    //Показываем контент;
    function showTabs(show) {
        //Если элемент скрыт;
        if (tabContent[show].classList.contains('hide')) {
            //Удаляем, при каждом проходе цикла;
            tabContent[show].classList.remove('hide');
            //Добавляем класс;
            tabContent[show].classList.add('show');
        }
    }
    //Обработчик событий при клике на табы;
    info.addEventListener('click', function(event) {
        //Переменная = цель события
        let target = event.target;
        //Если при клике на цель, то;
        if (target && target.classList.contains('info-header-tab')) {
            //Цикл перебора табов и сравнения цели клика;
            for (let index = 0; index < tab.length; index++) {
                //Если
                if (target == tab[index]) {
                    //Скрытие табов
                    hideTabs(0);
                    //Вывод только совпадающих
                    showTabs(index);
                    //Остановка
                    break;
                }
            }
        }
    });

    //Продолжение функции, получаем элементы, интерактив таймера;
    //Дата
    let deadline = '2018-10-22';
    //Промежуток времени от данного момента до дедлайна;
    function getTimeRemaining(endtime) {
        //Разница во времени;
        //Отнимаем от parse endtime дату текущую;
        let t = Date.parse(endtime) - Date.parse(new Date()),
            //Переменые времени;
            //Перевод милисекунд в секунды;
            seconds = Math.floor((t / 1000) % 60),
            //Получение минут;
            minutes = Math.floor((t / 1000 / 60) % 60),
            //Получение часов;
            hours = Math.floor((t / (1000 * 60 * 60)));
        //Для дней
        // days = Math.floor((t/(1000*60*60*24)));
        //Возвращаем объект времени;
        //На заметку - принцип хэша |k, v|;
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    //Статика в динамику;
    //Выставляем время;
    function setClock(id, endtime) {
        //Ищем внутри блока => передаем;
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            // numbers = document.querySelector('.timer-numbers'),
            //Переменная интервала;
            timeInterval = setInterval(updateClock, 1000);
        //Функция запуска через интервал;
        function updateClock() {
            //Обновление;
            let t = getTimeRemaining(endtime);
            //Пишем в HTML;
            //Запись в HTML;
            hours.innerHTML = (t.hours < 10) ? '0' + t.hours : t.hours;
            minutes.innerHTML = (t.minutes < 10) ? '0' + t.minutes : t.minutes;
            seconds.innerHTML = (t.seconds < 10) ? '0' + t.seconds : t.seconds;
            //Условие остановки таймера:
            if (t.total <= 0) {
                //Перезапись элементов по очистке таймера;
                clearInterval(timeInterval);
                hours.innerHTML = '00';
                minutes.innerHTML = '00';
                seconds.innerHTML = '00';
                // number.innerHTML = 'END';
                console.log("End++");
            }
        }
    }
    //test
    //multiple;
    setClock('timer', deadline);

    //Модальные окна;
    //Получение элементов;
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        moreTab = document.querySelector('.description-btn');
    //Обработка событий;
    more.addEventListener('click', function() {
        //По клику меняем стиль;
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        //Запрет скролла
        document.body.style.overflow = 'hidden';
    });
    //Закрываем окно;
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        //Удаляем класс у переменной more
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
    // Узнать больше в табах;
    moreTab.addEventListener('click', function() {
        this.classList.add('more-splash');
        overlay.style.display = "block";
        document.body.style.overflow = 'hidden';
    });

    //Цикл для кнопок;
    let buttonMore = document.querySelectorAll('.description-btn');
    //Сам цикл
    for (let index = 0; index < buttonMore.length; index++) {
        let buttons = buttonMore[index];
        buttons.addEventListener('click', function(event) {
            if (event.target && event.target.className == 'description-btn') {
                event.target.classList.add('more-splash');
                overlay.style.display = "block";
                document.body.style.overflow = 'hidden';
            }
        });
    }

    //Ajax
    //Объект состояний запроса;
    let message = {
        loading: 'Загрузка..',
        success: 'Заявка отправлена.',
        failure: 'Ошибка.'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');


    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');

        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        let formData = new FormData(form);
        let simple = {};

        formData.forEach(function(value, key) {
            simple[key] = value;
        });

        let json = JSON.stringify(simple);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });
        for (let counter = 0; counter < input.length; counter++) {
            input[counter].value = '';
        }
    });


    let contactsForm = document.querySelector('.contact-form form');

    contactsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        contactsForm.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open("POST", 'server.php');
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        let formData = new FormData(contactsForm);

        request.send(formData);

        request.onreadystatechange = function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                };
            };
        };
        for (let counter = 0; counter < contactsForm.length; counter++) {
            contactsForm[counter].value = '';
        }
    });

    //Слайдер и калькулятор;
    //Параметры слайдов
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        preview = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        activeDot = document.querySelector('.slider-dots'),
        allDots = document.querySelectorAll('.dot');
    //Функция показа слайдов;
    function show(s) {
        //проверка номеров слайда
        if (s > slideIndex.length) {
            slideIndex = 1;
        }
        if (s < 1) {
            slideIndex = slides.length;
        }
        //на перебор;
        slides.forEach((item) => item.style.display = 'none');
        // for (let counter = 0; counter < slides.length; counter++) {
        //     slides[counter].style.display = 'none';
        // }
        //работа с точками;
        allDots.forEach((item) => item.classList.remove('dot-active'));
        //показ нужного слайда;
        slides[slideIndex - 1].style.display = 'block';
        allDots[slideIndex - 1].classList.add('dot-active');
    }
    //Функция увеличения индекса;
    function plusSlide(s) {
        show(slideIndex += s);
    }
    //функция установки текущего слайда;
    function current(s) {
        show(slideIndex = s);
    }
    //обработка события;
    preview.addEventListener('click', function() {
        plusSlide(-1);
    });
    next.addEventListener('click', function() {
        plusSlide(1);
    });
    //Реализация точек через делегирование;
    activeDot.addEventListener('click', function(event) {
        //Генерация номера слайда;
        for (let counter = 0; counter < allDots.length + 1; counter++) {
            //Делегируем
            if (event.target.classList.contains('dot') && event.target == allDots[counter - 1]) {
                current(counter);
            }
        }
    });
    //Вызов;
    show();

    //Калькулятор;
    //Переменные;
    let persons = document.querySelectorAll('.counter-block-input')[0],
        days = document.querySelectorAll('.counter-block-input')[1],
        places = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        usersumm = 0,
        dayssumm = 0,
        total = 0;
    //По умолчанию
    totalValue.innerHTML = 0;
    //Расчет суммы
    persons.addEventListener('change', function() {
        usersumm = +this.value;
        total = (dayssumm + usersumm) * 4000;
        //Условия проверки, без + e
        if (this.value == '' || isNaN(parseInt(this.value)) == true ||
            usersumm % 1 != 0 || dayssumm % 1 != 0 || usersumm <= 0 || dayssumm <= 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });
    //Расчет суммы
    days.addEventListener('change', function() {
        dayssumm = +this.value;
        total = (dayssumm + usersumm) * 4000;
        //Условия проверки, без + e
        if (this.value == '' || isNaN(parseInt(this.value)) == true ||
            usersumm % 1 != 0 || dayssumm % 1 != 0 || usersumm <= 0 || dayssumm <= 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });
    //При условии заполнения обоих инпутов;
    places.addEventListener('change', function() {
        //Условия проверки, без + e
        if (days.value == '' || isNaN(parseInt(days.value)) == true ||
            usersumm % 1 != 0 || persons.value == '' || isNaN(parseInt(days.value)) == true ||
            dayssumm % 1 != 0 || usersumm <= 0 || dayssumm <= 0) {
            totalValue.innerHTML = 0;
        } else {
            let x = total;
            totalValue.innerHTML = x * this.options[this.selectedIndex].value;
        }
    });

    //Jquery
    function numberblock(input) {
        input.addEventListener('input', function() {
            input.value = input.value.replace(/[^\d]/g, '');
            if (input.value.length > 2) input.value = input.value.slice(0, 2);
        });
    }

    numberblock(persons);
    numberblock(days);

});