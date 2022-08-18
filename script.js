'use strict';


// let title;
// let screens;
// let screenPrice;
// let adaptive;
// let rollback = 18;
// let allServicePrices;
// let fullPrice;
// let servicePercentPrice;
// let service1;
// let service2;

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