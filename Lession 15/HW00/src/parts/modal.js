function modal() {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        moreTab = document.querySelector('.description-btn');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    moreTab.addEventListener('click', function() {
        this.classList.add('more-splash');
        overlay.style.display = "block";
        document.body.style.overflow = 'hidden';
    });

    let buttonMore = document.querySelectorAll('.description-btn');

    for (let index = 0; index < buttonMore.length; index++) {
        let buttons = buttonMore[index];
        buttons.addEventListener('click', function(event) {
            if (event.target && event.target.className == 'description-btn') {
                event.target.classList.add('more-splash');
                overlay.style.display = "block";
                document.body.style.overflow = 'hidden';
            }
        });
    }
}

module.exports = modal;