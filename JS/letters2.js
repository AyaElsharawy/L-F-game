
var toy1 = document.getElementById("toy1");
var toy2 = document.getElementById("toy2");
var toy3 = document.getElementById("toy3");
var toy4 = document.getElementById("toy4");
var msg = document.getElementById("msg");
var nxtbtn = document.getElementById("popup");
var bkbtn = document.getElementById("back");

var tryagain = new Audio();
var clap = new Audio();
tryagain.src="sounds/uhoh.mp3"
clap.src="sounds/Clap.mp3"


   function wrong(){
      msg.innerHTML='Try Again, choose the Cat!!'
      tryagain.play();
  }
  
  function right(){
     msg.innerHTML='Great Job'
     clap.play();
  }
  function bkfun(){
   location.replace('letters1.html');
   }
  toy1.addEventListener('click',wrong)
  toy2.addEventListener('click',right)
  toy3.addEventListener('click',wrong)
  toy4.addEventListener('click',wrong)
  bkbtn.addEventListener('click',bkfun)

  
