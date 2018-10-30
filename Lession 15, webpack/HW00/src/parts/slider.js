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