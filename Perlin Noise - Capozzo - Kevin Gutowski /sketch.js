var noiseScale = 0.01;
var widthFactor = 3;
var seed = 0
function setup() {
  createCanvas(1200, 300);
  background(230, 230, 210);
  smooth();
}
var n = 0.00;
var d = 0.2;

function draw() {
  n = n + d;
  background(230, 230, 210);

  for (var y = 0; y < 40; y++) {
    for (var x = 0; x < width / widthFactor; x++) {
      var noiseVal = noise((n + x) * noiseScale, (-n + y) * noiseScale, y * noiseScale);
      stroke((noiseVal * 400), 100, (noiseVal * 400));
      point(x * widthFactor, noiseVal * 300);
    }
  }
}

