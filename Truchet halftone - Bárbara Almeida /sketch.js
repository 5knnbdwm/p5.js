var sTile = 19;
var m = [
  []
];
var c0, c1;
var pause = false;


/*---------------------*/


function setup() {
  size(855, 570);
  noStroke();
  newColor();
  newPattern();
}


/*---------------------*/


function draw() {
  if (pause) noLoop();

  drawPattern();
}


/*---------------------*/


function mouseReleased() {
  if (mouseButton == LEFT) //change color and noiseSeed with left button
  {
    newColor();
    noiseSeed();
  }

  newPattern(); //both buttons change the truchet pattern

  if (pause) redraw();
}


/*---------------------*/


function keyPressed() {
  if (key == ' ') pause = !pause; //pause/resume
  if (key == 'S' || key == 's') saveFrame("truchet-######.png"); //save image

  if (!pause) loop();
}


/*---------------------*/


function newColor() //choose a random color
{
  c0 = color(random(255), random(255), random(255));
  c1 = color(random(255), random(255), random(255));
}


/*---------------------*/


function newPattern() //create a matrix for the truchet tiling
{
  m = new var[width / sTile][height / sTile];

  for (var x = 0; x < width; x += sTile) {
    for (var y = 0; y < height; y += sTile) {
      m[x / sTile][y / sTile] = parseInt(random(2));
    }
  }
}


/*---------------------*/


function drawPattern() {
  //squares
  for (var x = 0; x < width; x += sTile) {
    for (var y = 0; y < height; y += sTile) {
      if (m[x / sTile][y / sTile] == 0) fill(c0);
      else fill(c1);
      rect(x, y, sTile, sTile);
    }
  }


  //circles
  for (var x = 0; x < width + 1; x += sTile) {
    for (var y = 0; y < height + 1; y += sTile) {
      var s = 0;
      if ((x + y) % 2 == 0) {
        fill(c0);
        s = -1;
      } else {
        fill(c1);
        s = 1;
      }
      float d = map(noise(x / 320., y / 320., frameCount / 100.), 0.33, 0.66, -sTile / 2, sTile / 2);
      ellipse(x, y, sTile + s * d, sTile + s * d);
    }
  }
}
