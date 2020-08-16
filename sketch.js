var bullet, randspeed, wall;

function setup() {
  createCanvas(800,400);
  car = createSprite(100, 270, 70, 30);
  wall = createSprite(700, 280, 30, 400)
  wallthick = random(20, 60);
  randspeed = random(55, 500);
  car.velocityX= randspeed;
  wall.width = wallthick;
}


function draw() {
  background(255,255,255);  
  
  car.collide(wall);
  
  if(randspeed>60 && randspeed<150){
    car.shapeColor = color(0,150,0)
  }

  if(randspeed>200 && randspeed<300){
    car.shapeColor = color(0,0,100)
  }

  if(randspeed>300 && randspeed<500){
    car.shapeColor = color(100,0,0)
  }
  
  drawSprites();
}