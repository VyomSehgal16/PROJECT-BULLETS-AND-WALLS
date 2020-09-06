var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(1600,800);
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,50);
  bullet = createSprite(50, 200, 35, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255,255,255);
  wall = createSprite(1200,200,thickness,800);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damage>10){
      bullet.shapeColor = color(255,0,0);
    }
    if(damage<10){
      bullet.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(bullet,wall){
  var bulletRightEdge = bullet.x + bullet.width;
  var wallRightEdge = wall.x;
  if(bulletRightEdge>=wallRightEdge)
  {
    return true;
  }
  else {
    return false;
  }
}