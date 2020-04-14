var light = false

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0)
  stroke(255)
  strokeWeight(4)
  noFill()
  if (mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 250) {
    
    fill(255, 0, 200)
  }
  if (light) {
    background(123, 252, 143)
  }
  rect(150, 150, 100, 100)
}

function mousePressed() {
  if (mouseX > 150 && mouseX < 250 && mouseY > 150 && mouseY < 250) {
    light = !light
  }
}