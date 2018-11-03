window.addEventListener('DOMContentLoaded', function() {

    let tabBlock = require('./parts/tabBlock.js');
    let calculate = require('./parts/calculate.js');
    let modals = require('./parts/modals.js');
    let ourworks = require('./parts/ourworks.js');
    let submit = require('./parts/submit.js');
    let tabLinks = require('./parts/tabLinks.js');
    let timer = require('./parts/timer.js');

    tabBlock();
    calculate();
    modals();
    ourworks();
    submit();
    tabLinks();
    timer();

});