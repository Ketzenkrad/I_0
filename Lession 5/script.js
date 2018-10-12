//#gets
let box = document.getElementById('box'),
    button = document.getElementsByTagName('button'),
    buttons = document.getElementsByClassName('boxOffButtons'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    loneHeart = document.querySelector('.heart'),
    sections = document.querySelector('.heartSection');

// #
// logs
console.log(box);

console.log(button);
console.log(button[0]);
console.log(buttons);

console.log(circles[2]);
console.log(hearts[1]);
console.log(loneHeart);

// #styles
box.style.backgroundColor = '#e74c3c';
button[1].style.backgroundColor = '#58d68d';

circles[0].style.backgroundColor = ' #e74c3c';
circles[1].style.backgroundColor = ' #f4d03f';
circles[2].style.backgroundColor = ' #27ae60';

for (let counter = 0; counter < hearts.length; counter++) {
    hearts[counter].style.backgroundColor = ' #e74c3c';
};

hearts.forEach(function(item, counter, hearts_hash) {
    item.style.backgroundColor = ' #e74c3c';
});

//#gen
let div = document.createElement('div');
text = document.createTextNode('Тест');

div.classList.add('black');

document.body.appendChild(div);
sections.appendChild(div);
document.body.insertBefore(div, circles[0]);
document.body.removeChild(circles[1]);
sections.removeChild(heart[1]);

document.body.replaceChild(button[1], circles[1]);

console.log(div);
console.log(text);

//#innerHtml
let div = document.createElement('div');
sections.appendChild(div);
div.classList.add('black');
div.innerHTML = '<h3>Test message</h3>';
// div.textContent = '<h3>Test message</h3>';
console.log("InnerHTML ++");