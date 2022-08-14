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
  screens: '',
  screenPrice: 0,
  adaptive: true,
  rollback: 18,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: '',
  service2: '',
  start: function () {
    appData.asking();
    appData.title = appData.getTitle();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice(appData.allServicePrices, appData.screenPrice);
    appData.servicePercentPrice = appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
    appData.logger();


    appData.logger();
  },
  isNumber: function (num) {

    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  asking: function () {
    appData.title = prompt('Как называется ваш проект?', "Калькулятор верстки");
    appData.screens = prompt('Какие типы экранов нужно разработать?', "Простые, cложные, интерактивные");
  
    do {
      appData.screenPrice = Number(appData.screenPrice = prompt('Сколько будет стоить данная работа?'));
    } while (!appData.isNumber(appData.screenPrice));
  
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },
  
  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
          appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 1) {
          appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
        }

        do {
            const servicePrice =  prompt("Сколько это будет стоить?");
            sum = Number(servicePrice);
        }
        while (!appData.isNumber(sum));
        sum += sum;
    }
    return sum;
  },
  getFullPrice: function(a, b) {
    return a + b;
  },
  getTitle: function () {
    return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
  },
  getServicePercentPrices: function (a, b) {
    return Math.ceil(a * (b / 100));
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
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
  }
};


appData.start();












