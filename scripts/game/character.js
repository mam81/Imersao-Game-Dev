class Character extends Animation {
  constructor(matrix, image, x, Yvariation, width, height_, spriteWidth, spriteHeight) {
    super(matrix, image, x, Yvariation, width, height_, spriteWidth, spriteHeight)
    
    
    this.Yvariation = Yvariation;
    this.Initial = height - this.height_ - this.Yvariation;    this.y = this.Initial;
    
    this.jumpSpeed = 0;
    this.gravity = 5;
    this.jumpHeight = -50;
    this.jumps = 0;
  }
  
  jump() {
    if(this.jumps < 2) {
      this.jumpSpeed = this.jumpHeight;
      this.jumps++
    } 
  }
  
  applyGravity() {
    this.y += this.jumpSpeed;
    this.jumpSpeed += this.gravity;
    
    if(this.y > this.Initial) {
       this.y = this.Initial;
       this.jumps = 0;
        }
    
  }
  
  isColliding(enemy) {
    const precision = 0.7;
    const hit = collideRectRect(
       this.x,
       this.y,
       this.width * precision,
       this.height_ * precision,
       enemy.x,
       enemy.y,
       enemy.width * precision,
       enemy.height_ * precision
     );
    
    return hit;
  } 
}