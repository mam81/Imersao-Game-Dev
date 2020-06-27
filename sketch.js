function setup() {  
  createCanvas(windowWidth, windowHeight);
  
  homeScreen = new HomeScreen();               
  game = new Game();
  game.setup();
  
  managerButton = new ManagerButton("New Game", width/2, height/2);
                  
  frameRate(40);
  gameSound.loop();
  
  scenes = {
    homeScreen,
    game,   
  };
}

function keyPressed() {
  game.keyPressed(key);
}

function draw() {
  scenes[currentScene].draw();
}
  

