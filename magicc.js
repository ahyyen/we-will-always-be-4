function setup() {
  createCanvas(windowWidth, 2.5*windowHeight);
  frameRate(20);
 // p5canvas.id("inky");
}


function draw(){
  background(0, 0, 0, 10);
  if (mouseIsPressed === true){
    
    fill(255, random(210), random(210));
  noStroke();
  let circleSize = random(3, 15);
    let circlePlaceX = random(-20, 20)
    let circlePlaceY = random(-20, 20)
  circle(mouseX+circlePlaceX, mouseY+circlePlaceY, circleSize);
    
  }
  
}

