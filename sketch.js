var SurvivalTime = 0, bananascore = 0, play = 1, end = 1, gamestate = play, monkey, forest, stone, banana;

var monkeyimage, stoneimage, bananaimage, forestimage;

var stones, bananas

function preload() {
monkeyimage = loadAnimation("monkey1.png", "monkey2.png", "monkey3.png", "monkey4.png", "monkey5.png", "monkey6.png", "monkey7.png", "monkey8.png", "monkey9.png");
stoneimage = loadImage("stone.png");
bananaimage = loadImage("banana.png");
forestimage = loadImage("forest.png");  
}

function setup() {
  createCanvas(1000, 1000);
monkey = createSprite(100, 340, 20, 50);
monkey.addAnimation("monkey", monkeyimage);
monkey.scale = 1;

forest = createSprite(200, 380, 400, 20);
forest.addImage("forest", forestimage);
forest.scale = 2.2;
forest.x = forest.width/2;  
  
stones = new Group();
bananas = new Group();  
}

function draw() {
  background (255);
   
   textSize = (20);
  text("Survival Time - " + SurvivalTime, 20, 50);
  
   textSize = (20);
  text("Banana Score - " + bananascore, 225, 50);
  
  if(gamestate == play) {
  forest.velocityX = -4;
  if (forest.x < 0) {
  forest.x = forest.width/2;  
  }
  if (keyDown("space")) {
  monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.45;
  if (monkey.isTouching(bananas)) {
  bananascore++;  
  }
    
  monkey.collide(forest);
  myBanana();
  myStone();  
  
  if (stones.isTouching(monkey)) {
  gamestate = end;  
  }  
  
  } else if (gamestate == end) {
  forest.velocityX = 0;
  bananas.setVelocityEach(0);  
  stones.setVelocityXEach(0);  
  SurvivalTime = 0;
  bananascore = 0;  
  bananas.setLifetimeEach(-1);
  stones.setLifetimeEach(-1);  
  } 
  drawSprites()  
}  

function myBanana() {
if (frameCount% 80 == 0) {
banana = createSprite(Math.round(random(250, 350), 250));
banana.addImage("banana", bananaimage);
banana.scale = 1;
banana.velocityX = -3;
bananas.add(banana);
banana.lifetime = 100;
camera.position.x = banana.x;
camera.position.y = displayHeight/2;
}
}

function myStone() {
if (frameCount% 300 == 0) {
stone = createSprite(Math.round(random(250, 350)), 300);    
stone.addAnimation("stone", stoneimage);
stone.scale = 1;
stone.velocityX = -3;
stones.add(stone);
stones.lifetime = 150;
}
}  