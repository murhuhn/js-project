'use strict';


let title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?');
const screenPrice = parseFloat(prompt('Сколько будет стоить данная работа?'));
const rollback = 18;
const adaptive = confirm('Нужен ли адаптив на сайте?');
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = parseFloat(prompt('Сколько это будет стоить?'));
const servicePrice2 = parseFloat(prompt('Сколько это будет стоить?'));
const service2 = prompt('Какой дополнительный тип услуги нужен?');


// if (fullPrice.isNaN) {
//   console.log("Ошибка. Не числовое значение");
// } else {
//   console.log(fullPrice);
// }


const getAllServicePrices = function (a, b) {
  return a + b;
};


function getFullPrice(a, b) {
  return a + b;
}

const getTitle = function () {
  return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase()
};


const getServicePercentPrices = function (a, b) {
  return Math.ceil(a * (b / 100));
};


const showTypeOf = function (variable) {
  return typeof (variable, typeof variable);
}

const getRollbackMessage = function (a) {
  if (a > 30000) {
    return 'Даем скидку в 10%';
  } else if (a >= 15000 && a <= 30000) {
    return 'Даем скидку в 5%';
  } else if (a < 15000 && a >= 0) {
    return 'Скидка не предусмотрена';
  } else {
    return 'Что-то пошло не так';
  }
}

const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
const fullPrice = getFullPrice(allServicePrices, screenPrice);
const servicePercentPrice = getServicePercentPrices(fullPrice, rollback)
title = getTitle();



console.log(showTypeOf(title));
console.log(showTypeOf(screenPrice));
console.log(showTypeOf(adaptive));
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);


