'use strict';
class CountersPseudo {
    constructor(options) {
        this.now();

        this.maxItems = 100;

        function getCookie(name) {
          var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
          ));
          return matches ? decodeURIComponent(matches[1]) : undefined;
        }
        getCookie('CounterPseudo');

        this.items = this.startItems = getCookie('CounterPseudo') ? getCookie('CounterPseudo') : this.maxItems - this.hour * this.maxItems/30;

        this.startProgressValue = this.items / this.startItems;

        this.progress();
        this.start();

        setInterval(() =>{
            this.now();
            this.progress();
        },1000);

        this.__calculate();


    }

    progress() {
        // 1 -> 0 

        this.progressValue = this.items / this.maxItems;

    }

    __calculate() {
        this.start();
        let intervalTime = Math.random() * 15e3;
        if (this.progressValue < 0.5) intervalTime * 1.3;

        switch (true) {
            case (this.startProgressValue <= 1 && this.startProgressValue > 0.7):

                    clearTimeout(this.TimeOut);
                    this.TimeOut = setTimeout(function() {
                        this.items--;
                        this.__calculate();
                    }.bind(this),intervalTime);
                break;

            case (this.startProgressValue <= 0.7 && this.startProgressValue > 0.5):

                    clearTimeout(this.TimeOut);
                    this.TimeOut = setTimeout(function() {
                        this.items--;
                        this.__calculate();
                    }.bind(this),intervalTime * 4);
                break;

            case (this.startProgressValue <= 0.5 && this.startProgressValue > 0.2):


                    clearTimeout(this.TimeOut);
                    this.TimeOut = setTimeout(function() {
                        this.items--;
                        this.__calculate();
                    }.bind(this),intervalTime * 15);
                break;
            case (this.startProgressValue <= 0.2 && this.startProgressValue > 0.03):

                    intervalTime = Math.random() * 2e5 + 9e4; //ms

                    clearTimeout(this.TimeOut);
                    this.TimeOut = setTimeout(function() {
                        this.items--;
                        this.__calculate();
                    }.bind(this),intervalTime * 25);
                break;

            default: clearTimeout(this.TimeOut);
        }

        document.cookie = "CounterPseudo="+Math.round(this.items)+"; expires="+this.tomorrow.toUTCString()+"; path=/";
    }

    start() {

        let counters = document.querySelectorAll('[data-counterPseudo]');

        if (!counters) return;

        for (var i = 0; i < counters.length; i++) {

            let elements = counters[i].querySelectorAll('[data-counterPseudo-element]');

            for (var q = 0; q < elements.length; ++q) {
                let elem = elements[q];
                let counterType = elem.dataset.counterpseudoElement;
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

    now() {

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


    progressLine(element) {
        let lineLength = 100 * this.progressValue;
        element.style.width = (lineLength < 4 ? 4 : 100 * this.progressValue) + '%';
    }

    text(element) {
        let items = Math.round(this.maxItems * this.progressValue);
        element.innerHTML = items < 21? 21 : items;
    }


}
document.addEventListener('DOMContentLoaded',()=>{
    new CountersPseudo();
});



