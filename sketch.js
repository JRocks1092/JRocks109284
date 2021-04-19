const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;
var bgImage;
var character, characterImg;
var Snows = [];
var defaultCharacterY = 300;

function preload(){

  bgImage = loadImage("snow2.jpg");
  characterImg = loadAnimation("snow7.png","snow8.png");  
}

function setup() {

  createCanvas(800,400);
  character = createSprite(400, defaultCharacterY, 50, 50);
  character.addAnimation("character_running",characterImg);
  
  engine = Engine.create();
  world = engine.world;

  for (var i = 0; i < 25; i++) {

    Snows.push(new Snow(random(0, 800), random(0, 400)));
}

}

function draw() {
  background(bgImage);  

  Engine.update(engine);

  for (var i =0; i < 15; i++) {
    Snows[i].display();
  }

  drawSprites();
}
