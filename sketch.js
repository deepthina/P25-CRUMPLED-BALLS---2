
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbinLeft, dutbinBottom, dustbinRight;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(30, 480, 70);

	ground = new Ground(400, 680, 800, 10);

	dustbinLeft = new DustBin(485, 600, 10, 60);
	dutbinBottom = new DustBin(540, 615, 180, 120);
	dustbinRight = new DustBin(595, 600, 10, 60);

	Engine.run(engine);

}


function draw() {

	background("gray");

	ground.display();

	paper.display();

	dustbinLeft.display();
	
	dustbinRight.display();
	dutbinBottom.display();
}



function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:30,y:-80 });
	}
}