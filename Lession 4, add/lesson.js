// // let obj = new Object();
// //Объект опций
// let options = {
//     width: 1024,
//     height: 1024,
//     name: 'test'
// };
// console.log(options.name);

// //Добавление в объект
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// //Удаление и лог
// delete options.bool;
// console.log(options);
// //Перебор свойств
// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
// };
// console.log(Object.keys(options).length);

//методы массива;
// console.log("Массив без изменений");
// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(array);

// console.log(`Метод 'pop'`);
// array.pop();
// console.log(array);

// console.log(`Метод 'push'`);
// array.push(9);
// console.log(array);

// console.log(`Метод 'shift'`);
// array.shift();
// console.log(array);

// console.log(`Метод 'unshift'`);
// array.unshift(0);
// console.log(array);

//Перебор массива
// for (let counter = 0; counter < array.length; counter++) {
//     console.log(`Элемент массива: ${array[counter]}`);
// };

//Пустые item'ы в массиве;
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr[20] = 20;
// console.log(arr);

//Работа через for..each
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.forEach(function(item, index, array) {
//     console.log(`Номер ${index} элемента ${item} из массива ${array}`);
// });
// console.log(`Весь массив: ${arr}`);

//Работа через for..off
// let newArray = [10, 20, 30, 40, 50, 60, 70];
// for (let key of newArray) {
//     console.log(`Значение: ${key}`)
// };

//Работа через in
// let newArray = [10, 20, 30, 40, 50, 60, 70];
// for (let key in newArray) {
//     console.log(`Ключ: ${key}`)
// };

//метод split;
// let items = prompt("", ""),
//     array = [];
// array = items.split(',');
// console.log(array);

//join
// let array = ['item one', 'item two', 'item three'],
//     items = array.join(', ');
// console.log(items);

//sort
// let array = ['item a', 'item c', 'item b'],
//     items = array.sort();
// console.log(items);

// let array = [10, 50, 30, 40, 20],
//     items = array.sort(numSort);

// function numSort(x, y) {
//     return (x - y);
// };
// console.log(items);

//псевдомассив (хэш);

//oop
//machine
// let machine = {
//     health: 420,
//     armor: 200
// };
// //light machine
// let light_machine = {
//     health: 90
// };
// //прототипное наследование;
// light_machine__proto__ = machine;
// console.log(light_machine);
// console.log(light_machine.armor);