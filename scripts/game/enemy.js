class Enemy extends Animation {
  constructor(matrix, image, x, Yvariation,  width, height_, spriteWidth, spriteHeight, speed, delay) {
    super(matrix, image, x, Yvariation, width, height_, spriteWidth, spriteHeight)
    
    this.speed = speed;
    this.delay = delay;
    this.x = width + this.delay;
  }
  
  move() {
    this.x -= this.speed
    
    if(this.x < -this.width - this.delay) {
      this.x = width;
    }
  } 
}