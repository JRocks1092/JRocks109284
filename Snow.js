class Snow{
    constructor(x, y){
        var options = {
            'friction' : 0.1,
           'isNonColliding' : true
           }

           
        this.rand = Math.round(random(1,2));

        this.x = x;
        this.y = y;
        this.body = Matter.Bodies.circle(x, y, 2.5, options);
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
        }

    display(){

        var pos = this.body.position;
        //fill("blue");        
        imageMode(CENTER);
        image(this.image, pos.x,pos.y, 50, 50);
        
        //ellipseMode(CENTER);
        //ellipse(pos.x, pos.y, 5, 5);

        if(this.rand===1){

            Matter.Body.setVelocity(this.body, {x:-0.5, y:this.body.velocity.y});

        }else{

            Matter.Body.setVelocity(this.body, {x:0.5, y:this.body.velocity.y});

        }
                
        if(this.body.position.x > 825){
            Matter.Body.setPosition(this.body, {x:-25, y:this.body.position.y})
        }
        if(this.body.position.x < -25){
            Matter.Body.setPosition(this.body, {x:825, y:this.body.position.y})
        }
        if(this.body.position.y > 425){
            Matter.Body.setPosition(this.body, {x:this.body.position.x, y:-25});
        }                
        if(this.body.velocity.y>0.5){
            Matter.Body.setVelocity(this.body, {x:this.body.velocity.x, y:0.5});
        }
    }
}