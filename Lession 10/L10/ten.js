let name = 'User_name',
    age = 30,
    mail = 'simple@gmail.com';
document.write(`User: ${name} ${age} age. Email: ${mail}`);

//пример функции, которая создает массивы;
function makeArray(params) {
    var items = [];
    for (let counter = 0; counter < 20; counter++) {
        var item = function(params) {
            console.log(counter);
        };
        items.push(item);
    }
    return items;
}
var array = makeArray();
array[2]();
array[4]();
array[6]();
console.log(array);

//Стрелочные функции;
//анонимная функция;
let example = () => {
    console.log(this)
};

example();

let object = {
    number: 1024,
    //def
    say: function(params) {
        let say = () => {
            console.log(this);
        };
        say();
    }
};
// out
object.say();

let button = document.querySelector('button');
button.addEventListener('click', function(params) {
    let show = () => {
        console.log(this);
    };
    show();
});

//ES5
function quadro(num, base) {
    //Как и в ruby.
    base = base || 2;
    console.log(num * base);
};
quadro(1024, 3);
quadro(1024);

//ES6
function quad(num, base = 2) {
    console.log(num * base);
};
quad(1024, 3);
quad(1024);

//Еще про Class
//аналогично с ruby-module
class Geometry {
    //аналогично с attr_acessor и инстансом;
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }
};
//аналогично class object;
const square = new Geometry(10, 10);
//puts
console.log(`Square: ${square.area()}`);

//spread оператор - to_a в руби;
let sources = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'react', 'vue'],
    network = [...sources, ...blogs, 'test0', 'test1'];
console.log(network);

//пример
function log(a, b, c) {
    console.log(a, b, c);
    console.log(a + b + c);
};
let nums = [10, 20.5, 1024];
log(...nums);