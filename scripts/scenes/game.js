class Game {
  constructor() {
    this.currentEnemy = 0;
  }
  
  setup() {
    scenario = new Scenario(scenarioImage, 3);   
  character = new Character(characterMatrix, characterImage, 25, 30, 110, 135, 220, 270);
                  
  pontuation = new Pontuation();
                  
  const smallEnemy = new Enemy(smallEnemyMatrix, smallEnemyImage, width - 52, 30, 52, 52, 104, 104, 8, 700);
  const flyingEnemy = new Enemy(flyingEnemyMatrix, flyingEnemyImage, width - 52, 250, 100, 75, 200, 150, 12, 800);
  const bigEnemy = new Enemy(bigEnemyMatrix, bigEnemyImage, width * 2, 0, 200, 200, 400, 400, 16, 900);
                  
  enemies.push(smallEnemy);
  enemies.push(flyingEnemy);
  enemies.push(bigEnemy);
  }
  
  keyPressed(key) {
    if (key == 'ArrowUp') {
    character.jump();
    jumpSound.play();
    }
  }
  
  draw() {
    scenario.show();
    scenario.move();
  
    character.show();
    character.applyGravity();
  
    const enemy = enemies[this.currentEnemy];
    const invisibleEnemy = enemy.x < - enemy.width;

    enemy.show();
    enemy.move();
  
    if(invisibleEnemy) {
      this.currentEnemy++;
    
      if(this.currentEnemy > 2) {
        this.currentEnemy = 0;
      }
    
      enemy.speed = parseInt(random(10, 35));
    }
    
    if(character.isColliding(enemy)) {
      image(gameOverImage, width/2 - 200, height/2);
      noLoop();
    }
    
    pontuation.show();
    pontuation.addPoints(); 
    }
}