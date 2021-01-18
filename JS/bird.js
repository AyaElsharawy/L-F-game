class Bird
    {
        constructor()
        {
            this.x =150;
            this.y = 200;
            this.vy=0; //vertical speed
            this.width=25;
            this.height=25;
            this.weight =1; 
        }
        update()
        {
            let curve=Math.sin(angle) *20;//not be stop at the ground move in curve
            if(this.y>canvas.height - (this.height *3)+curve)//move till ground only
                {
                    this.y=canvas.height-(this.height*3)+curve;
                    this.vy=0;
                }
            else
                {
                    this.vy+= this.weight;
                    this.vy *= 0.1;//to fast move
                    this.y+=this.vy;
                }
            if(this.y<0+this.height)
                {
                    this.y=0+this.height;//to be bounded from up
                    this.vy=0;
                }
            if (spacePressed && this.y>this.height*3) this.flap();//move up
            this.vy+=this.weight;
            this.y+=this.vy
        }
        draw()
        {
           // ctx.fillStyle='red';
            //ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.drawImage(bird_image, this.x, this.y, this.width, this.height)
        }
        flap()
        {
            this.vy -= 2;
        }
    }
const bird=new Bird();
const bird_image=new Image();
bird_image.src ='CSS/image/bird.png'
