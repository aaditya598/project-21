
var wall,thickness;
var bulletIMG,speed,weight,bulletSprite;


function preload(){
  bulletIMG=loadImage("bullet.png")
}
function setup() {
  createCanvas(800,400);
  thickness=random(22,83)
  speed=random(200,250)
  weight=random(30,52)
  
  bullet=createSprite(50,200,50,50)
  //bullet.addImage(bulletIMG)
  bullet.velocityX=speed;
  



  wall=createSprite(700,200,60,height/2)
  wall.shapeColor=(255)

}

function draw() {
  background(255);  
  //bullet.sprite.collide(wall.sprite,calculateDeformation)
  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
		
	}

	

	if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
	}
	
  }


  drawSprites();
 
}


function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}