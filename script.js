'use strict';

//3) Спрашиваем у пользователя “Как называется ваш проект?” и результат сохраняем в переменную title

let title = prompt('Как называется ваш проект?');

//4) Спросить у пользователя “Какие типы экранов нужно разработать?” сохранить в переменную screens (пример: "Простые, Сложные, Интерактивные")

let screens = prompt('Какие типы экранов нужно разработать?');

// 5) Спросить у пользователя “Сколько будет стоить данная работа?” и сохранить в переменную screenPrice (пример: 12000)
let screenPrice = prompt('Сколько будет стоить данная работа?');
screenPrice = parseFloat(screenPrice);
console.log(screenPrice);

let rollback = 18;

// 6) Спросить у пользователя “Нужен ли адаптив на сайте?” и сохранить данные в переменной adaptive (булево значение true/false)

let adaptive = confirm('Нужен ли адаптив на сайте?');

//7) Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 1. “Какой дополнительный тип услуги нужен?” (например service1, service2) 2. “Сколько это будет стоить?” (например servicePrice1, servicePrice2) в итоге 4 вопроса и 4 разные переменных, вопросы задаются в такой последовательности Название - Стоимость - Название - Стоимость

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
servicePrice1 = parseFloat(servicePrice1);
console.log(servicePrice1);
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = prompt('Сколько это будет стоить?');
servicePrice2 = parseFloat(servicePrice2);
console.log(servicePrice2);


//8) Вычислить итоговую стоимость работы учитывая стоимость верстки экранов и дополнительных услуг (screenPrice + servicePrice1 + servicePrice2) и результат занести в переменную fullPrice

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
if (fullPrice.isNaN) {
  console.log("Ошибка. Не числовое значение");
} else {
  console.log(fullPrice);
}

//9) Объявить переменную servicePercentPrice и занести в нее итоговую стоимость за вычетом отката посреднику (servicePercentPrice = fullPrice - Откат посреднику), округлив результат в большую сторону (методы объекта Math в помощь). Вывести servicePercentPrice в консоль.

let servicePercentPrice = Math.ceil(fullPrice * (rollback / 100));
console.log(servicePercentPrice);


//10) Написать конструкцию условий (расчеты приведены в рублях) (вывести в консоль)
if (fullPrice > 30000) {
  console.log('Даем скидку в 10%');
} else if (fullPrice >= 15000 && fullPrice <= 30000) {
  console.log('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice >= 0) {
  console.log('Скидка не предусмотрена');
} else {
  console.log('Что-то пошло не так');
}

// console.log(typeof title);
// console.log(typeof fullPrice);
// console.log(typeof adaptive);
// console.log(screens.length);
// console.log('Cтоимость вертски экранов ' + screenPrice + ' рублей/ долларов/гривен/юани');
// console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/ долларов/гривен/юани');
// screens = screens.toLowerCase();
// console.log(screens.split(', '));
// price = fullPrice * (rollback / 100);
// console.log('Процент отката посреднику за работу' + price);