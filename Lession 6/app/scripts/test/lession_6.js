console.log("Test++");

//var кнопок
let button = document.querySelectorAll('button'),
    wrapper = document.querySelector('.wrapper'),
    link = document.querySelector('a');


//Самая первая кнопка по индексу из массива
//Метод для события;
// button[0].onclick = function click(params) {
//     //Обработчик события
//     alert('First button onclick');
// };

// button[0].onclick = function click(params) {
//     //Обработчик события
//     alert('First button double onclick');
// };

//Прослушка событий;
// button[0].addEventListener('click', function() {
//     alert('First button onclick');
// });

// button[0].addEventListener('click', function() {
//     alert('First button double onclick');
// });

//EnterFocus
// button[0].addEventListener('mouseenter', function() {
//     alert('First button focus');
// });

//Event
// button[0].addEventListener('click', function(event) {
//     console.log(`Event type: ${event.type}, element target: ${event.target}`);
// });

//EventTarget
// button[0].addEventListener('click', function(event) {
//     let target = event.target;
//     target.style.display = 'none';
//     console.log(event);
//     console.log(`Event type: ${event.type}, element target: ${event.target}`);
// });

//Дочерние элементы;
// button[0].addEventListener('click', function(event) {
//     console.log(`Event type: ${event.type}, element target: ${event.target}`);
// });
//Без передачи в параметры функции event не отработало.
//ReferenceError: event is not defined
// wrapper.addEventListener('click', function(event) {
//     console.log(`Event type: ${event.type}, element target: ${event.target}`);
// });

//Отмена поведения;
// link.addEventListener('click', function name(event) {
//     event.preventDefault();
//     console.log(`Event type: ${event.type}, element target: ${event.target}`);
// });

//ForEach для каждого элемента button
button.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('focuse off')
    });
    item.addEventListener('mouseenter', function() {
        console.log('focus on');
    });
    console.log("It's just work.");
});