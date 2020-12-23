var bullet;
var thickNess;
var wall;
var speed;
var weight;
var lbullet;

function setup(){
  createCanvas(1600,400);
  bullet=createSprite(100,100,30,10);
  thickNess=Math.round(random(22,83));
  wall=createSprite(1200,200,thickNess,400);
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  bullet.velocityX=5;

}
function draw(){
background("black");
createEdgeSprites();
if(haveCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickNess *thickNess *thickNess)
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}
console.log(damage);
console.log(speed);
console.log(thickNess);
console.log(weight);

 drawSprites();
}
function haveCollided(Lbullet,Lwall){
bulletRightEdge= bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
  return false;
}