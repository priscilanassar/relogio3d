let song, analyzer;


let forma;

var rcor = 82;
var gcor =  33;
var bcor= 198;
let incosolata;


var controle2 = 0.005;
var Radius;

function preload() {

  forma = loadModel("data/untitled.obj");
  incosolata = loadFont("data/incosolata.ttf");
 
  
}

function setup() {
  
  
  
  song = loadSound('data/untitled.mp3');
   createCanvas(windowWidth, windowHeight, WEBGL);
 

   
  
  var radius = min(width, height) / 2;
  Radius = radius * 0.72;
  cx = width / 2;
  cy = height / 2;
  
  textFont(incosolata);
  textSize(20);
  
  
  background(255, 0, 0);
  
  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
  
  

    
  }
  
function draw(){
  
 
  
   var d=day();
   var m3= month();
   var y= year();
  var s = second();
  var m = minute();
  var h = hour();
  
  
 let x = map(mouseX, 0, width, -900,900);
  camera(x, 0 ,(height/2) / tan(PI / 6), 0 , 0, 0, 0, 1,0);
  
  noStroke();
  lights();

  if ((h == 5) || (h == 6) || (h == 7) || (h == 8) || (h == 9) || (h == 10) || (h == 11) || (h == 12)) {

    background(155, 212, 255);
  }
  
   if ((h == 20) || (h == 21) || (h == 22) || (h == 23) || (h == 0) || (h == 1) || (h == 2) || (h == 3) || (h == 4)) {

    background(0);
  }
  
  if ((h == 13) || (h == 14) || (h == 15) || (h == 16) || (h == 17) || (h == 18)|| (h == 19)) {
    background(255, 158, 0);

  }
  
  push();
  var s2 = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  var m2 = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI; 
  var h2 = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
  pop();
  push(); 
  fill(rcor, gcor, bcor);
  lights();
  translate(cos(s2) * Radius, sin(s2) * Radius);
  sphere(20);
  pop();
  push ();
  lights();
  fill(rcor, gcor, bcor);
  translate( cos(m2) * Radius, sin(m2) * Radius);
  sphere(40);
  pop ();
  push (); 
  lights();
  fill(rcor, gcor, bcor);
  translate(cos(h2) * Radius, sin(h2) * Radius);
  sphere(50);
  pop ();
  
  push();
  lights();
   let rms = analyzer.getLevel();
  fill(rcor,gcor,bcor);
  scale(20 + rms * 100);
  rotateX(s);
  rotateY(s);
  model(forma);
  pop();
  
    push();
  

  fill(0,255,223);
  text( "day", 70,70);
  text( "day ", 70,70);
  
  translate(105,145);
  scale(d+10);
  rotateX(100);
  
  model(forma);
  pop();
  
      push();
  

  fill(255,43,0);
   text( "year", -70,-70);
  text( "year", -70,-70);
  translate(-105,-145);
  scale(y-2000);
  rotateX(200);
  
  model(forma);
  pop();
  
        push();


  fill(255,247,0);
   text( "month", -220,70);
   text( "month", -220,70);
  
  translate(-200,150);
  scale(m3+10);
  rotateX(200);
  model(forma);
  pop();
  


 
 
 push();
 noFill();
 stroke(255);
 strokeWeight(5);
  translate(100,0);
  
  
}



function mousePressed() {
  
  
  
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
   
  } else {
    song.play();
  }

  
}

function mouseReleased(){

 
  
}
