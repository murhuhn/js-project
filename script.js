let title = 'Второе задание';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 30;
let rollback = 18;
let fullPrice = 50;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log('Cтоимость вертски экранов ' + screenPrice + ' рублей/ долларов/гривен/юани');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/ долларов/гривен/юани');
screens = screens.toLowerCase();
console.log(screens.split(', '));
price = fullPrice * (rollback / 100);
console.log('Процент отката посреднику за работу' + price);