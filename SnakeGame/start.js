var one = new Audio("sounds/1.mp3");
var two = new Audio();
var three = new Audio();
var four = new Audio();
var five = new Audio();
var six= new Audio();
var seven = new Audio();
var eight = new Audio();
var nine= new Audio();
var ten= new Audio();

one.src="sounds/1.mp3"
two.src="sounds/2.mp3"
three.src="sounds/3.mp3"   
four.src="sounds/4.mp3"    
five.src="sounds/5.mp3"
six.src="sounds/6.mp3"      
seven.src="sounds/7.mp3"          
eight.src="sounds/8.mp3" 
nine.src="sounds/9.mp3"    
ten.src="sounds/10.mp3"
     



var q = document.getElementById("one");
q.addEventListener('click',function(e)
{one.play();  }
);

var w = document.getElementById("two");
w.addEventListener('click',function(e)
{two.play();  });

var e = document.getElementById("three");
e.addEventListener('click',function(e)
{three.play();  });

var r = document.getElementById("four");
r.addEventListener('click',function(e)
{four.play();  });

var t = document.getElementById("five");
t.addEventListener('click',function(e)
{five.play();  });

var y = document.getElementById("six");
y.addEventListener('click',function(e)
{six.play();  });

var u = document.getElementById("seven");
u.addEventListener('click',function(e)
{seven.play();  });

var i = document.getElementById("eight");
i.addEventListener('click',function(e)
{eight.play();  });

var o = document.getElementById("nine");
o.addEventListener('click',function(e)
{nine.play();  });

var p = document.getElementById("ten");
p.addEventListener('click',function(e)
{ten.play();  });


