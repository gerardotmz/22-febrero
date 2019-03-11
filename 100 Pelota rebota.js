//******************sketch.js
var p = [];

function setup() {
  createCanvas(400, 400);
	for(var i = 0 ; i < 100 ; i++){
  p= new pelota();
  
  
  }
}

function draw() {
  background(220);
  
  for (let i = 0; i < 100; i++) {
  p.show();
  p.move();
  if(p.salirx()){
    p.rebotax();
  }
  if (p.saliry()){
    p.rebotay();
      
  }  
}
}

//******************index.html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    <script src="sketch.js"></script>
    <script src="Pelota.js"></script>
  </body>
</html>

//*********************Pelota.js
class pelota{
  constructor(){
  this.x = random(25,height-25);
  this.y = random(25,width-25); 
  this.vx = random(1,20);
  this.vy = 1;
	this.r = 25
  }
  
show(){
  ellipse(this.x,this.y,50,50);
}

move(){
  this.x = this.x + this.vx;
  this.y = this.y + this.vy;
}
  
salirx(){
  if(this.x >= height-this.r || this.x <= this.r){    
		this.vx = -this.vx;
     }
}

saliry(){
  if(this.y >= width-this.r || this.y <= this.r){
    this.vy = - this.vy;
  }
} 
rebotax(){
this.vx = -this.vx;
}
rebotay(){
this.vy = -this.vy;
} 
}
