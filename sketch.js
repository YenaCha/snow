var bg, snow, snowImg
function preload(){
  bg = loadImage("snow1.jpg");
  snowImg = loadImage("snow4.webp");
}
function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255); 
  image (bg, 0,0,800,400);
  spawnSnow();
  drawSprites();
}

function spawnSnow(){
  if (frameCount % 15 === 0){
    snow = createSprite(Math.round(random(10,790)), 0, 20,20);
    snow.addImage(snowImg);
    snow.velocityY = random(1,3);
    snow.scale = snow.velocityY/50;
    snow.lifetime = 400/snow.velocityY;
  }
}