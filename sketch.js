
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var roof, ball1, ball2, ball3, ball4, ball5, rope1, rope2,  rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 100, 800, 25);
	ball1 = new Ball(150, 400, 30);
	ball2 = new Ball(200, 400, 30);
	ball3 = new Ball(250, 400, 30);
	ball4 = new Ball(300, 400, 30);
	ball5 = new Ball(350, 400, 30);
	rope1 = new Rope(ball1.body, {x:150, y: 100});
	rope2 = new Rope(ball2.body, {x:200, y: 100});
	rope3 = new Rope(ball3.body, {x:250, y: 100});
	rope4 = new Rope(ball4.body, {x:300, y: 100});
	rope5 = new Rope(ball5.body, {x:350, y: 100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
  //keyPressed();
 
}

/*function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x:85,y:-85});
	}
}*/
function mouseDragged() {
	Matter.Body.setPosition(ball1.body, {x:mouseX, y:mouseY});
}

