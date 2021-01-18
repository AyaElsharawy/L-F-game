
var toy1 = document.getElementById("toy1");
var toy2 = document.getElementById("toy2");
var toy3 = document.getElementById("toy3");
var toy4 = document.getElementById("toy4");
var msg = document.getElementById("msg");



function fun(){
   msg.innerHTML='choose the Apple!!'
}

function wrong(){
    msg.innerHTML='Try Again, choose the Apple!!'
}

function right(){
    
   msg.innerHTML='Great Job'
}

toy1.addEventListener('click',right)
toy2.addEventListener('click',wrong)
toy3.addEventListener('click',wrong)
toy4.addEventListener('click',wrong)
