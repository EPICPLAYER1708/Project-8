var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["59c28886-61ed-474a-8b87-f975decba207","0f44cc64-10bf-4b51-8965-527d156a89bd","40cf1390-fcf3-48b1-87bc-0c76723a044f"],"propsByKey":{"59c28886-61ed-474a-8b87-f975decba207":{"name":"Dream_Skin2.png_1","sourceUrl":null,"frameSize":{"x":200,"y":267},"frameCount":1,"looping":true,"frameDelay":12,"version":"z8tocR3qRhvsH_8P6O5ikIFb3Fjg4mpQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":267},"rootRelativePath":"assets/59c28886-61ed-474a-8b87-f975decba207.png"},"0f44cc64-10bf-4b51-8965-527d156a89bd":{"name":"body.png_1","sourceUrl":"assets/v3/animations/t94qxubkLxM2CZql1tsPn_WYOrYbAEL8xpga-aOGhPQ/0f44cc64-10bf-4b51-8965-527d156a89bd.png","frameSize":{"x":282,"y":282},"frameCount":1,"looping":true,"frameDelay":4,"version":"b6R0pMzn0esJ_7CUF0l_C_CUX7s9n.YT","loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":282},"rootRelativePath":"assets/v3/animations/t94qxubkLxM2CZql1tsPn_WYOrYbAEL8xpga-aOGhPQ/0f44cc64-10bf-4b51-8965-527d156a89bd.png"},"40cf1390-fcf3-48b1-87bc-0c76723a044f":{"name":"png-clipart-minecraft-mod-grass-block-computer-software-video-game-block-3d-computer-graphics-wood.png_1","sourceUrl":null,"frameSize":{"x":200,"y":114},"frameCount":1,"looping":true,"frameDelay":12,"version":"dN_xcDmtVxuwv5OUBuD11D_Vk43mbYVi","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":114},"rootRelativePath":"assets/40cf1390-fcf3-48b1-87bc-0c76723a044f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var computerScore = 0; 
var playerScore = 0;
var goal1=createSprite(200,18,100,20);
goal1.shapeColor=("yellow");


var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("yellow");

 //variable to store diffrent states of game
 var gameState = "serve";

// making court
var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "white";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "white";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "white";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "white";



// creating objects and giving them colours
var striker = createSprite(200,200,10,10);
striker.shapeColor = "white";
striker.setAnimation("png-clipart-minecraft-mod-grass-block-computer-software-video-game-block-3d-computer-graphics-wood.png_1");
striker.scale = 1/6;


var playerMallet = createSprite(200,50,50,10);
playerMallet.shapeColor = "black";
playerMallet.scale = 1/4;

var computerMallet = createSprite(200,350,50,10);
computerMallet.shapeColor = "black";
computerMallet.setAnimation("body.png_1");
computerMallet.scale = 1/4;

playerMallet.setAnimation("Dream_Skin2.png_1");


function draw() {
  //clear the screen
 
  
 background("green");
if (keyDown(ENTER)) {
  playSound("assets/dream_speedrun_music.mp3", true);
    
}

fill("skyblue");
text(computerScore,25,225);
text(playerScore,25,185);



 
  
  
  //AI for the computer paddle
  //make it move with the striker's y position
  computerMallet.x = striker.x;


  
  //draw line at the centre
   for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
  //create edge boundaries
  //make the striker bounce with the top and the bottom edges
  createEdgeSprites();
  
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(edges);
  
  if (striker.isTouching(goal1))
  {
    computerScore=computerScore+1;
     striker.x=200;
    striker.y=200;
  }
  
  if (striker.isTouching(goal2))
  {
    playerScore=playerScore+1;
    striker.x=200;
    striker.y=200;
  }
 

 
 if(gameState == "serve"){
   //display text
   textSize(18);
   fill("Skyblue");
   text("press ENTER to start speedrunning",50,150);
 
    fill("yellow");
 textSize(12);
 text("Please press the ENTER key to hear the trance music ", 50, 190);

   
   //serve the MinecraftBall When ENTER Is Pressed
   if(keyDown("ENTER")){
   
  
  
    striker.velocityX=0;
    striker.velocityY=13;
 gameState="play";
 
   
 }
}
 if (gameState=="play"){
   
    playerMallet.x=World.mouseX;
 }
 

 
  if (playerScore==5||computerScore==5) 
 {
    
   fill("skyblue");
   textSize(18);
   text("game over",170,160);
   striker.velocityX=0;
   striker.velocityY=0;
    gameState="end";
  }
 
 
 
   drawSprites();
}





// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
