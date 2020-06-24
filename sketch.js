let scenarioImage;
let characterImage;
let smallEnemyImage;
let bigEnemyImage;
let flyingEnemyImage;
let gameOverImage;

let scenario;
let character;
let smallEnemy;
let bigEnemy;
let flyingEnemy;
let gameSound;
let jumpSound;
let pontuation;

const characterMatrix = [
      [0, 0],
      [220, 0],
      [440, 0],
      [660, 0],
      [0, 270],
      [220, 270],
      [440, 270],
      [660, 270],
      [0, 540],
      [220, 540],
      [440, 540],
      [660, 540],
      [0, 810],
      [220, 810],
      [440, 810],
      [660, 810],  
    ];
const smallEnemyMatrix =  [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
];
const bigEnemyMatrix = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];
const flyingEnemyMatrix =[
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];

const enemies = [];

function preload() {
  scenarioImage = loadImage('images/scenario/forest.png');
  characterImage = loadImage('images/character/running.png');
  smallEnemyImage = loadImage('images/enemies/drop.png');
  bigEnemyImage = loadImage('images/enemies/troll.png');
  flyingEnemyImage = loadImage('images/enemies/flyingdrop.png');
  gameOverImage = loadImage('images/assets/game-over.png');
  
  gameSound = loadSound('sounds/soundtrack.mp3');
  jumpSound = loadSound('sounds/jumpsound.mp3');
}

function setup() {  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(scenarioImage, 3);   
  character = new Character(characterMatrix, characterImage, 25, 30, 110, 135, 220, 270);
                  
  pontuation = new Pontuation();
                  
  const smallEnemy = new Enemy(smallEnemyMatrix, smallEnemyImage, width - 52, 30, 52, 52, 104, 104, 10, 600);
  const flyingEnemy = new Enemy(flyingEnemyMatrix, flyingEnemyImage, width - 52, 250, 100, 75, 200, 150, 10, 1500);
  const bigEnemy = new Enemy(bigEnemyMatrix, bigEnemyImage, width * 2, 0, 200, 200, 400, 400, 10, 2800);
                  
  enemies.push(smallEnemy);
  enemies.push(flyingEnemy);
  enemies.push(bigEnemy);
             
  frameRate(40);
  gameSound.loop();
}

function keyPressed() {
  if (key == 'ArrowUp') {
    character.jump();
    jumpSound.play();
  }
}

function draw() {
  scenario.show();
  scenario.move();
  
  character.show();
  character.applyGravity();

  enemies.forEach(enemy => {
    enemy.show();
    enemy.move();
    
    if(character.isColliding(enemy)) {
      image(gameOverImage, width / 2 - 200, height / 2);
      noLoop();
  }
    
    pontuation.show();
    pontuation.addPoints();
    
  });
  
  
}
  


