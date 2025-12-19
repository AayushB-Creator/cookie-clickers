let cookieBtn = document.getElementById("cookie")
let counterDisplay = document.getElementById('counter')
let grandmotherBtn = document.getElementById('item-1')

let cookieCount =0
counterDisplay.innerText= cookieCount
cookieBtn.addEventListener('click',function(){
    cookieCount++
    counterDisplay.innerText=cookieCount
})
setInterval(function(){
    cookieCount=cookieCount+0
    counterDisplay.innerText=cookieCount
}, 1000);