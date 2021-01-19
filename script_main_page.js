var character = document.querySelector(".character");
var map = document.querySelector(".map");
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
const number= document.querySelector('.popup-number');
const close_num = document.querySelector('.number-close');
const letter= document.querySelector('.popup-letter');
const close_let = document.querySelector('.letter-close');
const game= document.querySelector('.popup-game');
const close_game = document.querySelector('.game-close');
var over=new Audio();
over.src ="sounds/uhoh.mp3";
//start in the middle of the map
var x = 100;
var y = 32;
var held_directions = []; //State of which arrow keys we are holding down
var speed = 1; //How fast the character moves in pixels per frame

const placeCharacter = () => {
   
   var pixelSize = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
   );
   
   const held_direction = held_directions[0];
   if (held_direction) {
      if (held_direction === directions.right) {x += speed;}
      if (held_direction === directions.left) {x -= speed;}
      if (held_direction === directions.down) {y += speed;}
      if (held_direction === directions.up) {y -= speed;}
      character.setAttribute("facing", held_direction);
   }
   character.setAttribute("walking", held_direction ? "true" : "false");
   
   //Limits (gives the illusion of walls)
   var leftLimit = 32;
   var rightLimit = (16 * 11)+8;
   var topLimit = -8+ 32;
   var bottomLimit = (16 * 5);
    var x_position = character.getBoundingClientRect();
   // console.log('bottom',x_position.x.toFixed(0));
   // console.log('top',x_position.y.toFixed(0));
   // console.log('left',x_position.left.toFixed(0));
   // console.log("right",x_position.right.toFixed(0));
   if (x < leftLimit) { x = leftLimit;}
   if (x > rightLimit) { x = rightLimit; }
   if (y < topLimit) { y = topLimit; }
   if (y > bottomLimit) { y = bottomLimit; } 
    console.log(x);
    console.log(y);
   if (x>=-8 && x<=55 && y>=30 && y<80){  x = 50;  y = 30; over.play(); }
   if (x==65 && y==24 || x==70 && y==24 ){popup.style.display='block';}
   if (x!=65 && y!=24 || x!=70 && y!=24 ){popup.style.display='none';}
   if (x==135 && y==24){number.style.display='block';}
   if (x!=135 && y!=24){number.style.display='none';}
   if (x==97 && y==74 || x==89 && y==74 ){letter.style.display='block';}
   if (x!=97 && y!=74 || x!=89 && y!=74 ){letter.style.display='none';}
   if (x==164 && y==74 ||x==157 && y==74 ){game.style.display='block';}
   if (x!=164 && y!=74 ||x!=157 && y!=74){game.style.display='none';}
   var camera_left = pixelSize * 66;
   var camera_top = pixelSize * 42;
   
   map.style.transform = `translate3d( ${-x*pixelSize+camera_left}px, ${-y*pixelSize+camera_top}px, 0 )`;
   character.style.transform = `translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0 )`;  
}


//Set up the game loop
const step = () => {
   placeCharacter();
   window.requestAnimationFrame(() => {
      step();
   })
    close.addEventListener('click', () =>{
    popup.style.display='none';
});
    close_num.addEventListener('click', () =>{
    number.style.display='none';
});
    close_let.addEventListener('click', () =>{
    letter.style.display='none';
});
    close_game.addEventListener('click', () =>{
    game.style.display='none';
});
}
step(); //kick off the first step!
/* Direction key state */
const directions = {
   up: "up",
   down: "down",
   left: "left",
   right: "right",
}
const keys = {
   38: directions.up,
   37: directions.left,
   39: directions.right,
   40: directions.down,
}
document.addEventListener("keydown", (e) => {
   var dir = keys[e.which];
   if (dir && held_directions.indexOf(dir) === -1) {
      held_directions.unshift(dir)
   }
    var x_po = e.clientX;
    var y_po = e.clientY;
    console.log(x_po);
    console.log(y_po);
});

document.addEventListener("keyup", (e) => {
   var dir = keys[e.which];
   var index = held_directions.indexOf(dir);
   if (index > -1) {
      held_directions.splice(index, 1)
   }
    console.log(e.clientX);
    console.log(e.clientY);
});



