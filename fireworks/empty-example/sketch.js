var angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background('black');
  rectMode(CENTER);
  fill(0,0,255);
  rotateX(angle);
  rotateY(angle);

  rect(0,0,150,150);

  angle += 0.01;

}
