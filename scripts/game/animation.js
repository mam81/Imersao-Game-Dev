class Animation {
  constructor(matrix, image, x, Yvariation, width, height_, spriteWidth, spriteHeight) {
    this.matrix = matrix;
    this.image = image;
    this.width = width;
    this.height_ = height_;
    this.x = x;
    this.Yvariation = Yvariation;
    this.y = height - this.width - this.Yvariation;
    
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    
    this.currentFrame = 0
  }
  
  show() {
    image(this.image, this.x, this.y, this.width, this.height_, this.matrix[this.currentFrame][0], this.matrix[this.currentFrame][1], this.spriteWidth, this.spriteHeight);
       
    this.animation();
  }
  
  animation() {
    this.currentFrame++;
    
    if(this.currentFrame >= this.matrix.length - 1) {
      this.currentFrame = 0;
    }
  }
}