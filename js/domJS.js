// Query all tag in HTML
// let messages = document.querySelectorAll('.message')
// messages.forEach(message => {

//     message.innerHTML = "Don't GO BABE"
// })


// Chosen on HTML ID
// let message = document.querySelector('#message-2')
let body = document.body
let spoilBtn = document.querySelector('#dark-btn')
// message.innerHTML = "Don't GO BABE"
// message.style.color = 'red'
// message.style.backgroundColor = 'black'
// message.style.fontSize = '15px'

// spoilBtn.addEventListener( 'click', () => {
//     if (message.style.display === 'none') {
//         message.style.display = 'block'
//     }else{
//         message.style.display = 'none'
//     }
// })


// message.classList.replace('orange-box', 'green-box')

///////// DARK THEME ///////////////
spoilBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme')
    spoilBtn.classList.toggle('dark-theme')
    alert('Dark Theme Activated');
})


/// WARNING
// let message = document.querySelector('.message')
// message.innerHTML = "Don't GO BABE"


