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
});