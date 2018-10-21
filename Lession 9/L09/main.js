// #
// Конструкторы

//###ES5
function User(name, id) {
    //initialize
    this.name = name;
    this.id = id;
    this.human = true;
    //def
    this.message = function(params) {
        console.log(`Test, hallo` + this.name);
    }
};

User.prototype.exit = function(name) {
    console.log(`User ` + this.name + ` is offline`);
}

let user0 = new User('Alpha', 40),
    user1 = new User('Beta', 41);

console.log(user0, user1);

user0.exit();

//###ES6
class Users {
    //initialize
    constructor(names, id) {
            this.names = names;
            this.id = id;
            this.human = true;
        } //def
    hallo() {
            console.log(`User ${this.names} is online`)
        } //def
    exit() {
        console.log(`User ${this.names} is offline`)
    }
};
//obj
let userOne = new Users('User_Name', 22),
    userTwo = new Users('UserName', 23);
//print
console.log(userOne, userTwo);
//call
userOne.hallo();
userTwo.exit();

//Контекст вызова;
// 'use strict';

function showThis(arg0, arg1) {
    console.log(this);

    function summ() {
        console.log(this);
        return arg0 + arg1;
    }
    console.log(summ());
}
showThis(1024, 1024);
showThis(2048, 4096);

//0 Способ первый = вызов func result window//undefined
//1 Методы объектов - это тоже функции;
//2 Метод объекта.this = объект
//3 Конструктор.this = new object
//4 Ручное присваивание this.func >> bind, call, apply;
let testObject = {
    a: 1024,
    b: 1024,
    summ: function() {
        console.log(this);

        function self() {
            console.log(this);
        }
        self();
    }
}
testObject.summ();

//Принудительный контекст вызова
let newUser = {
    name: 'User_Name'
};
//func
function say(family) {
    console.log(this);
    console.log(this.name + family);
};
//defs
//to_str
console.log(say.call(newUser, ' smm'));
//to_a
console.log(say.apply(newUser, [' smm']));

//Bind
function count(num) {
    return this * num;
};
let sum = count.bind(4);
console.log(sum(6));
console.log(sum(8));

//Пример;
let button = document.querySelector('button');
button.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';

    function show() {
        console.log(this);
    }
    show();
});