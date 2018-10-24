window.addEventListener('DOMContentLoaded', function() {

    'use strict'

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabs(hide) {
        for (let index = hide; index < tabContent.length; index++) {
            tabContent[index].classList.remove('show');
            tabContent[index].classList.add('hide');
        }
    }

    hideTabs(1);

    function showTabs(show) {
        if (tabContent[show].classList.contains('hide')) {
            tabContent[show].classList.remove('hide');
            tabContent[show].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let index = 0; index < tab.length; index++) {
                if (target == tab[index]) {
                    hideTabs(0);
                    showTabs(index);
                    break;
                }
            }
        }
    });

    let deadline = '2018-10-22';

    function getTimeRemaining(endtime) {

        let t = Date.parse(endtime) - Date.parse(new Date()),

            seconds = Math.floor((t / 1000) % 60),

            minutes = Math.floor((t / 1000 / 60) % 60),

            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            hours.innerHTML = (t.hours < 10) ? '0' + t.hours : t.hours;
            minutes.innerHTML = (t.minutes < 10) ? '0' + t.minutes : t.minutes;
            seconds.innerHTML = (t.seconds < 10) ? '0' + t.seconds : t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.innerHTML = '00';
                minutes.innerHTML = '00';
                seconds.innerHTML = '00';
                console.log("End++");
            }
        }
    }

    setClock('timer', deadline);


    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        moreTab = document.querySelector('.description-btn');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    moreTab.addEventListener('click', function() {
        this.classList.add('more-splash');
        overlay.style.display = "block";
        document.body.style.overflow = 'hidden';
    });


    let buttonMore = document.querySelectorAll('.description-btn');

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
});