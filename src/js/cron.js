let displaySpan = document.querySelector('span')

let seconds = 60;

var tempo = 1000;

var cron;

const displayPlay = document.querySelector('.play')
const displayStop = document.querySelector('.stop')


function start() { 
    
    cron = setInterval(() => {timer();}, tempo);

    newMinutes()
}

function stop(){
    clearInterval(cron)

    console.log("funcionou2")
}

function incrementMin(){
    minutes + 5

    console.log('diminuiu')
}

const newMinutes = () => {
    let newMinutes = Number(prompt('Quantos minutos?'))

    minutes = newMinutes

}  



const timer = () => {
    seconds--;

    if(seconds == 0){
        seconds = 60
        --minutes
    }
    
    if(minutes <= 0 && minutes == 0){
       clearInterval(cron) 
       seconds = 0
    }

    let format =   (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
    displaySpan.innerText = format

    console.log("funcionou")

    return teste;
}