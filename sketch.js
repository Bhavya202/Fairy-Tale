var fairyVoice, bgImg;
var engine, world;
var starImg, star, starBody;
var fairyImg, fairy, fairBody , fairy;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  //preload animation, images and sound
  bgImg = loadImage("starNight.png");
  starImg = loadImage("star.png");
  fairyImg = loadImage("fairyImage1.png")
  fairyVoice = loadSound("JoyMusic.mp3");
}

function setup() {
	//create canvas
	createCanvas(800, 750);

	//the code to play fairy Voice
	fairyVoice.loop();

	//create fairy sprite
	fairy = createSprite(100,600,50,50);
	fairy.addImage("fairyflying", fairyImg);
	fairy.scale = 0.20;

	//create star sprite
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
}

function draw() {
  //creates the background
  background(bgImg);

  star.x = starBody.position.x 
  star.y = starBody.position.y 

  //write code to stop star in the hand of fairy
  if (star.y > 560 && starBody.position.y > 560) {
		Matter.Body.setStatic(starBody, true);
  }

  //text message
  if (fairy.isTouching(star)){
	  fill("white");
	  textSize(25);
	  text("Save The World With The Magical Star Fairy", 150, 275);
	  text("SAVE THE WORLD!!!", 250, 325);
  }

  //call the function in draw
  keyPressed();

  //draw the sprites
  drawSprites();
}

function keyPressed() {
	//the code to move star down
	if (keyDown("DOWN_ARROW")) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
	if (keyDown("LEFT_ARROW")) {
		fairy.x = fairy.x-3;
	}

	if (keyDown("RIGHT_ARROW")) {
		fairy.x = fairy.x+3;
	}
}