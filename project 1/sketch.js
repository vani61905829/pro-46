var canvas;
var block;
var bigblock;
var bigestblock;
function preload() {
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  background("blue");
 createBlock();
 createbigBlock();
 createbigestBlock(0)
 textSize(20);
 fill("white")
 text("start",100,500)
 drawSprites();
 
}
function createBlock(){
if(frameCount%20===0){
  block=createSprite(random(10,windowWidth),0,50,100);
  block.velocityY=10;
  block.shapeColor="black";
}

}

function createbigBlock(){

  if(frameCount%20===0){
   bigblock=createSprite(random(20,windowWidth),0,50,200);
  bigblock.velocityY=10;
   bigblock.shapeColor="black";
  }
}
function createbigestBlock(){
if(frameCount%20===0){
  bigestblock=createSprite(random(10,windowWidth),0,50,300);
  bigestblock.velocityY=10;
 bigestblock.shapeColor="#ADD8E6";
}
}






