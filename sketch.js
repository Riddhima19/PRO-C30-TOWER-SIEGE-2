
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;
var  circle;
var ground;	
var world,sling;

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
  
ground=new Ground(400,400,350,30)

World.add(world, ground);

box1=new Box(310,370,30,40)
fill(255, 190, 200);
box2=new Box(340,370,30,40)
box3=new Box(370,370,30,40)
box4=new Box(400,370,30,40)
fill("red")
box5=new Box(430,370,30,40)
box6=new Box(460,370,30,40)
box7=new Box(490,370,30,40)
box8=new Box(340,330,30,40)
box9=new Box(370,330,30,40)
box10=new Box(400,330,30,40)
box11=new Box(430,330,30,40)
box12=new Box(460,330,30,40)
box13=new Box(370,290,30,40)
box14=new Box(400,290,30,40)
box15=new Box(430,290,30,40)
box16=new Box(400,250,30,40)
circle=new Circle(100,200,20)
sling =new SlingShot (circle.body,{x:130,y:200})
	
Engine.run(engine);
}

function draw() {
	background(221,255,187);
Engine.update(engine);

  circle.display();
  sling.display();
  box1.display();
  box2.display();
  fill(255,253,124)
  box3.display();
  fill(255,91,135)
  box4.display();
  fill("blue")
  box5.display();
  fill(255,135,91)
  box6.display();
  box7.display();
  fill("green")
  box8.display();
  box9.display();
  fill(255, 190, 200);
  box10.display();
  box11.display();
  fill(140,112,255)
  box12.display();
  fill("yellow")
  box13.display();
  fill(0,255,64)
  box14.display();
  fill(142,155,255)
  box15.display();
  fill(255,142,212)
  box16.display();
  fill(65, 220, 210);
  ground.display();
  fill(255,229,30)
  sling.display();
  fill("white")

  drawSprites();
 }

//function keyPressed() {
  //	if (keyCode === UP_ARROW) {
    //	Matter.Body.applyForce(circle,circle.position,{x:55,y:-75});
    //}

  //}
   
  function mouseDragged(){
	Matter.Body.setPosition(circle.body,{x:mouseX,y:mouseY})
  }
  
 	function mouseReleased (){
	sling.fly();
  }
  
  function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(circle);
    }}
