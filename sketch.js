function setup() {
  createCanvas(500, 500);
  background("black");
}

function draw() {
  stroke("white");
  fill("purple");
 
 
     if(mouseIsPressed) {
     rect(mouseX, mouseY, 20, 20);
   }  
}
