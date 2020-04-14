let dots = []
let noiseList = []

var noiseScale = 0.01
var zOff = 0.00
var xOff = 0.2

var offset = 5
// int is space between cols
var particle = 40
// how many dots in one col should exist

var cols
var rows

function setup() {
  createCanvas(1000, 400)
  background(230, 230, 210)
  smooth()
  frameRate(30)

  cols = width / offset
  rows = particle

  for (let i = 0; i < (cols * rows); i++) {
    // var x = random(width)
    var x = width / 2
    // var y = random(height)
    var y = height / 2
    let d = new Dot(x, y, i)
    dots.push(d)
  }
  console.log(dots.length)
  // noLoop()
}

function draw() {
  background(230, 230, 210)
  zOff = zOff + xOff

  for (var x = 0; x < cols; x++) {
    for (var y = 0; y < rows; y++) {
      var loc = x + y * cols
      // ty = map(noise(x * noiseScale, y * noiseScale), 0, 1, 0, height)
      // ty = map(noise((zOff + x) * noiseScale, y * noiseScale), 0, 1, 100, height - 100)
      ty = map(noise((zOff + x) * noiseScale, (-zOff + y) * noiseScale, y * noiseScale), 0, 1, 100, height - 100)

      noiseList[loc] = [x * offset, ty]
    }
  }

  for (let dot of dots) {
    dot.scatter()
    dot.update()
    if (keyIsDown(39)) {
      dot.avoid()
    }
    dot.border()
    dot.show()
  }

  if (keyIsDown(39)) {
    console.log(1)
  }

  if (keyIsDown(32)) {
    console.log(dots[0])
    // console.log(parseInt(frameRate()))
  }
}

class Dot {
  constructor(x, y, i) {
    this.id = i
    this.pos = createVector(x, y)
    this.target = createVector(0, 0)
    // this.mouse = createVector(0, 0)
    this.drag = 0.2
    this.vel = createVector(0, 0)
    this.acc = createVector(0, 0)
  }

  scatter() {
    this.target.x = noiseList[this.id][0]
    this.target.y = noiseList[this.id][1]
  }

  update() {
    this.target.sub(this.pos)
    this.drag = 0.05
    this.target.setMag(this.drag)

    this.acc = this.target

    this.vel.add(this.acc)
    this.vel.limit(50)
    this.vel.mult(0.98)
    this.pos.add(this.vel)
  }

  avoid() {
    this.mouse = createVector(mouseX, mouseY)

    this.mouse.sub(this.pos)

    // this.mouse.setMag(1 / (dist * dist))
    // this.mouse.x = map(this.mouse.x, 0, width, 0, )
    this.mouse.x = map(this.mouse.x, 0, width, 0, 1) / (dist(this.target.x, this.target.y, this.pos.x, this.pos.y) * dist(this.target.x, this.target.y, this.pos.x, this.pos.y) * 100)
    this.mouse.y = map(this.mouse.y, 0, height, 0, 1) / (dist(this.target.x, this.target.y, this.pos.x, this.pos.y) * dist(this.target.x, this.target.y, this.pos.x, this.pos.y) * 100)
    this.acc.copy(this.mouse)
    // this.acc.x = this.acc / (this.target.x - this.pos.x)
    // this.acc.y = this.acc / (this.target.y - this.pos.y)
    // console.log(this.acc)

    this.vel.sub(this.acc)
    this.vel.limit(50)
    this.pos.add(this.vel)
  }

  border() {
    // if ((this.pos.x - this.vel.x) <= 0) {
    //   this.vel.x = -this.vel.x
    // }
    // if ((this.pos.x + this.vel.x) >= width) {
    //   this.vel.x = -this.vel.x
    // }
    // if ((this.pos.y - this.vel.y) <= 0) {
    //   this.vel.y = -this.vel.y
    // }
    // if ((this.pos.y + this.vel.y) >= height) {
    //   this.vel.y = -this.vel.y
    // }
    // this.pos.add(this.vel)
  }

  show() {
    stroke(0)
    point(this.pos.x, this.pos.y)

    // strokeWeight(1)
    // noFill()
    // ellipse(this.pos.x + offset / 2, this.pos.y, 1)
  }
}