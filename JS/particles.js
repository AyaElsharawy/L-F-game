 const particledArray= [];

class Particles
    {
        constructor()
        {
            this.x=bird.x;
            this.y=bird.y;
            this.size=Math.random()*7 + 3 ; //random from 3 to 10 
            this.speedY=(Math.random()*1)- 0.5;
            this.color ='hsla(' + hue + ',100%,50%,0.8)' ;
        }
        update()
        {
            this.x -= gamespeed;
            this.y += this.speedY;
        }
        draw() 
        {
            ctx.fillStyle=this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0 , Math.PI*2);
            ctx.fill();
        }
    }
function handelParticles()
{
    particledArray.unshift(new Particles);
    for(i=0;i<particledArray.length;i++)
        {
            particledArray[i].update();
            particledArray[i].draw();
        }
    //if more than 200 , remove 20
    if(particledArray.length >200)
        {
            for(let i =0;i<20;i++)
                {
                    particledArray.pop(particledArray[i]);
                }
        }
}