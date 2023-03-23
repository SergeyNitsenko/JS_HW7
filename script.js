'use strict';

{
    let Car = function () {
        
        this.choice = function () {
            this.brand = prompt('Какая марка авто вам больше нравится? \nBMW \nMercedes\nTesla');
            this.brandFuel = confirm('Вы любите быстрые авто?');
            this.distance = +prompt('Как далеко вы собрались (км) ?')
            this.fuel();
        };

        this.fuel = function () {
            if (this.brandFuel) {
                switch (this.brand) {
                    case 'BMW':
                        this.result = 17 * this.distance / 100;
                        this.resultCash = Math.ceil(this.result * 2.65);
                        alert(`Вам понадобится ${this.result} литров бензина и всего лишь ${this.resultCash} наших рубликов!`);
                        break;
                    case 'Mercedes':
                        this.result = 16 * this.distance / 100;
                        this.resultCash = Math.ceil(this.result * 2.65);
                        alert(`Вам понадобится ${this.result} литров бензина и всего лишь ${this.resultCash} наших рубликов!`);
                        break;
                    case 'Tesla':
                        alert('Вам понадобится лишь сигаретка!)');
                        break;
                    default: this.result = alert('Давайте не будем тратить время и выберем авто мечты!)'); return this.choice();
                }
            } else {
                switch (this.brand) {
                    case 'BMW':
                        this.result = 13 * this.distance / 100;
                        this.resultCash = Math.ceil(this.result * 2.65);
                        alert(`Вам понадобится ${this.result} литров бензина и всего лишь ${this.resultCash} наших рубликов!`);
                        break;
                    case 'Mercedes':
                        this.result = 11 * this.distance / 100;
                        this.resultCash = Math.ceil(this.result * 2.65);
                        alert(`Вам понадобится ${this.result} литров бензина и всего лишь ${this.resultCash} наших рубликов!`);
                        break;
                    case 'Tesla':
                        alert('Вам понадобится лишь сигаретка!)');
                        break;
                    default: this.result = alert('Давайте не будем тратить время и выберем авто мечты!)'); return this.choice();
                }
            }
            this.show();
        }
        this.show = function () {
            this.journey = alert('Не забудьте пристегнуться и вернуть автомобиль!!!')
        }
    }



    let cars = new Car();
    cars.choice();

}
