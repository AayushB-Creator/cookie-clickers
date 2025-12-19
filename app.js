let cookieBtn = document.getElementById("cookie")
let counterDisplay = document.getElementById('counter')
let grandmotherBtn = document.getElementById('item-1')
let cpsDisplay= document.getElementById('cps')
let bakerBtn= document.getElementById('item-2')
let factoryBtn= document.getElementById('item-3')
let cookieCount =Number(localStorage.getItem('cookiecount'))
let cookiesPerSecond=Number(localStorage.getItem('cookiespersecond'))
cpsDisplay.innerText=`${cookiesPerSecond}/s`
counterDisplay.innerText= cookieCount
cookieBtn.addEventListener('click',function(){
    cookieCount++
    counterDisplay.innerText=cookieCount
})

grandmotherBtn.addEventListener('click',function(){
    if(cookieCount>=100){
        cookieCount-=100
        counterDisplay.innerText=cookieCount
        cookiesPerSecond = cookiesPerSecond+1
        cpsDisplay.innerText=`${cookiesPerSecond}/s`
    }else{
        alert('can not afford right now!')
    }
})

bakerBtn.addEventListener('click',function(){
    if(cookieCount>=500){
        cookieCount-=500
        counterDisplay.innerText=cookieCount
        cookiesPerSecond=cookiesPerSecond+10
        cpsDisplay.innerText=`${cookiesPerSecond}/s`
    }else{
        alert('can not afford right now!')
    }
})

factoryBtn.addEventListener('click',function(){
    if(cookieCount>=5000){
        cookieCount-=5000
        counterDisplay.innerText=cookieCount
        cookiesPerSecond+=100
        cpsDisplay.innerText=`${cookiesPerSecond}/s`
    }else{
        alert('can not afford right now!')
    }
})

setInterval(function(){
    cookieCount=cookieCount+cookiesPerSecond
    counterDisplay.innerText=cookieCount
    saveGame()
}, 1000);

function saveGame(){
    localStorage.setItem('cookiecount',cookieCount)

    localStorage.setItem('cookiespersecond',cookiesPerSecond)
}