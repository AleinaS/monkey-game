
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var survivalTime;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  var message = "This is a message";
 console.log(message)
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  
  
  

  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  console.log(ground.x);
  
  

  



function draw() {
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
  stroke=("white");
  textSize(20);
  fill("white");
  text("Score"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time"+survivalTime,100,50);
  
  
  

  
}
}
function spawnFood(){
  foodGroup=newGroup();{
    if (frameCount % 80 === 0){
   foodGroup.addSprite = banana(400,150,20,20);
   banana.velocityX = -(6 + score/100);
    banana.x= Math.round(random(120,200));
    banana.addImage(banana);
    banana.lifetime=80;}
    
    
  }}


   
    function spawnObstacles(){
      
      obstacleGroup();{
  
 if (frameCount % 300 === 0){
   var obstacle = createSprite(300,10,25,25);
   obstacle.velocityX = -(6 + score/100);}}
obstacle.x=Math.round(random(1,10));}
    var rand = Math.round(random(1,50));
    switch(rand) {
        case 1: obstacle.addImage(obstacle);
              break;
      case 2: obstacle.addImage(obstacle);
              break;
      case 3: obstacle.addImage(obstacle);
              break;
      case 4: obstacle.addImage(obstacle);
              break;
      case 5: obstacle.addImage(obstacle);
              break;
      case 6: obstacle.addImage(obstacle);
              break;
      default: break;
      
    
}





