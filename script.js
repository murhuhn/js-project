'use strict';


let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 18;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {

  return !isNaN(parseFloat(num)) && isFinite(num);
};


const asking = function () {
  title = prompt('Как называется ваш проект?', "Калькулятор верстки");
  screens = prompt('Какие типы экранов нужно разработать?', "Простые, cложные, интерактивные");

  do {
      screenPrice = Number(screenPrice = prompt('Сколько будет стоить данная работа?'));
  } while (!isNumber(screenPrice));

  adaptive = confirm('Нужен ли адаптив на сайте?');
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {

      if (i === 0) {
          service1 = prompt('Какой дополнительный тип услуги нужен?');
      } else if (i === 1) {
          service2 = prompt('Какой дополнительный тип услуги нужен?');
      }

      do {
          const servicePrice =  prompt("Сколько это будет стоить?");
          sum = Number(servicePrice);
      }
      while (!isNumber(sum));
      sum += sum;
  }
  return sum;
};


function getFullPrice(a, b) {
  return a + b;
};

const getTitle = function () {
  return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase()
};


const getServicePercentPrices = function (a, b) {
  return Math.ceil(a * (b / 100));
};


const showTypeOf = function (variable) {
  return typeof (variable, typeof variable);
};

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
};


asking();
title = getTitle();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(allServicePrices, screenPrice);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);



console.log(showTypeOf(title));
console.log(showTypeOf(screenPrice));
console.log(showTypeOf(adaptive));
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);