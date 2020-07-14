//Global Variables
var monkey;
var bananaGroup,obstacleGroup;
var monkeyImg,bananaImg,obstacleImg,bgroundImg;
var bground,ground;
var score;

function preload(){
  monkeyImg = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bgroundImg = loadImage("jungle.jpg");
  bananaImg = loadImage("Banana.png");
  obstacleImg = loadImage("stone.png");
  
  score = 0;
  
}


function setup() {
  createCanvas(600,300);
  
  monkey = createSprite(30,260,10,10);
  monkey.addAnimation("run",monkeyImg);
  monkey.scale = 0.1;
  
  bground = createSprite(300,200,10,10);
  bground.addImage(bgroundImg);
  bground.velocityX = -5;
  
  monkey.depth = bground.depth+1;
  
  ground = createSprite(300,280,600,10);
  ground.visible = false;
  
  bananaGroup = new Group();
  obstaclesGroup = new Group();
  
}


function draw(){
 background(255);
  
 monkey.velocityY = monkey.velocityY+1; 
 monkey.collide(ground);
  
  //console.log(monkey.y);
  
  if(keyDown("space")){
    monkey.velocityY = -15;
  }   
  
  if(bground.x<60){
    bground.x = bground.width/2;
  }    

  if(bananaGroup.isTouching(monkey)){
  bananaGroup.destroyEach();
    score = score + 1;
  }
  
  if(obstaclesGroup.isTouching(monkey)){
    monkey.scale = 0.08;
  }
  
  switch(score){
    case 10: monkey.scale = 0.12;  
      
      break;
      
      case 20:monkey.scale = 0.14;

      break;
      
      case 30:monkey.scale = 0.16;
      
      break;    
    case 40:monkey.scale = 0.18;
      
       
 if(monkey.y > 200){
  if(keyDown("space")){
    monkey.velocityY = -15;
  }
  }  
      
    break;
    default: break;  
  }
  
  obstacles();
  food();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,220,20);
}

function food(){
  if(frameCount %80 === 0){
  var banana = createSprite(340,random(120,200),10,10); 
  banana.addImage(bananaImg);
  banana.scale = 0.05;
  banana.velocityX = -10;
  bananaGroup.add(banana); 
  banana.lifetime = 50;
}  
}
  
  
 function obstacles(){
  if(frameCount %150 === 0){
    var rocks = createSprite(400,250,10,10);
    rocks.addImage(obstacleImg);
    rocks.scale = 0.2;
    rocks.velocityX = -10;
    obstaclesGroup.add(rocks);
    //rocks.debug = true;
    rocks.setCollider("circle",0,0,50);
    rocks.lifetime = 50;
}
} 