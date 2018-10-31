function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        days = document.querySelectorAll('.counter-block-input')[1],
        places = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        usersumm = 0,
        dayssumm = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        usersumm = +this.value;
        total = (dayssumm + usersumm) * 4000;

        if (this.value == '' || isNaN(parseInt(this.value)) == true ||
            usersumm % 1 != 0 || dayssumm % 1 != 0 || usersumm <= 0 || dayssumm <= 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    days.addEventListener('change', function() {
        dayssumm = +this.value;
        total = (dayssumm + usersumm) * 4000;

        if (this.value == '' || isNaN(parseInt(this.value)) == true ||
            usersumm % 1 != 0 || dayssumm % 1 != 0 || usersumm <= 0 || dayssumm <= 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    places.addEventListener('change', function() {

        if (days.value == '' || isNaN(parseInt(days.value)) == true ||
            usersumm % 1 != 0 || persons.value == '' || isNaN(parseInt(days.value)) == true ||
            dayssumm % 1 != 0 || usersumm <= 0 || dayssumm <= 0) {
            totalValue.innerHTML = 0;
        } else {
            let allSum = total;
            totalValue.innerHTML = allSum * this.options[this.selectedIndex].value;
        }
    });


    input.addEventListener('input', function() {
        input.value = input.value.replace(/[^\d]/g, '');
    });

    input.addEventListener('input', function() {
        input.value = input.value.replace(/[^\d]/g, '');
    });


}

module.exports = calc;