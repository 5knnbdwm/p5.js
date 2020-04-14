var targetX = 300
var targetY = 200
var blobX = 300
var blobY = 200

var lerpV = 0.1

function setup() {
  createCanvas(600, 400)
}

function mouseMoved() {
  targetX = mouseX
  targetY = mouseY
}

function draw() {
  // if (100 > dist(blobX, blobY, targetX, targetY)) {
    
    blobX = lerp(blobX, targetX, lerpV)
    blobY = lerp(blobY, targetY, lerpV)
  // }
  
  background(51)
  noStroke()
  fill(2550, 0, 0, 255)
  ellipse(targetX, targetY, 64, 64)

  fill(0, 255, 0, 255)
  ellipse(blobX, blobY, 64, 64)
}
