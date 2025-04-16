const sendButton = document.querySelector('#send')
const content = document.querySelector('#content')
const cloud = document.querySelector('#cloud')
const box = document.querySelector('#box')

sendButton.setAttribute('onclick', 'send()')

function send() {
    content.style.animation = 'remove 0.5s forwards';
    box.style.animation = 'removebox 0.5s forwards'
    
    setTimeout(() => {
        window.location.href = 'send.html'
    }, 700);
}