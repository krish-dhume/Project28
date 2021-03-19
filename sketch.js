
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var boy,ground;
var tree;
var mango,sling,stone;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
boy=new Boy(200,100,120,220);
ground=new Ground(600,650,1200,170);
	tree=new Tree(900,490,300,200);
  mango=new Mango(900,440,40,70)
  mango1=new Mango(950,440,40,70)
  mango2=new Mango(850,440,40,70)
  mango3=new Mango(820,440,40,70)
  mango4=new Mango(950,440,40,70)
  mango5=new Mango(980,440,40,70)
  stone=new Stone(400,100,70,40)
  sling=new Slingshot(stone.body,{x:300,y:300})
  
}


function draw() {
  background("grey");
  Engine.update(engine);
  

  boy.display();
  ground.display();
  tree.display();
 mango.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 stone.display();
 sling.display();
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  sling.charge();
}


