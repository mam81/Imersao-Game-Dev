class HomeScreen {
  constructor() { 
  }
  
  draw() {
    this._backgroundImage();
    this._text();
    this._button();
  }
  
  _backgroundImage() {
    image(homeScreenImage, 0, 0, width, height);
  }
  
  _text() {
    textFont(fontHomeScreen);
    textAlign(CENTER);
    textSize(60);
    text("The adventures of", width/2, height/3);
    textSize(120);
    text("Hipsta", width/2, (height/5) * 3 );
  }
  
  _button() {
    managerButton.y = (height/7) * 5;
    managerButton.draw();
  }
}