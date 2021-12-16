
var coin, coinadd;
var road, roadadd;
var aman, amanrun;
function preload(){
  //pre-load images
  amanrun = loadAnimation ("Runner-1.png", "Runner-2.png");
  roadadd = loadAnimation ("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  road = createSprite (200, 200, 0, 0);
  road.addAnimation ("road", roadadd);
  road.scale=0.5;
  
  coin = createSprite (200,200, 20, 20);
  coin.addAnimation ("coin",coinadd);
  coin.scale=10;

  aman = createSprite (200,350,20,20);
  aman.addAnimation ("aman", amanrun);
  aman.scale=0.05;

  

}

function draw() {
  background("green");

drawSprites();  

}
