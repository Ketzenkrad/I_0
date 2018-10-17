console.log('++');
'use strict'
// function greetings() {
//     alert("Test")
// }

// let timerId = setTimeout(greetings, 3000);
// clearTimeout(timerId);

// function greetings() {
//     alert("Test")
// }

// let timerId = setInterval(greetings, 3000);
// clearInterval(timerId);

// let timer = setTimeout(function log() {
//     console.log("Test work");
//     setTimeout(log, 2000);
// });

// let button = document.querySelector('.button');
// let block = document.querySelector('.block');

// function animation() {
//Стартовая позиция/интервал;
// let startPosition = 0;
// let id = setInterval(frame, 10);
//Логика
//     function frame() {
//         if (startPosition == 300) {
//             clearInterval();
//         } else {
//             startPosition++;
//             block.style.top = startPosition + 'px';
//             block.style.left = startPosition + 'px';
//         }
//     }
// }
//Вызов
// button.addEventListener('click', animation);

//Делегирование события;
// let buttonBlock = document.querySelector('.button-block');
// let buttons = document.getElementsByTagName('button');

// buttonBlock.addEventListener('click', function(event) {
//     if (event.target && event.target.tagName == 'BUTTON') {
//         console.log("Test++, button");
//     } else {
//         console.log("Test--, not button");
//     }
// });

//По классу
// let buttonBlock = document.querySelector('.button-block');
// let buttons = document.getElementsByTagName('button');

// buttonBlock.addEventListener('click', function(event) {
//     if (event.target && event.target.classList.contains('first')) {
//         console.log("Test++, first button");
//     } else {
//         console.log("Test--, not first");
//     }
// });

//Особая конструкция по совпадению
// let buttonBlock = document.querySelector('.button-block');
// let buttons = document.getElementsByTagName('button');

// buttonBlock.addEventListener('click', function(event) {
//     if (event.target && event.target.matches('button.first')) {
//         console.log("Test++, first button");
//     } else {
//         console.log("Test--, not first");
//     }
// });