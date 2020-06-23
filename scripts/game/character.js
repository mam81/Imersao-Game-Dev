class Character extends Animation {
  constructor(matrix, image, x, width, height_, spriteWidth, spriteHeight) {
    super(matrix, image, x, width, height_, spriteWidth, spriteHeight)
    
    this.Initial = height - this.height_;
    this.y = this.Initial;
    
    this.jumpSpeed = 0;
    this.gravity = 5;
  }
  
  jump() {
   this.jumpSpeed = -50;
  }
  
  applyGravity() {
    this.y += this.jumpSpeed;
    this.jumpSpeed += this.gravity;
    
    if(this.y > this.Initial) {
       this.y = this.Initial;
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