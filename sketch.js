var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,redLog1,redLog2,redLog3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	redLog1 = createSprite(400,652,250,15);
    redLog1.shapeColor=color("red");
    
    redLog2 = createSprite(530,560,15,200);
    redLog2.shapeColor=color("red");

	redLog3 = createSprite(270,560,15,200);
	redLog3.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {

if (keyCode===LEFT_ARROW){
	helicopterSprite.x=helicopterSprite.x-20;
	translation={x:-20,y:10}
	Matter.Body.translate(packageBody,translation)
}

else if (keyCode===RIGHT_ARROW){
	helicopterSprite.x=helicopterSprite.x+20;
	translation={x:20,y:10}
	Matter.Body.translate(packageBody,translation)
}

 else if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }

}



