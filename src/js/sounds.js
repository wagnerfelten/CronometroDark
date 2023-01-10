const tree = document.querySelector('.tree')
const rain = document.querySelector('.rain')
const fire = document.querySelector('.fire')
const house = document.querySelector('.house')

const audioRain = document.querySelector('.audioRain')
const audioFire = document.querySelector('.audioFire')
const audioHouse = document.querySelector('.audioHouse')
const audioTree = document.querySelector('.audioTree')

tree.addEventListener('click', function(){
    audioTree.play()   
})


rain.addEventListener('click', function() {
    audioRain.play()
})

fire.addEventListener('click', function(){  
    audioFire.play()
})

house.addEventListener('click', function (){
    audioHouse.play()
})



rain.addEventListener('dblclick', function(){
    audioRain.pause()
}) 
 
tree.addEventListener('dblclick', function(){
    audioTree.pause()   
})
fire.addEventListener('dblclick', function(){  
    audioFire.pause()
})

house.addEventListener('dblclick', function (){
    audioHouse.pause()
})

   
