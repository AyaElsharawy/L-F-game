const canvas= document.getElementById('canves1');
const ctx=canvas.getContext('2d');
canvas.width=600;
canvas.height=400;
 
let spacePressed= false;
let angle=0;
let hue=0;
let frame=0;
let score=0;
let gamespeed=2;

const gradient = ctx.createLinearGradient(0, 0, 0, 70);
gradient.addColorStop('0.4','#fff');
gradient.addColorStop('0.5','#ffff00');
gradient.addColorStop('0.55','#ffa500');
gradient.addColorStop('0.6','#adff2f');
gradient.addColorStop('0.9','#ff8c00');
gradient.addColorStop('0.9','#ffff00');

var fly = new Audio();
var scor = new Audio();
var over=new Audio();

fly.src ="sound/fly.mp3";
scor.src ="sound/score.mp3";
over.src="sound/Game_Over.mp3";

function animate()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleObstacles();
    handelParticles();
    bird.update();
    bird.draw();
    ctx.fillStyle = gradient;
    ctx.font="90px Georgia";
    ctx.strokeText(score,450,70);
    ctx.fillText(score,450,70);
    handleCollisions();
    if(handleCollisions()) return;
    requestAnimationFrame(animate);
    angle+=0.20;//speed of curve move
    hue++;
    frame++;
}
animate();


window.addEventListener('keydown', function(e)
{
    if(e.code === 'Space') spacePressed=true;
    fly.play();
});
window.addEventListener('keyup', function(e)
{
    if(e.code === 'Space') spacePressed=false;
    
});
const bang = new Image();
bang.src = 'css/image/bang.png';
function handleCollisions()
{
    for(let i=0;i<obstaclesArray.length;i++)
        {
            if(bird.x < obstaclesArray[i].x + obstaclesArray[i].width && 
                bird.x + bird.width > obstaclesArray[i].x && 
               ((bird.y < 0 + obstaclesArray[i].top &&  bird.y +bird.height > 0)||
               (bird.y > canvas.height - obstaclesArray[i].bottom && 
                bird.y +bird.height < canvas.height)))
                {
                    //collision detected
                    ctx.drawImage(bang, bird.x, bird.y , 50, 50);
                    ctx.font= "25px Georgia";
                    ctx.fillStyle = 'black';
                    ctx.fillText('Game Over, your score is ' + score, 160, canvas.height/2 -10);
                    over.play();
                    return true;
                    
                }
        }
}