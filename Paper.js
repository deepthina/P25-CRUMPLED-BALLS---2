class Paper {
    constructor(x, y, diameter) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density:  0.6

        }

        
        this.x =x;
        this.y=y;
        this.diameter = diameter;
        this.image= loadImage("paper.png");
        this.body = Bodies.circle(x, y, (this.diameter-20)/2,options);
     
      
        World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;

             push();
			translate(pos.x, pos.y);
			imageMode(CENTER);
			strokeWeight(3);
			fill(255,0,255);
			image(this.image,0,0,this.diameter,this.diameter);
			pop();
    }



} 