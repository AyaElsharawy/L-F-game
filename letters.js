
var toy1 = document.getElementById("toy1");
var toy2 = document.getElementById("toy2");
var toy3 = document.getElementById("toy3");
var toy4 = document.getElementById("toy4");
var msg = document.getElementById("msg");
var nxtbtn = document.getElementById("popup");
var bkbtn = document.getElementById("back");

var tryagain = new Audio();
var clap = new Audio();
tryagain.src="uhoh.mp3"
clap.src="Clap.mp3"

function wrong(){
    msg.innerHTML='Try Again, choose the Apple!!'
   tryagain.play();
}

function right(){
   msg.innerHTML='Great Job'
   clap.play();
   nxtbtn.style.display="block"
}
function msgout(){
   window.location.href="letters1.html";
}
function bkfun(){
   location.replace('start.html');
}

toy1.addEventListener('click',right)
toy2.addEventListener('click',wrong)
toy3.addEventListener('click',wrong)
toy4.addEventListener('click',wrong)
nxtbtn.addEventListener('click',msgout)
bkbtn.addEventListener('click',bkfun)
