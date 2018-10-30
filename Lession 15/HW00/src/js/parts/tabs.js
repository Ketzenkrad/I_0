function tabs(params) {
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabs(hide) {
        for (let index = hide; index < tabContent.length; index++) {
            tabContent[index].classList.remove('show');
            tabContent[index].classList.add('hide');
        }
    }


    hideTabs(1);

    function showTabs(show) {

        if (tabContent[show].classList.contains('hide')) {
            tabContent[show].classList.remove('hide');
            tabContent[show].classList.add('show');
        }
    }
    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let index = 0; index < tab.length; index++) {
                if (target == tab[index]) {
                    hideTabs(0);
                    showTabs(index);
                    break;
                }
            }
        }
    });
}

module.exports = tabs;