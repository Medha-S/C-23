const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite;
var packageBody, packageSprite, packageIMG;
var ground;
var log1,log2,log3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	

	packageBody = Bodies.circle(width/2 , 100 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(400,490,200,20, {isStatic:true} );
 	World.add(world, ground);
  
	log1 = new Log(400,465,200,20,PI/2-1.5);
    log2 = new Log(292,425,20,100,PI/1-1.5);
	log3 = new Log(510,425,20,100,PI/1-1.5);
	
}
	
function draw()
 {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  fill("grey");
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;
  rect(ground.position.x,ground.position.y,800,40);

  
  log1.display(); 
  log2.display(); 
  log3.display(); 
  drawSprites();
  keyPressed();
}

function keyPressed() 
{
 if (keyCode === DOWN_ARROW)
  {
	Matter.Body.setStatic(packageBody, false);
  }
}