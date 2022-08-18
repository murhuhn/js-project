

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    rollback: 50,
    asking: function(){
                
            do {
                appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
            } while (appData.isNumber(appData.title));

          for (let i = 0; i < 2; i++){
            do {
                name = prompt('Какие типы экранов нужно разработать?');
            } while (appData.isNumber(name));
            
            let price; 
            do {
                price = +prompt('Сколько будет стоить данная работа?', '15000');
              } while (!appData.isNumber(price));
           appData.screens.push({id: i, name: name, price: price})
          }

          for (let i = 0; i < 2; i++) {
            do {
                 name = prompt('Какой дополнительный тип услуги нужен?');
            } while (appData.isNumber(name));
            
            let price;                                                                                  
            do {
                price = +prompt('Сколько это будет стоить?', '2000');
            } while (!appData.isNumber(price));

            appData.services[name] = +price
        }
          appData.adaptive = confirm('Нужен ли адаптив на сайте?', '')

          
    },
    
    //------------------------------------------------
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num) && num.length !== 0
    },
    //------------------------------------------------
    getAllServicePrices: function () {
        appData.screenPrice = appData.screens.reduce((sum, current) => sum + current.price, 0);
        for (let key in appData.services){
            appData.allServicePrices += appData.services[key];
        }
    },
    //---------------------------------------------
    getFullPrice: function () {
        appData.fullPrice =  appData.screenPrice + appData.allServicePrices
    },
    //---------------------------------------------
    getTitle: function () {   
        appData.title =  appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
      },
    //---------------------------------------------
    getServicePercentPrices: function () {
        appData.servicePercentPrice =  appData.fullPrice - (appData.fullPrice * appData.rollback / 100);
    },
    //---------------------------------------------
    getRollbackMessage: function() {
        switch (true) {
            case appData.servicePercentPrice >= 30000:                                              
                console.log("Даем скидку 10%");
                break;
            case appData.servicePercentPrice >= 15000:                                
                console.log("Даем скидку 5%");
                break;
            case appData.servicePercentPrice >= 0:                                   
                console.log("Скидка не предусмотрена");
                break;
            default:
                console.log("Что-то пошло не так");
                break;
        }
    },
    logger: function(){
       /* for (let key in appData){
            console.log("Ключ " + key + " " + "Значение " + appData[key]);
        }*/
        console.log(appData.screens);
        console.log(appData.services);
        console.log(appData.allServicePrices);
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);

    },
    start: function(){
       appData.asking();
        appData.getAllServicePrices();
       appData.getFullPrice();
       appData.getServicePercentPrices();
       appData.getTitle();
       appData.logger();   
    }
    
}

appData.start();



