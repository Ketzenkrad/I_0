//Промисы;

//Работа промисов;
//Функция полета стрелы с таймаутом
// let scotch = 1;

// function shoot(arrow, hit, fail) {
//     console.log('Shot >>---->');
//     //Условие:
//     setTimeout(function() {
//         Math.random() > .5 ? hit({}) : fail("Missing!");
//     }, 3000);
// };
// //Функиця выстрела;
// shoot({}, function(markdown) {
//     console.warn('Hit!');
//     win(markdown, drinkBonus, moneyBonus);
// }, function(miss) {
//     console.error(miss);
//     loose();
// });
// //Победа
// function win() {
//     console.log('You win');
//     (scotch == 1) ? drinkBonus(): moneyBonus();
// };
// //Поражение;
// function loose() {
//     console.log('You lose');
// };
// //Функции призов;
// function drinkBonus() {
//     console.log('Вы получили бутылку контрафактного виски.');
// };

// function moneyBonus() {
//     console.log('Вы получили кошелек с мелочью.');
// };

//Все тоже самое на промисах;
let scotch = 0;

function shoot(arrow) {
    console.log('Shot >>---->');
    //Промис
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject("Missing!");
        }, 3000);
    });
    return promise;
};

//Функиця выстрела;
shoot({})
    .then(markdown => console.log('Hit!'))
    .then(win)
    .catch(loose)

//Победа
function win() {
    console.log('You win');
    (scotch == 1) ? drinkBonus(): moneyBonus();
};
//Поражение;
function loose() {
    console.log('You lose');
};
//Функции призов;
function drinkBonus() {
    console.log('Вы получили бутылку контрафактного виски.');
};

function moneyBonus() {
    console.log('Вы получили кошелек с мелочью.');
};