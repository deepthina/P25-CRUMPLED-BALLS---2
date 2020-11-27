class DustBin {
    constructor(x, y,width,height) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, 50,10,options);
        this.image= loadImage("dustbingreen.png");
        this.x =x;
        this.y=y;
        this.width=width;
        this.height= height;
        World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
           	imageMode(CENTER);
			fill("white");
			image(this.image,0,0,this.width,this.height);
			pop();
    }

}                                                                                                                                                                                                 