function preload() {
  scenarioImage = loadImage('images/scenario/forest.png');
  characterImage = loadImage('images/character/running.png');
  smallEnemyImage = loadImage('images/enemies/drop.png');
  bigEnemyImage = loadImage('images/enemies/troll.png');
  flyingEnemyImage = loadImage('images/enemies/flyingdrop.png');
  gameOverImage = loadImage('images/assets/game-over.png');
  homeScreenImage = loadImage('images/assets/home-screen.png');
  heartImage = loadImage('images/assets/heart.png');
  
  fontHomeScreen = loadFont('images/assets/font-home-screen.otf');
  
  gameSound = loadSound('sounds/soundtrack.mp3');
  jumpSound = loadSound('sounds/jumpsound.mp3');
}
