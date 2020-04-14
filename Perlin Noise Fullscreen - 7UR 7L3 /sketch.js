var xn, yn, zn;
var xstart;
var n;

function setup() {
  createCanvas(500, 500);
  smooth();
  noStroke();
  colorMode(HSB);
  rectMode(CENTER);
  n = random(10000);
}

function draw() {
  background(0);
  noiseSeed(n);
  xn = noise(n);
  yn = noise(n);
  xstart = xn;
  for (var i = 0; i <= width / 10; i++) {
    yn += .02;
    zn += .02 / 40;
    xn = xstart;
    for (var j = 0; j <= height / 10; j++) {
      xn += .02;
      var rs = noise(xn, yn, zn) * 15;
      fill(255 / rs * 3, 255, 255);
      rect(i * 10 + 5, j * 10 + 5, rs, rs);
    }
  }
}
