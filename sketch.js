

var wall,thickness
var bullet,speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(22,321)
	weight=random(30,52)
    thickness=random(22,85)

	bullet=createSprite(50, 200, 50,50);   

	bullet.velocityX = speed;

	bullet.shapeColor=color("cyan");


  
  	wall=createSprite(1500,200, 60, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  	bullet.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		
		wall.shapeColor=color("red");

	}

	if(deformation<180 && deformation>100)
	{
		
		wall.shapeColor=color(0);
	}

	if(deformation<100)
	{
		
		wall.shapeColor=color("green");
	}
  }  
  
  drawSprites();
 
}


