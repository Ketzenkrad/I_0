let age = document.getElementById('age');
let button = document.getElementsByTagName('button');

function showUser(surname, name) {
    this.value = age.value;
    alert(`Пользователь ${surname} ${name}, его возраст ${this.value}`);
};

button[0].addEventListener('click', function() {
    showUser('Имя', 'Фамилия');
});