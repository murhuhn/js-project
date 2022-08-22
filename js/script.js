'use strict';
const title = document.getElementsByTagName('h1')
const calcBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]
const screenBtn = document.querySelector('.screen-btn')
const otherItemsPercent = document.querySelectorAll('.percent')
const otherItemsNumber = document.querySelectorAll('.number')
const inputRollback = document.querySelector('.rollback')
const inputRange = document.querySelector('.rollback > .main-controls__range > input')
const rangeValue = document.querySelector('.rollback > .main-controls__range> .range-value')
const layoutPrice = document.getElementsByClassName("total-input")[0]
const numberOfScreens = document.getElementsByClassName("total-input")[1]
const additionalServicesPrice = document.getElementsByClassName("total-input")[2]
const totalPrice = document.getElementsByClassName("total-input")[3]
const priceWithRollback = document.getElementsByClassName("total-input")[4]
let screenBlock = document.querySelectorAll('.screen')


console.log(title[0].textContent);
console.log(handlerBtn);
console.log(screenBtn);
console.log(otherItemsPercent);
console.log(otherItemsNumber);
console.log(inputRollback);
console.log(inputRange);
console.log(rangeValue);

for (let i = 0; i < totalInputs.length; i++) {
    console.log(totalInputs[i]);
}

console.log(screenBlock);

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 18,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getTitle();
    appData.getFullPrice(appData.allServicePrices, appData.screenPrice);
    appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
    appData.logger();
  },
  isNumber: function (num) {

    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  asking: function () {
    do {
      appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
    } while (appData.isNumber(appData.title));

    for (let i = 0; i < 2; i++) {

      let name;
      let price = 0;

      do {
        name = prompt('Какие типы экранов нужно разработать?');
      } while (appData.isNumber(name));


      do {
        price = prompt("Сколько это будет стоить?");
      }
      while (!appData.isNumber(price));

      appData.screens.push({
        id: i,
        name: name,
        price: price
      });

    }
    for (let i = 0; i < 2; i++) {

      let name;
      let price = 0;

      do {
        name = prompt('Какой дополнительный тип услуги нужен?');
      } while (appData.isNumber(name));

      do {
        price = prompt("Сколько это будет стоить?");
      }
      while (!appData.isNumber(price));

      appData.services[name] = +price;

    }

    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }


    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },
  getFullPrice: function (a, b) {
    appData.fullPrice = a + b;
  },
  getTitle: function () {
    appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
  },
  getServicePercentPrices: function (a, b) {
    appData.servicePercentPrice = Math.ceil(a * (b / 100));
  },
  getRollbackMessage: function (a) {
    if (a > 30000) {
      return 'Даем скидку в 10%';
    } else if (a >= 15000 && a <= 30000) {
      return 'Даем скидку в 5%';
    } else if (a < 15000 && a >= 0) {
      return 'Скидка не предусмотрена';
    } else {
      return 'Что-то пошло не так';
    }
  },
  logger: function () {
    for (let key in appData) {
      console.log("Ключ: " + key + "; " + "Значение: " + appData[key]);
    }
  }

};


appData.start();
