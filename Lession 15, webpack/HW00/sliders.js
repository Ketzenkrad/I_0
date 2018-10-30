//############Переделка;
function slider() {
    let slideIndex = 1,
        slides = document.getElementsByClassName('slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.getElementsByClassName('dot');

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('dot-active');
        }

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function(e) {
        plusSlides(-1);
    });
    next.addEventListener('click', function(e) {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(e) {
        for (var i = 0; i < dots.length + 1; i++) {
            if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });
}

module.exports = slider;

// ##############Действующий вариант;

function slider() {
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        preview = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        activeDot = document.querySelector('.slider-dots'),
        allDots = document.querySelectorAll('.dot');
    show(slideIndex);

    function show(s) {

        if (s > slideIndex.length) {
            slideIndex = 1;
        }
        if (s < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        allDots.forEach((item) => item.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'block';
        allDots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlide(s) {
        show(slideIndex += s);
    }

    function current(s) {
        show(slideIndex = s);
    }

    preview.addEventListener('click', function() {
        plusSlide(-1);
    });
    next.addEventListener('click', function() {
        plusSlide(1);
    });

    activeDot.addEventListener('click', function(event) {
        for (let i = 0; i < allDots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == allDots[counter - 1]) {
                current(i);
            }
        }
    });

}

module.exports = slider;