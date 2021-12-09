var song;
var slidervolume;
var sliderRate;

function preload(){
  song = loadSound("https://cdn.glitch.me/7c91e9d9-374c-486a-97c6-38963c486244%2Fdocs_yuidoc-p5-theme_assets_Damscray.mp3?v=1638551157115");
}

function mousePressed(){
  song.play();
}

function setup() {
  // put setup code here
  createCanvas(300,300);
  background(24);
  console.log("Hello World");
}

// function draw() {
//   // put drawing code here
//   fill(196);
//   ellipse(mouseX, mouseY, 5, 5)
// }