const dark = document.querySelector('.dark');
const darkModel = document.querySelector('.darkModel')

const night = document.querySelector('.nigth')
const day = document.querySelector(".day")


const span = document.querySelector('span')
const body = document.querySelector('body');

const bt1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')


dark.addEventListener('click', () => {  
    body.style.backgroundColor = "black"
    span.style.color = 'white'
    bt1.style.backgroundColor = 'white'

    night.classList.remove('hide')
    day.classList.add('hide')

})


darkModel.addEventListener('click', () => {
    body.style.backgroundColor = "white"
    span.style.color = 'black'
    bt2.style.backgroundColor = 'black'


    night.classList.add('hide')
    day.classList.remove('hide')

    
})


