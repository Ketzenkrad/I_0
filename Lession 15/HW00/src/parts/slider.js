function slider() {
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        preview = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        activeDot = document.querySelector('.slider-dots'),
        allDots = document.querySelectorAll('.dot');

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
        for (let counter = 0; counter < allDots.length + 1; counter++) {
            if (event.target.classList.contains('dot') && event.target == allDots[counter - 1]) {
                current(counter);
            }
        }
    });
    show();
}

module.exports = slider;