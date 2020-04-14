var bubble = []
var mouse = [0, 0]

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  // if (mouseIsPressed) {
  if (true) {
    let drip = new Bubble(mouseX, mouseY)
    bubble.push(drip)
  }
  for (let i = 0; i < bubble.length; i++) {
    bubble[i].fade()
    if (bubble.length != 0) {
      bubble[i].show()
    }
  }
}

class Bubble {
  constructor(tempX, tempY) {
    this.x = tempX;
    this.y = tempY;
    this.r = 50;
  }
  fade() {
    if (this.r == 0) {
      bubble.splice(0, 1)
    } else {  
      this.r--
    }
  }
  show() {
    noStroke()
    // stroke(255)
    // strokeWeight(3)
    // noFill()
    fill(255, map(this.r, 50, 0, 255, 0), 0, 60)
    ellipseMode(CENTER)
    ellipse(this.x, this.y, this.r)
  }
}
