const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint= Matter.Constraint;
 
var box1, box2, ground, base1, base2, poly, sling;
var backgroundImg;
var gameState ="play";
var score= 0;

function preload(){
   backgr();
}

function setup(){

createCanvas(1200,500)
engine= Engine.create();
world=engine.world;

box1=new Box(610,400,50,60)
box2=new Box(660,400,50,60)
box3= new Box(560,400,50,60)
box4= new Box(510,400,50,60)
box5= new Box(460,400,50,60)
box6= new Box(710,400,50,60)

box7= new Box(510,295,50,60)
box8= new Box(560,295,50,60)
box9= new Box(610,295,50,60)
box10= new Box(660,295,50,60)

box11= new Box(560,244,50,60)
box12= new Box(610,244,50,60)

box13= new Box(585,204,50,60)



box14= new Box(918,244,50,50)
box15= new Box(965,244,50,50)
box16= new Box(1015,244,50,50)
box17= new Box(1065,244.5,50,50)

box18= new Box(963,134,50,50)
box19= new Box(1018,134,50,50)

box20= new Box(990,84,50,50)

ground= new Ground(600,490,1200,20)

base1= new Ground(600,400,390,25)

base2= new Ground(1000,245,300,25)

poly = new Polygon(150,225,70)

sling = new Slingshot(poly.body,{x:150, y:120});

Engine.run(engine);
  
}


function draw(){
  if(backgroundImg)
    background(backgroundImg);


Engine.update(engine);

textSize(24)
fill("lightYellow")
text("Drag The Hexagonal Shape And Release It To Launch It Towards The Blocks", 180, 55)

textSize(25)
fill(250)
text("Press Space To Give Another Try!", 440, 465)
strokeWeight(4)

sling.display();
poly.display();

textSize(30)
fill("yellow")
text("SCORE : " +score , 1000, 78)
strokeWeight(7)

fill("red")
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();

fill("blue")
box7.display();
box8.display();
box9.display();
box10.display();

fill("green")
box11.display();
box12.display();

fill("yellow")
box13.display();

fill("aqua")
box14.display();
box15.display();
box16.display();
box17.display();

fill("skyBlue")
box18.display();
box19.display();

fill("pink")
box20.display();
ground.display();

base1.display();
base2.display();

box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();
box16.score();
box17.score();
box18.score();
box19.score();
box20.score();

}

function mouseDragged(){
if(gameState!== "launched"){

Matter.Body.setPosition(poly.body,{x: mouseX, y: mouseY})

}
}

function mouseReleased(){

sling.fly();
gameState="launched"
}

function keyPressed(){

if(keyCode === 32){
sling.attach(poly.body)
Matter.Body.setPosition(poly.body, {x:150, y:225})
gameState="play"
}

}


async function backgr(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=06 && hour<=18){
    bg = "bg1.png";
  }

 else{
    bg = "bg2.jpg";
  }
 backgroundImg=loadImage(bg)
}
