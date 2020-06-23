class Enemy extends Animation {
  constructor(matrix, image, x, width, height_, spriteWidth, spriteHeight) {
    super(matrix, image, x, width, height_, spriteWidth, spriteHeight)
    
    this.speed = 10;
  }
  
  move() {
    this.x -= this.speed
    
    if(this.x < -this.width) {
      this.x = width;
    }
  } 
}