var canvas;
var sky, skyImg; 
var eagle , eagleImg;
var line;
var owl,owlImg,monster,monsterimg,alien,alienimg
function preload() {
 
  eagleImg = loadImage("./assets/flying-eagle.gif")
  skyImg = loadImage("./assets/sky.png")
  owlImg = loadImage("./assets/owl.png")
  monsterimg = loadImage("images__3_-removebg-preview.png")
  alienimg = loadImage("images__4_-removebg-preview.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight)

  sky = createSprite(width/2,height/2)
  sky.addAnimation("skyed",skyImg)
  sky.velocityX = -2
  sky.scale = 2


  eagle = createSprite(30,200)
  eagle.addAnimation("eagley",eagleImg)

  line = createSprite(200,18,4000,20)

  line.hide;


  

}

function draw() {
  background("white"); 
  
  owlcr()
  owlcr2()
  if(sky.x <200){
    sky.x = width/2;
 }

 if (keyDown(UP_ARROW)) {
     eagle.y -= 5
}
if (keyDown(DOWN_ARROW)) {
  eagle.y += 5
}





if(eagle.y > 18)
{
  eagle.collide(line)
}

console.log(eagle.y)




  drawSprites();
}

function owlcr()
{
   if(frameCount % 60 == 0)
   {
      owl = createSprite(width/2,random(200, height - 400))
      owl.addImage("bird",owlImg)
      owl.velocityX = -6
      owl.scale = 0.3
   }
}

function owlcr2()
{
   if(frameCount % 60 == 0)
   {
      monster = createSprite(width/2,random(200, height - 400))
      monster.addImage("birdsw",monsterimg)
      monster.velocityX = -6
      monster.scale = 0.3
   }
}

