var car,wall,speed,weight



function setup() {
  createCanvas(1200,400)
  speed=random(50,100)
  weight=random(400,1500)
  wall=createSprite(1100,200,50,370)
  wall.shapeColor="black"
  car=createSprite(100,100,20,20)
  car.velocityX=speed
  car.shapeColor="blue"
  
 
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0
    var d=.5*weight*speed*speed/22500
    if(d>180){
      car.shapeColor="red"
    }
    else if(d>100){
      car.shapeColor="yellow"
    }
    else{
      car.shapeColor="green"
    }
  }
}