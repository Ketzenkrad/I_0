// let week = {
//     '1': 'Понедельник',
//     '2': 'Вторник',
//     '3': 'Среда',
//     '4': 'Четверг',
//     '5': 'Пятница',
//     '6': 'Суббота',
//     '7': 'Воскресенье'
// };

// let arr = [1024, 763, 568, 4324, 3601, 77, 31];
// let filter = filterRange(arr, 3, 7);
// console.log(filter);

let array = ['1024', '763', '568', '4324', '3601', '77', '31'];
for (let index = 0; index < array.length; index++) {
    if (array[index].substring(0, 1) == 3 || array[index].substring(0, 1) == 7) {
        console.log(array[index]);
    };
};