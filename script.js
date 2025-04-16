const header = document.querySelector('header');
const logo = document.querySelector('#logo');
const menu = document.querySelector('#menu');
const menuWindow = document.querySelector('#menu-attachment');
const inputWindow = document.getElementById('input-window');
const leadersWindow = document.querySelector('#leaders-window');

const slider = document.getElementById("amount");
const slider2 = document.getElementById("date");

const amountInput = document.getElementById("amount");
const dateInput = document.getElementById("date");
const amountValue = document.getElementById("amount-val");
const dateValue = document.getElementById("date-val");
const amountValueLower = document.getElementById("amount-val-lower");

var menuIsOpened = 0;

amountInput.addEventListener("input", () => {
    amountValue.textContent = Number(amountInput.value).toLocaleString('ru-RU') + '₽';
    amountValueLower.textContent = Number(amountInput.value).toLocaleString('ru-RU') + '₽';
});

dateInput.addEventListener("input", () => {
    dateValue.textContent = dateInput.value + ' дней';
    if (dateInput.value == 21) {
        dateValue.textContent = dateInput.value + ' день';
    }
});


menu.addEventListener('click', function() {
    if (menuIsOpened == 0) {
        menuWindow.style.top = '70px'
        inputWindow.style.animation = 'moveup 0.4s forwards'
        leadersWindow.style.animation = 'moveup-gain 0.4s forwards'
        inputWindow.style.top = '300px'
        menuIsOpened = 1
    }
    else if (menuIsOpened == 1) {
        menuWindow.style.top = '-250px'
        inputWindow.style.animation = 'movedown 0.4s forwards'
        leadersWindow.style.animation = 'movedown-gain 0.4s forwards'
        menuIsOpened = 0
    }
})

slider.addEventListener("input", function() {
  const value = this.value;
  const min = this.min;
  const max = this.max;
  const percentage = ((value - min) / (max - min)) * 100;

  this.style.background = `linear-gradient(to right, #e9820c 0%, #e99c0c ${percentage}%, rgb(12, 12, 14) ${percentage}%, rgb(12, 12, 14) 100%)`;
});

slider2.addEventListener("input", function() {
  const value = this.value;
  const min = this.min;
  const max = this.max;
  const percentage = ((value - min) / (max - min)) * 100;

  this.style.background = `linear-gradient(to right, #e9820c 0%, #e99c0c ${percentage}%, rgb(12, 12, 14) ${percentage}%, rgb(12, 12, 14) 100%)`;
});