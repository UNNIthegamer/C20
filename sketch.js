var a,b;
function setup() {
  createCanvas(800,400);
 a= createSprite(400, 200, 50, 50);
 a.shapeColor="green";
 b= createSprite(400, 200, 50, 100);
 b.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  b.x=World.mouseX;
  b.y=World.mouseY;
  console.log(b.x-a.x);
  if(b.y-a.y<75 && a.y-b.y<75){
    a.shapeColor="red";
    b.shapeColor="red";
  }
  else{
    a.shapeColor="green";
    b.shapeColor="green"; 
  }

  if(b.x-a.x<50 && a.x-b.x<50){
    a.shapeColor="red";
    b.shapeColor="red";
  }
  else{
    a.shapeColor="green";
    b.shapeColor="green"; 
  }
  drawSprites();
}