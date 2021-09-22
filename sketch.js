var backgroundImage, background
var pinkPrincessImage, pinkPrincess
var purplePrincessImage, purplePrincess
var pinkCandyImage, pinkCandy
var purpleCandyImage, purpleCandy
var mixedCandyImage, mixedCandy
var lemonImage, lemon
var pinkGroup, purpleGroup, mixedGroup, lemonGroup


function preload(){
    backgroundImage=loadImage("images/flower background.jpg")
    pinkCandyImage=loadImage("images/candy1.png")
    purpleCandyImage=loadImage("images/candy2.png")
    mixedCandyImage=loadImage("images/candy3.png")
    pinkPrincessImage=loadImage("images/princess pink copy.png")
    purplePrincessImage=loadImage("images/princess purple copy.png")

}

function setup(){
    createCanvas(width, height)
    background.addImage(backgroundImage)

    //pink princess
    pinkPrincess=createSprite(50, 50, 30, 30)
    pinkPrincess.addImage(pinkPrincessImage)
    pinkPrincess.scale= 0.9
    
    //purple princess
    purplePrincess=createSprite(50, 50, 30, 30)
    purplePrincess.addImage(purplePrincessImage)
    purplePrincess.scale= 0.9
    
    //groups
    pinkGroup = new Group()
    purpleGroup = new Group()
    mixedGroup = new Group()
    lemonGroup = new Group()

}

function draw(){

}

function pinkCandies(){
    if(frameCount%120===0){
    pinkCandy=createSprite(Math.round(random(10, 100)), 30, 20, 20)
    pinkCandy.addImage(pinkCandyImage)
    pinkCandy.scale = 0.1
    pinkCandy.velocityY = -3;
    pinkGroup.add(pinkCandy)

    }
}

function purpleCandies(){
    if(frameCount%75===0){
    purpleCandy=createSprite(Math.round(random(10, 100)), 30, 20, 20)
    purpleCandy.addImage(purpleCandyImage)
    purpleCandy.scale = 0.1
    purpleCandy.velocityY = -3;
    purpleGroup.add(purpleCandy)
    }
}

function mixedCandies (){
    if(frameCount%90===0){
    mixedCandy=createSprite((Math.round(random(10, 100))), 30, 20, 20)
    mixedCandy.addImage(mixedCandyImage)
    mixedCandy.scale = 0.1
    mixedCandy.velocityY = -3;
    mixedGroup.add(mixedCandy)

    }
}

function lemons(){
    if(frameCount%60===0){
    lemon=createSprite(Math.round(random(10, 100)), 30, 20, 20)
    lemon.addImage(lemonImage)
    lemon.scale = 0.1
    lemon.velocityY = -3;
    lemonGroup.add(lemon)
    }
}