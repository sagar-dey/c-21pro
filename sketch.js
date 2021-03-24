var canvas,surface1,surface2,surface3,surface4,box;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(100,550,70,25);
    surface1.shapeColor="red";
    surface2=createSprite(300,550,70,25);
    surface2.shapeColor="green";
    surface3=createSprite(500,550,70,25);
    surface3.shapeColor="blue";
    surface4=createSprite(700,550,70,25);
    surface4.shapeColor="black";


    //create box sprite and give velocity
box=createSprite(20,150,30,30);
box.shapeColor="yellow";
box.velocityX=3;
box.velocityY=4;

}

function draw() {
    background("pink");
   box= createEdgeSprites();
  
   
    



    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box)&&box.bounceOff(surface1)){
        box.shapeColor="red";
        }
        if(surface2.isTouching(box)&&box.bounceOff(surface2)){
            box.shapeColor="green";
        }
        if(surface3.isTouching(box)&&box.bounceOff(surface3)){
           box.shapeColor="blue";
        }
        if(surface4.isTouching(box)&&box.bounceOff(surface4)){
            box.shapeColor="black";
        }
    
drawSprites();
}
