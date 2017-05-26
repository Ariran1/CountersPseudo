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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CountersPseudo = function () {
    function CountersPseudo(options) {
        var _this = this;

        _classCallCheck(this, CountersPseudo);

        this.now();

        this.maxItems = 100;

        function getCookie(name) {
            var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }
        getCookie('CounterPseudo');

        this.items = this.startItems = getCookie('CounterPseudo') ? getCookie('CounterPseudo') : this.maxItems - this.hour * this.maxItems / 30;

        this.startProgressValue = this.items / this.startItems;

        this.progress();
        this.start();

        setInterval(function () {
            _this.now();
            _this.progress();
        }, 1000);

        this.__calculate();
    }

    _createClass(CountersPseudo, [{
        key: 'progress',
        value: function progress() {
            // 1 -> 0 

            this.progressValue = this.items / this.maxItems;
        }
    }, {
        key: '__calculate',
        value: function __calculate() {
            this.start();
            var intervalTime = Math.random() * 15e3;
            if (this.progressValue < 0.7) {
                intervalTime * 2;
            }
            if (this.progressValue < 0.5) {
                intervalTime * 4;
            }
            if (this.progressValue < 0.3) {
                intervalTime * 6;
            }

            switch (true) {
                case this.startProgressValue <= 1 && this.startProgressValue > 0.7:

                    clearTimeout(this.TimeOut);
                    this.TimeOut = setTimeout(function () {
                        this.items--;
                        this.__calculate();
                    }.bind(this), intervalTime);
                    break;

                case this.startProgressValue <= 0.7 && this.startProgressValue > 0.5:

                    clearTimeout(this.TimeOut);
                    this.TimeOut = setTimeout(function () {
                        this.items--;
                        this.__calculate();
                    }.bind(this), intervalTime * 4);
                    break;

                case this.startProgressValue <= 0.5 && this.startProgressValue > 0.2:

                    clearTimeout(this.TimeOut);
                    this.TimeOut = setTimeout(function () {
                        this.items--;
                        this.__calculate();
                    }.bind(this), intervalTime * 7);
                    break;
                case this.startProgressValue <= 0.2 && this.startProgressValue > 0.03:

                    intervalTime = Math.random() * 2e5 + 9e4; //ms

                    clearTimeout(this.TimeOut);
                    this.TimeOut = setTimeout(function () {
                        this.items--;
                        this.__calculate();
                    }.bind(this), intervalTime * 10);
                    break;

                default:
                    clearTimeout(this.TimeOut);
            }

            document.cookie = "CounterPseudo=" + Math.round(this.items) + "; expires=" + this.tomorrow.toUTCString() + "; path=/";
        }
    }, {
        key: 'start',
        value: function start() {

            var counters = document.querySelectorAll('[data-counterPseudo]');

            if (!counters) return;

            for (var i = 0; i < counters.length; i++) {

                var elements = counters[i].querySelectorAll('[data-counterPseudo-element]');

                for (var q = 0; q < elements.length; ++q) {
                    var elem = elements[q];
                    var counterType = elem.dataset.counterpseudoElement;
                    switch (counterType) {

                        case 'text':

                            this.text(elem);

                            break;

                        case 'progressLine':

                            this.progressLine(elem);

                            break;

                    }
                }
            }
        }
    }, {
        key: 'now',
        value: function now() {

            this.date = new Date();
            this.year = this.date.getFullYear();
            this.month = this.date.getMonth();
            this.day = this.date.getDate();
            this.hour = this.date.getHours();
            this.minutes = this.date.getMinutes();
            this.seconds = this.date.getSeconds();
            this.yesterday = new Date(this.year, this.month, this.day - 1);
            this.today = new Date(this.year, this.month, this.day);
            this.tomorrow = new Date(this.year, this.month, this.day + 1);
        }
    }, {
        key: 'progressLine',
        value: function progressLine(element) {
            var lineLength = 100 * this.progressValue;
            element.style.width = (lineLength < 4 ? 4 : 100 * this.progressValue) + '%';
        }
    }, {
        key: 'text',
        value: function text(element) {
            var items = Math.round(this.maxItems * this.progressValue);
            element.innerHTML = items < 3 ? 3 : items;
        }
    }]);

    return CountersPseudo;
}();

document.addEventListener('DOMContentLoaded', function () {
    new CountersPseudo();
});

/***/ })
/******/ ]);