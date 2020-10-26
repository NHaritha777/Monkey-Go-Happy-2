
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score,survivalTime;
var ground,groundImg,bground,bgroundImg;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bgroundImg=loadImage("IMG_20201025_144715.JPG");
}



function setup() {
 createCanvas(500,500); 

  bground=createSprite(150,290,20,20);
bground.addImage("moving",bgroundImg);
bground.scale=1;
bground.velocityX=-4;
  
  score=0;
survivalTime=1;
  
  monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.12;
  
  ground=createSprite(500,460,1000,10);
ground.velocityX=-4;


   bananaGroup= new Group();
obstacleGroup= new Group();
  
}


function draw() {
background("darkGreen");
  
  
  textSize(20);
text("Score: "+score,50,18);
 
   textSize(20);
text("Survival Time: " +survivalTime,200,18);
survivalTime= Math.ceil(frameCount/frameRate()); 
  
  //adding gravity
  monkey.velocityY=monkey.velocityY+1;
  monkey.collide(ground);
  
  
  //adding depth
  monkey.depth=monkey.depth+1;
  Obstacle.depth=Obstacle.depth;

  
  //infinite ground
  if (ground.x<0){
  ground.velocityX=-4;
ground.x=ground.width/2;
  }
 
  if (bground.x<140){
  bground.velocityX=-4;
bground.x=bground.width/2;
  }
  
  //monkey jumps when space key is pressed
  if (keyDown("space") && monkey.y>=100 ){
    monkey.velocityY=-10;
  }
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score= score+5;
  }
  
  Banana();
Obstacle();
  
   
  
drawSprites();  
}

function Banana(){
  
  if(frameCount % 80 ===0){
var banana= createSprite(200,300,5,5);    
banana.y= Math.round(random(150,300));
banana.addImage(bananaImage);
banana.lifetime=110;
banana.velocityX=-6;
banana.scale=0.1;
    
bananaGroup.add(banana);   
  } 
}

function Obstacle(){
  
  if(frameCount % 100 ===0){
var obstacle =createSprite(400,420,5,5);    
obstacle.x=Math.round(random(0,1000));
obstacle.addImage(obstacleImage);
obstacle.lifetime=115;    
obstacle.velocityX=-4;    
obstacle.scale=0.2;    
    
obstacleGroup.add(obstacle);   
  }
}