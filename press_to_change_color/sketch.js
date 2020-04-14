var c = {
  r: 0,
  g: 0,
  b: 0
}

var windowX = 0;
var windowY = 0;

function setup() {
  createCanvas(400, 400)
  windowX = windowWidth
  windowY = windowHeight
}

function draw() {
  if (mouseIsPressed && 0 < mouseX < windowX && 0 < mouseY < windowY) {
    background(c.r, c.g, c.b)
  } else {
    background(0)
  }
}

function mousePressed() {
  c.r = random(0, 255)
  c.g = random(0, 255)
  c.b = random(0, 255)
}