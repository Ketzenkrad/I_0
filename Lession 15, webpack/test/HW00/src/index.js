window.addEventListener('DOMContentLoaded', function() {

    "use strict";
    let tabs = require('./parts/tabs.js'),
        form = require('./parts/form.js'),
        slider = require('./parts/slider.js'),
        calc = require('./parts/calc.js'),
        modal = require('./parts/modal.js'),
        timer = require('./parts/timer.js');
    tabs();
    form();
    slider();
    calc();
    modal();
    timer();
});