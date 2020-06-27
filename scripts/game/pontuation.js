class Pontuation {
  constructor() {
    this.points = 0
  }
  
  show() {
    fill('#fff');
    textSize(50);
    text(`Pontuation: ${parseInt(this.points)}`, width / 2, 90);
  }
  
  addPoints() {
    this.points += 0.05;
  }
}