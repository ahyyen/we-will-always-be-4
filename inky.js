function setup() {
  createCanvas(windowWidth, 1.3*windowHeight);
  background(0);
  frameRate(5);
 // p5canvas.id("inky");
}


function draw(){
  fill('white');
  noStroke();
  let circleSize = random(50, 280);
  circle(mouseX, mouseY, circleSize);
}

