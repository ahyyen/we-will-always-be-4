let mic, notes;
let song;
let play;


function preload() {
  mic = loadImage("https://cdn.glitch.global/84a4cf8c-eadd-42e9-afc5-a5e69cec6cbb/mic.jpg?v=1697174361561");
  notes = loadImage("https://cdn.glitch.global/84a4cf8c-eadd-42e9-afc5-a5e69cec6cbb/notes.gif?v=1697174445866");
  song = loadSound("https://cdn.glitch.global/84a4cf8c-eadd-42e9-afc5-a5e69cec6cbb/maidens-of-sanctity.mp3?v=1697174466269");
}

function setup() {
  createCanvas(windowWidth, 2*windowHeight);
  background(0);
  play = false;
}

function draw(){
  imageMode(CENTER);
  img(mic, windowWidth*0.75, windowHeight*0.8, 300, 300);
  
  if (play == true){
    tint(255, 255, 255, 0);
    img(notes, windowWidth*0.7, windowHeight*0.75, 200, 200);
    song.play();
  }else{
    tint(255, 255, 255, 255);
    img(notes, windowWidth*0.7, windowHeight*0.75, 200, 200);
    song.pause();
  }
}

function mouseClicked(){
  if(play == true){
    play=false;
  }else{
    play = true;
  }
}