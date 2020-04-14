// Most of this is by Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// I added the functionality to make the particles change into another text and changed the positioning of the text to always be in the middle of the canvas

var font;
var dots = [];

var texts = ['test_1', 'TEST_2', '3_test'];
var nextT = 0;
var maxChangeForce = 20;

var instructions = [];
var insText = 'Hello';

function preload() {
  font = loadFont('./assets/Roboto-Black.ttf');
}

function setup() {
  createCanvas(1000, 500);
  background(51);

  var bounds = font.textBounds(texts[nextT], 0, 0, 192);
  var posx = width / 2 - bounds.w / 2;
  var posy = height / 2 + bounds.h / 2;

  var points = font.textToPoints(texts[nextT], posx, posy, 192, {
    sampleFactor: .1
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var dot = new Dot(pt.x, pt.y);
    dots.push(dot);
  }

  // var boundsIns = font.textBounds(insText, 0, 0, 30);
  // var posxIns = width / 2 - boundsIns.w / 2;
  // var posyIns = height / 6 + boundsIns.h / 2;

  // var insAr = split(insText, ' ');

  // for (var i = 0; i < insAr.length; i++) {
  //   var bounds2 = font.textBounds(insAr[i], 0, 0, 30);
  //   var posx2 = posxIns;
  //   var posy2 = posyIns;

  //   posxIns += bounds2.w + 10;

  //   var points2 = font.textToPoints(insAr[i], posx2, posy2, 30, {
  //     sampleFactor: 0.3
  //   });

  //   for (var j = 0; j < points2.length; j++) {
  //     var pt = points2[j];
  //     var v = new Dot(pt.x, pt.y, 3);
  //     instructions.push(v);
  //   }
  // }
}

function draw() {
  background(51);

  // for (var i = 0; i < instructions.length; i++) {
  //   var v = instructions[i];
  //   v.behaviors();
  //   v.update();
  //   v.show();
  // }

  for (var i = 0; i < dots.length; i++) {
    var v = dots[i];
    v.behaviors();
    v.update();
    v.show();
  }
}

function mouseClicked() {
  nextT++;
  if (nextT > texts.length - 1) {
    nextT = 0;
  }

  var bounds = font.textBounds(texts[nextT], 0, 0, 192);
  var posx = width / 2 - bounds.w / 2;
  var posy = height / 2 + bounds.h / 2;

  var points = font.textToPoints(texts[nextT], posx, posy, 192, {
    sampleFactor: 0.1
  });

  if (points.length < dots.length) {
    var toSplice = dots.length - points.length;
    dots.splice(points.length - 1, toSplice);

    for (var i = 0; i < points.length; i++) {
      dots[i].target.x = points[i].x;
      dots[i].target.y = points[i].y;

      var force = p5.Vector.random2D();
      force.mult(random(maxChangeForce));
      dots[i].applyForce(force);
    }
  } else if (points.length > dots.length) {

    for (var i = dots.length; i < points.length; i++) {
      var v = dots[i - dots.length].clone();

      dots.push(v);
    }

    for (var i = 0; i < points.length; i++) {
      dots[i].target.x = points[i].x;
      dots[i].target.y = points[i].y;

      var force = p5.Vector.random2D();
      force.mult(random(maxChangeForce));
      dots[i].applyForce(force);
    }

  } else {
    for (var i = 0; i < points.length; i++) {
      dots[i].target.x = points[i].x;
      dots[i].target.y = points[i].y;

      var force = p5.Vector.random2D();
      force.mult(random(maxChangeForce));
      dots[i].applyForce(force);
    }
  }
}