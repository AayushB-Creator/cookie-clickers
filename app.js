let cookieBtn = document.getElementById("cookie")
let counterDisplay = document.getElementById('counter')
let grandmotherBtn = document.getElementById('item-1')
let cpsDisplay= document.getElementById('cps')
let cookieCount =0
let cookiesPerSecond=0
counterDisplay.innerText= cookieCount
cookieBtn.addEventListener('click',function(){
    cookieCount++
    counterDisplay.innerText=cookieCount
})

grandmotherBtn.addEventListener('click',function(){
    cookiesPerSecond = cookiesPerSecond+1
    cpsDisplay.innerText=`${cookiesPerSecond}/s`
})

setInterval(function(){
    cookieCount=cookieCount+cookiesPerSecond
    counterDisplay.innerText=cookieCount
}, 1000);