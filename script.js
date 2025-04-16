const header = document.querySelector('header');
const logo = document.querySelector('#logo');
const menu = document.querySelector('#menu');
const menuWindow = document.querySelector('#menu-attachment');
const inputWindow = document.getElementById('input-window');
const leadersWindow = document.querySelector('#leaders-window');

var menuIsOpened = 0;


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