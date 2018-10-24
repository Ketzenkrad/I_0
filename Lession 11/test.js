//О JSON;
let options = {
    width: 1366,
    height: 768,
    background: 'red',
    font: {
        size: '16px',
        color: '#fff'
    }
};
console.log(JSON.parse(JSON.stringify(options)));

//Async
let rubles = document.getElementById('ru'),
    dollars = document.getElementById('us');
//addEvent
rubles.addEventListener('input', () => {
    let request = new XMLHttpRequest();
    //до пяти аргументов: метод, адрес, async, логин и пароль;
    request.open('GET', 'test.json');
    //Заголовок запроса
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    //Send
    request.send();
    //Методы: статус/status, текстовое описание/StatusText 
    //текст ответа сервера/responseText||response, текущее состояние запроса/readyState
    request.addEventListener('readystatechange', function() {
        //Состояние сервера
        if (request.readyState === 4 && request.status == 200) {
            //Парсинг данных;
            let data = JSON.parse(request.response);
            //Конвертация рублей в доллары;
            //data.usd - из JSON, очевидно;
            dollars.value = (rubles.value / data.usd);
        } //Но в случае ошибки 
        else {
            dollars.value = "Incorrect";
        }
    });
});