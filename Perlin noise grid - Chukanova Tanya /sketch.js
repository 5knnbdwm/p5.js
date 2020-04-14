var scl = 20;
var inc = 0.1;
var cols, rows;
var array1 = [];

function setup() {
  createCanvas(600, 600, WEBGL);
  cols = width / scl;
  rows = height / scl;
  var aoff = 0;
  for (var a = 0; a < cols; a++) {
    var array2 = new Array(rows);
    array1[a] = array2;
    var boff = 0;
    for (var b = 0; b < rows; b++) {
      array1[a][b] = map(noise(aoff, boff), 0, 1, -80, 80);
      boff += inc;
    }
    aoff += inc;
  }
}

function draw() {
  background(0);
  orbitControl(3, 3);
  stroke(255);
  noFill();
  rotateX(PI / 3);
  frameRate(5);
  translate(-(width / 2), -(height / 2));
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, array1[x][y]);
      vertex(x * scl, (y + 1) * scl, array1[x][y + 1]);
    }
    endShape();
  }
}
