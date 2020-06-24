class Pontuation {
  constructor() {
    this.points = 0
  }
  
  show() {
    fill('#fff');
    textSize(50);
    text(`Pontuação:${parseInt(this.points)}`, width / 2  - 160, 90);
  }
  
  addPoints() {
    this.points += 0.01;
  }
}