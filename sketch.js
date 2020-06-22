let scenarioImage;
let characterImage;
let scenario;
let soundtrack;
let character;

function preload() {
  scenarioImage = loadImage('images/scenario/forest.png');
  characterImage = loadImage('images/character/running.png');
  soundtrack = loadSound('sounds/soundtrack.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(scenarioImage, 3);
  character = new Character(characterImage);
  frameRate(40)
  soundtrack.loop();
}

function draw() {
  scenario.show();
  scenario.move();
  character.show();
}


  