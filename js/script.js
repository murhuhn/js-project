'use strict';
const title = document.getElementsByTagName('h1')[0];
const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.percent');
const otherItemsNumber = document.querySelectorAll('.number');
const inputRollback = document.querySelector('.rollback');
const inputRange = document.querySelector('.rollback > .main-controls__range > input');
const rangeValue = document.querySelector('.rollback > .main-controls__range> .range-value');

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];
let screens = document.querySelectorAll('.screen');

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  count: 0,
  rollback: 18,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  init: function () {
    this.addTitle();

    startBtn.addEventListener('click', this.start.bind(this));
    buttonPlus.addEventListener('click', this.addScreenBlock.bind(this));
    inputRange.addEventListener('input', (event) => {
      this.rollback = event.target.value;
      rangeValue.textContent = event.target.value + '%';
    });
    resetBtn.addEventListener('click', this.reset.bind(this));
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    this.addScreens();
    this.addServices();
    this.addPrices();
    //this.logger
    let checkScreens = true;
    this.screens.forEach((item) => {
      if (item.name === 'Тип экранов' || item.count === '' || parseInt(item.count) < 1) {
        checkScreens = false;
        this.screens = [];
      }
    });
    if (checkScreens) {
      this.disable();
      this.showResult();
    }
  },
  reset: function () {
    this.delScreens();
    this.delServices();
    this.delPrices();
    this.resetDisable();

  },
  showResult: function () {
    total.value = this.screenPrice;
    totalCount.value = this.count;
    totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
  },
  disable: function () {
    screens = document.querySelectorAll('.screen');
    screens.forEach((screen) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      select.disabled = true;
      input.disabled = true;
      buttonPlus.disabled = true;
      startBtn.style.display = 'none';
      resetBtn.style.display = 'block';
    });
  },
  resetDisable: function () {
    screens = document.querySelectorAll('.screen');
    screens.forEach((screen) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      select.disabled = false;
      input.disabled = false;
      buttonPlus.disabled = false;
      startBtn.style.display = 'block';
      resetBtn.style.display = 'none';
    });
  },
  addScreens: function () {
    screens = document.querySelectorAll('.screen');
    screens.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;

      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value
      });
    });
  },
  delScreens() {
    screens.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      if (index) {
        screen.remove();
      } else {
        select.selectedIndex = 0;
        input.value = '';
      }
    });
    this.screens.length = 0;

  },
  addServices: function () {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });

  },
  delServices() {
    const clear = (item) => {
      const check = item.querySelector('input[type=checkbox]');
      check.checked = false;
    };
    otherItemsPercent.forEach((item) => clear(item));
    otherItemsNumber.forEach((item) => clear(item));

    this.servicesPercent.length = 0;
    this.servicesNumber.length = 0;
  },
  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },
  addPrices: function () {
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
    }

    for (let screen of this.screens) {
      this.count += +screen.count;
    }

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }

    for (let key in this.servicesPercent) {
      this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
    }

    this.fullPrice = +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;
    this.servicePercentPrice = this.fullPrice - (this.fullPrice * (+this.rollback / 100));
  },
  delPrices() {
    this.screenPrice = 0;
    this.count = 0;
    this.servicePricesPercent = 0;
    this.servicePricesNumber = 0;
    this.fullPrice = 0;
    this.servicePercentPrice = 0;
    this.rollback = 0;
    total.value = 0;
    totalCount.value = 0;
    totalCountOther.value = 0;
    fullTotalCount.value = 0;
    totalCountRollback.value = 0;
    inputRange.value = 0;
    rangeValue.textContent = 0 + '%';

  },
  logger: function () {
    for (let key in this) {
      console.log("Ключ: " + key + "; " + "Значение: " + this[key]);
    }
  }

};

appData.init();