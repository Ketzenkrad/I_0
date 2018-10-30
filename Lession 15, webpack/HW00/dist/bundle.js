/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.addEventListener('DOMContentLoaded', function() {\n\n    \"use strict\";\n    let tabs = __webpack_require__(/*! ./parts/tabs.js */ \"./src/parts/tabs.js\"),\n        form = __webpack_require__(/*! ./parts/form.js */ \"./src/parts/form.js\"),\n        slider = __webpack_require__(/*! ./parts/slider.js */ \"./src/parts/slider.js\"),\n        calc = __webpack_require__(/*! ./parts/calc.js */ \"./src/parts/calc.js\"),\n        modal = __webpack_require__(/*! ./parts/modal.js */ \"./src/parts/modal.js\"),\n        timer = __webpack_require__(/*! ./parts/timer.js */ \"./src/parts/timer.js\");\n    tabs();\n    form();\n    slider();\n    calc();\n    modal();\n    timer();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/parts/calc.js":
/*!***************************!*\
  !*** ./src/parts/calc.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function calc() {\n    let persons = document.querySelectorAll('.counter-block-input')[0],\n        days = document.querySelectorAll('.counter-block-input')[1],\n        places = document.getElementById('select'),\n        totalValue = document.getElementById('total'),\n        usersumm = 0,\n        dayssumm = 0,\n        total = 0;\n\n    totalValue.innerHTML = 0;\n\n    persons.addEventListener('change', function() {\n        usersumm = +this.value;\n        total = (dayssumm + usersumm) * 4000;\n\n        if (this.value == '' || isNaN(parseInt(this.value)) == true ||\n            usersumm % 1 != 0 || dayssumm % 1 != 0 || usersumm <= 0 || dayssumm <= 0) {\n            totalValue.innerHTML = 0;\n        } else {\n            let x = total;\n            totalValue.innerHTML = x * places.options[places.selectedIndex].value;\n        }\n    });\n\n    days.addEventListener('change', function() {\n        dayssumm = +this.value;\n        total = (dayssumm + usersumm) * 4000;\n\n        if (this.value == '' || isNaN(parseInt(this.value)) == true ||\n            usersumm % 1 != 0 || dayssumm % 1 != 0 || usersumm <= 0 || dayssumm <= 0) {\n            totalValue.innerHTML = 0;\n        } else {\n          let x = total;\n            totalValue.innerHTML = x * places.options[places.selectedIndex].value;\n        }\n    });\n\n    places.addEventListener('change', function() {\n\n        if (days.value == '' || isNaN(parseInt(days.value)) == true ||\n            usersumm % 1 != 0 || persons.value == '' || isNaN(parseInt(days.value)) == true ||\n            dayssumm % 1 != 0 || usersumm <= 0 || dayssumm <= 0) {\n            totalValue.innerHTML = 0;\n        } else {\n            let x = total;\n            totalValue.innerHTML = x * this.options[this.selectedIndex].value;\n        }\n    });\n\n\n    function numberblock(input) {\n        input.addEventListener('input', function() {\n            input.value = input.value.replace(/[^\\d]/g, '');\n            if (input.value.length > 2) input.value = input.value.slice(0, 2);\n        });\n    }\n\n    numberblock(persons);\n    numberblock(days);\n}\n\nmodule.exports = calc;\n\n//# sourceURL=webpack:///./src/parts/calc.js?");

/***/ }),

/***/ "./src/parts/form.js":
/*!***************************!*\
  !*** ./src/parts/form.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function form() {\n    let message = {\n        loading: 'Загрузка..',\n        success: 'Заявка отправлена.',\n        failure: 'Ошибка.'\n    };\n\n    let form = document.querySelector('.main-form'),\n        input = form.getElementsByTagName('input'),\n        statusMessage = document.createElement('div');\n\n         input[0].addEventListener('input', function () {\n    input[0].value = input[0].value.replace(/[^0-9+() ]/ig, '');\n  });\n\n    statusMessage.classList.add('status');\n\n\n    form.addEventListener('submit', function(event) {\n        event.preventDefault();\n        form.appendChild(statusMessage);\n\n        let request = new XMLHttpRequest();\n        request.open('POST', 'server.php');\n\n        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');\n        let formData = new FormData(form);\n        let simple = {};\n\n        formData.forEach(function(value, key) {\n            simple[key] = value;\n        });\n\n        let json = JSON.stringify(simple);\n\n        request.send(json);\n\n        request.addEventListener('readystatechange', function() {\n            if (request.readyState < 4) {\n                statusMessage.innerHTML = message.loading;\n            } else if (request.readyState === 4 && request.status == 200) {\n                statusMessage.innerHTML = message.success;\n            } else {\n                statusMessage.innerHTML = message.failure;\n            }\n        });\n        for (let counter = 0; counter < input.length; counter++) {\n            input[counter].value = '';\n        }\n    });\n\n\n    let contactsForm = document.querySelector('form'),\n        contactInput = contactsForm.querySelectorAll('input');\n        \n          contactInput[1].addEventListener('input', function () {\n            contactInput[1].value = contactInput[1].value.replace(/[^0-9+() ]/ig, '');\n         });\n\n\n\n\n    contactsForm.addEventListener('submit', function(event) {\n        event.preventDefault();\n        contactsForm.appendChild(statusMessage);\n\n        let request = new XMLHttpRequest();\n        request.open(\"POST\", 'server.php');\n        request.setRequestHeader(\"Content-Type\", \"application/x-www-form-urlencoded\");\n\n        let formData = new FormData(contactsForm);\n\n        request.send(formData);\n\n        request.onreadystatechange = function() {\n            if (request.readyState < 4) {\n                statusMessage.innerHTML = message.loading;\n            } else if (request.readyState === 4) {\n                if (request.status == 200 && request.status < 300) {\n                    statusMessage.innerHTML = message.success;\n                } else {\n                    statusMessage.innerHTML = message.failure;\n                };\n            };\n        };\n        for (let counter = 0; counter < contactsForm.length; counter++) {\n            contactsForm[counter].value = '';\n        }\n    });\n}\n\nmodule.exports = form;\n\n//# sourceURL=webpack:///./src/parts/form.js?");

/***/ }),

/***/ "./src/parts/modal.js":
/*!****************************!*\
  !*** ./src/parts/modal.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function modal() {\n    let more = document.querySelector('.more'),\n        overlay = document.querySelector('.overlay'),\n        close = document.querySelector('.popup-close'),\n        moreTab = document.querySelector('.description-btn');\n\n    more.addEventListener('click', function() {\n        overlay.style.display = 'block';\n        this.classList.add('more-splash');\n        document.body.style.overflow = 'hidden';\n    });\n\n    close.addEventListener('click', function() {\n        overlay.style.display = 'none';\n        more.classList.remove('more-splash');\n        document.body.style.overflow = '';\n    });\n\n    moreTab.addEventListener('click', function() {\n        this.classList.add('more-splash');\n        overlay.style.display = \"block\";\n        document.body.style.overflow = 'hidden';\n    });\n\n    let buttonMore = document.querySelectorAll('.description-btn');\n\n    for (let index = 0; index < buttonMore.length; index++) {\n        let buttons = buttonMore[index];\n        buttons.addEventListener('click', function(event) {\n            if (event.target && event.target.className == 'description-btn') {\n                event.target.classList.add('more-splash');\n                overlay.style.display = \"block\";\n                document.body.style.overflow = 'hidden';\n            }\n        });\n    }\n}\n\nmodule.exports = modal;\n\n//# sourceURL=webpack:///./src/parts/modal.js?");

/***/ }),

/***/ "./src/parts/slider.js":
/*!*****************************!*\
  !*** ./src/parts/slider.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function slider() {\nlet slideIndex = 1, \n    slides=document.querySelectorAll('.slider-item'),\n    prev = document.querySelector('.prev'),\n    next = document.querySelector('.next'),\n    dotsWrap = document.querySelector('.slider-dots') ,\n    dots = document.querySelectorAll('.dot');\n\n  showSlides (slideIndex);\n\n  function showSlides(n) {\n\n      if ( n > slides.length ) {  \n          slideIndex = 1;         \n      }\n\n      if ( n < 1 ){                    \n          slideIndex = slides.length;\n      }\n\n      slides.forEach ((item) => item.style.display = 'none');\n      dots.forEach ((item) => item.classList.remove('dot-active')); \n      slides[slideIndex - 1].style.display = 'block';\n      dots[slideIndex - 1].classList.add('dot-active'); \n\n  }\n\n  function plusSlides(n){          \n      showSlides(slideIndex += n);  \n  }\n\n   function currentSlide(n){       \n      showSlides(slideIndex = n);  \n  }\n\n  prev.addEventListener('click', function() {\n      plusSlides (-1);\n  });\n\n  next.addEventListener('click', function() {\n      plusSlides (1);\n  });\n\n  dotsWrap.addEventListener('click', function(event) {\n                                                      \n      for (let i=0; i < dots.length + 1; i++ ){       \n          if (event.target.classList.contains('dot') && event.target == dots[i-1]){\n              currentSlide(i);\n          }\n      }\n  });\n\n    \n}\n\nmodule.exports = slider;\n\n//# sourceURL=webpack:///./src/parts/slider.js?");

/***/ }),

/***/ "./src/parts/tabs.js":
/*!***************************!*\
  !*** ./src/parts/tabs.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function tabs(params) {\n    let tab = document.querySelectorAll('.info-header-tab'),\n        info = document.querySelector('.info-header'),\n        tabContent = document.querySelectorAll('.info-tabcontent');\n\n    function hideTabs(hide) {\n        for (let index = hide; index < tabContent.length; index++) {\n            tabContent[index].classList.remove('show');\n            tabContent[index].classList.add('hide');\n        }\n    }\n\n\n    hideTabs(1);\n\n    function showTabs(show) {\n\n        if (tabContent[show].classList.contains('hide')) {\n            tabContent[show].classList.remove('hide');\n            tabContent[show].classList.add('show');\n        }\n    }\n    info.addEventListener('click', function(event) {\n        let target = event.target;\n        if (target && target.classList.contains('info-header-tab')) {\n            for (let index = 0; index < tab.length; index++) {\n                if (target == tab[index]) {\n                    hideTabs(0);\n                    showTabs(index);\n                    break;\n                }\n            }\n        }\n    });\n}\n\nmodule.exports = tabs;\n\n//# sourceURL=webpack:///./src/parts/tabs.js?");

/***/ }),

/***/ "./src/parts/timer.js":
/*!****************************!*\
  !*** ./src/parts/timer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("    function timer() {\n        let deadline = '2018-10-22';\n\n        function getTimeRemaining(endtime) {\n\n            let t = Date.parse(endtime) - Date.parse(new Date()),\n\n                seconds = Math.floor((t / 1000) % 60),\n\n                minutes = Math.floor((t / 1000 / 60) % 60),\n\n                hours = Math.floor((t / (1000 * 60 * 60)));\n\n            return {\n                'total': t,\n                'hours': hours,\n                'minutes': minutes,\n                'seconds': seconds\n            };\n        }\n\n        function setClock(id, endtime) {\n\n            let timer = document.getElementById(id),\n                hours = timer.querySelector('.hours'),\n                minutes = timer.querySelector('.minutes'),\n                seconds = timer.querySelector('.seconds'),\n\n                timeInterval = setInterval(updateClock, 1000);\n\n            function updateClock() {\n                let t = getTimeRemaining(endtime);\n\n                hours.innerHTML = (t.hours < 10) ? '0' + t.hours : t.hours;\n                minutes.innerHTML = (t.minutes < 10) ? '0' + t.minutes : t.minutes;\n                seconds.innerHTML = (t.seconds < 10) ? '0' + t.seconds : t.seconds;\n\n                if (t.total <= 0) {\n                    clearInterval(timeInterval);\n                    hours.innerHTML = '00';\n                    minutes.innerHTML = '00';\n                    seconds.innerHTML = '00';\n                    console.log(\"End++\");\n                }\n            }\n        }\n\n        setClock('timer', deadline);\n    }\n\n    module.exports = timer;\n\n//# sourceURL=webpack:///./src/parts/timer.js?");

/***/ })

/******/ });