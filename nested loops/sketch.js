var color1 = 0;
var color2 = 0;
var color3 = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  strokeWeight();
  stroke(255);

  for (var i = 0; i <= width; i = i + 30) {
    for (var j = 0; j <= width; j = j + 30) {
      color1 = map(i, 0, width, 0, 255)
      color2 = map(j, 0, width, 0, 255)
      fill(color1, color2, color3)
      ellipse(i, j, 10, 10);

    };
  };
}

function mousePressed() {
  color3 = random(0, 255)
}
