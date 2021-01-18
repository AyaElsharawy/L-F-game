const obstaclesArray=[];

class Obstacle
    {
        constructor()
        {
            this.top=(Math.random() * canvas.height/3) +55;
            this.bottom=(Math.random() * canvas.height/3) +55;
            this.x = canvas.width;
            this.width= 20;
            this.color= 'hsla(' + hue + ',100%,50%,1)';
            this.counted = false;
        }
        draw()
        {
            ctx.fillStyle= this.color;
            ctx.fillRect(this.x,0,this.width,this.top);//draw the top
            //draw the bottom
            ctx.fillRect(this.x, canvas.height-this.bottom, this.width,this.bottom);
        }
        update()
        {
            this.x -= gamespeed;//move
            if(!this.counted && this.x<bird.x)
                { 
                    scor.play();
                    score++;
                    this.counted=true;
                }
            this.draw();
        }
    }
function handleObstacles()
{
    if(frame%50===0)//every 50 frame
        {
            obstaclesArray.unshift(new Obstacle);//add new element to array ane return length
        }
    for(let i=0; i<obstaclesArray.length;i++)
        {
            obstaclesArray[i].update();
        }
    if (obstaclesArray.length > 20)
        {
            obstaclesArray.pop(obstaclesArray[0]);
        }
}