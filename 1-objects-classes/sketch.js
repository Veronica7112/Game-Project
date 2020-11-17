//create a variable called b to hold one ball

function setup() {
  createCanvas(800, 400);
}

  // construct the ball using the 'new' keyword



function draw(){
	background(188, 184, 255);
 //draw the ball called b (go look in the Ball class for the drawBall function)
 //move the ball called b (go look in the Ball class for the moveBall function)
b.drawButterfly()
b.moveButterfly()

anotherButterfly.drawButterfly()
anotherButterfly.moveButterfly()

}
//ball class from which to create new balls with similar properties.
class Butterfly {
  constructor(x,y,color){
  		this.x = x;
      this.y = y;
      this.color = color;
    }
  // here is where you'll put the instructions for making balls
  drawButterfly(){
          stroke(0);
          fill(this.color);
          ellipse(this.x,this.y,10,10);
  }
  moveButterfly(){
      this.x = this.x+2;
      this.y = this.y+.5;
    }
}
let b;
let anotherButterfly;







b = new Butterfly(0, 100,"red");
anotherBall = new Butterfly(200,20,"green");
