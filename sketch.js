var monkey, monkeyImage;
var banana, bananaImage, foodGroup;
var rock, rockImage, rockGroup;
var ground, groundImage, groundInvisible;;
var gameState="play";
var score=0;

function preload(){
  groundImage = loadImage("bg1.jpg");
  boyimg = loadAnimation("boy1.PNG","boy2.PNG","boy3.PNG","boy4.PNG","boy5.PNG",
  "boy6.PNG","boy7.PNG","boy8.PNG");
  candyimg1 = loadImage("candy1.png");
  candyimg2 = loadImage("candy2.png");
  candyimg3 = loadImage("candy4.png");
  candyimg4 = loadImage("candy5.png");
  candyimg5 = loadImage("candy6.png");
  candyimg6 = loadImage("candy7.png");
  dgimg = loadImage("Dragon3.jpg");
}
function setup() {
  
  createCanvas(1000,600);

  ground=createSprite(300,200,1500,20);
  ground.addImage(groundImage);
  ground.scale = 1.1;
  
  groundInvisible=createSprite(300,600,1500,20);
  groundInvisible.visible=0;
  
 boy = createSprite(50,500,20,20);
 boy.addAnimation("Running",boyimg);
 boy .scale= 1.1;
  
  
  dragonG = new Group();
  candyG = new Group();
}

function draw() {
  background(220);
  
  boy.collide(groundInvisible);
  
  if(gameState=="play"){
    
    CreateCandy();
    CreateDragon();

    ground.velocityX=-(5+5*(score/50));
    
    if(ground.x<0){
      ground.x=ground.width/2;
    }
    
   
    if(keyDown("space") && boy.y>270){
      boy.velocityY=-10;
    }
    boy.velocityY = boy.velocityY+0.5;
    
    //if(foodGroup.isTouching(boy)){
     // foodGroup.destroyEach();
     // score=score+5;
      
   // }
    
    //if(rockGroup.isTouching(boy)){
     // gameState="end";
     
   // }
    

  }
  
  drawSprites();
  textSize(20);
  fill("red");
  text("Score: "+score,450,50);
  noFill();
  
      if(gameState=="end"){
        boy.velocityY=0;
        ground.velocityX=0;
       // rockGroup.setVelocityXEach(0);
        //foodGroup.setVelocityXEach(0);
        //rockGroup.setLifetimeEach(-1);
       // foodGroup.setLifetimeEach(-1);
        textSize(18);
        fill("red");
        text("GAME OVER!!",200,180);
        text("PRESS SPACE TO RESTART.",200,200);
        noFill();
    }
  if(keyDown("space") && gameState=="end"){
    score=0;
    gameState="play";
   // rockGroup.destroyEach();
    //foodGroup.destroyEach();

  
  }
  
}

function CreateDragon(){
  
  if(Math.round(random(frameCount)%100)==0){
  dragon =createSprite(500,500,20,20);
  dragon.addImage(dgimg);
  dragon.scale=0.1;
  dragon.velocityX=-(8+5*(score/50));
  dragon.lifetime=110;
  dragonG.add(dragon);
  }
  
}

function CreateCandy(){
  
  if (frameCount % 60 === 0){
    var candy = createSprite(300,Math.round(random(200,400)),10,40);
     candy.velocityX = -(6 + score/100);
    
     //generate random candy
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: candy.addImage(candyimg1);
               break;
       case 2: candy.addImage(candyimg2);
               break;
       case 3: candy.addImage(candyimg3);
               break;
       case 4: candy.addImage(candyimg4);
               break;
       case 5: candy.addImage(candyimg5);
               break;
       case 6: candy.addImage(candyimg6);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the candy          
     candy.scale = 0.3;
     candy.lifetime = 300;
    
    //add each candy to the group
     candyG.add(candy);
  }
  
 }
    
