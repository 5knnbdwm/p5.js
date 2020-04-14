var bubble;

function setup() {
  createCanvas(400, 400);
  bubble = new Bubble()
}

function draw() {
  background(0);
  bubble.move();
  bubble.bounce();
  bubble.show();
}

class Bubble {
  constructor() {
    this.x = 200;
    this.y = 200;
    this.speedX = random(-5, 5);
    this.speedY = random(-5, 5);
  }
  move() {
    this.x = this.x + this.speedX
    this.y = this.y + this.speedY
  }
  bounce() {
    if (this.x > width || this.x < 0) {
      this.speedX = -this.speedX
    }
    if (this.y > height || this.y < 0) {
      this.speedY = -this.speedY
    }
  }
  show() {
    stroke(255)
    strokeWeight(3)
    noFill()
    ellipseMode(CENTER)
    ellipse(this.x, this.y, 10)
    // ellipse(this.x, this.y, 10, 10)
  }
}
