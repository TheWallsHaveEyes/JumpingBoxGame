var canvas;
var music;
var surface1,surface2,surface3,surface4;
var edges;
var Box;

function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(800,600);
     
    //create 4 different surfaces
    surface1=createSprite(0,580,360,20);
    surface2=createSprite(295,580,200,20);
    surface3=createSprite(515,580,200,20);
    surface4=createSprite(740,580,220,20);
    
    surface1.shapeColor="red";
    surface2.shapeColor="yellow";
    surface3.shapeColor="green";
    surface4.shapeColor="blue";

    //create box sprite and give velocity

    Box=createSprite(random(50,750),100,40,40);
    Box.velocityX=3;
    Box.velocityY=4;
    Box.shapeColor="white";



}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    
    Box.bounceOff(edges);
    if(Box.isTouching(surface1)){
        Box.shapeColor = "red";
    } 
    if(Box.isTouching(surface2)){
        Box.shapeColor= "yellow";
    } 
    if(Box.isTouching(surface3)){
        Box.shapeColor="green";
    } 
    if(Box.isTouching(surface4)){
        Box.shapeColor="blue";
        Box.velocityX=0;
        Box.velocityY=0;
    } 
    Box.bounceOff(surface1);
    Box.bounceOff(surface2);
    Box.bounceOff(surface3);

    drawSprites();

    //add condition to check if box touching surface and make it box
}
