var canvas, scene, scene1;
var you, yourfreind, you1, yourfreind1;
var person1, person2;

function preload() {
  you1 = loadImage("happy face.jpg");
  yourfreind1 = loadImage("happy face.jpg");
  scene1 = loadImage("green.png");
  
}

function setup(){
  canvas = createCanvas(1500, 625);

  scene = createSprite(0, 0, 800, 400);
  scene.scale=10;
  scene.velocityY=-2;
  scene.addImage(scene1);

  you = createSprite(250, 200, 15, 15);
  you.velocityX = 0;
  you.velocityY = 0;
  you.addImage(you1);
  you.scale = 0.05;

  yourfreind = createSprite(190, 200, 15, 15);
  yourfreind.addImage(yourfreind1);
  yourfreind.scale = 0.05;

  person1 = new Person(700,320,70,70);
  person2 = new Person(920,320,70,70);

}
function draw() {

  
if (scene.y<0) {
  scene.y=scene.height/2;
}

if (keyDown("UP_ARROW")) {
 
  you.velocityX = 0;
  you.velocityY = -1;

}

if (keyDown("DOWN_ARROW")) {
  
  you.velocityX = 0;
  you.velocityY = 1;

}

if (keyDown("LEFT_ARROW")) {
 
  you.velocityX = -1;
  you.velocityY = 0;
  
}

if (keyDown("RIGHT_ARROW")) {
  
  you.velocityX = 1;
  you.velocityY = 0;

}

/*if (you.collide(person1)) {
  person1.tint = "white";

}*/

//createEdgeSprites();
//you.collide(edges);
    
  person1.display();
  person2.display();

drawSprites();
}
