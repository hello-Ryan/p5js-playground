var window_x = 1000;
var window_y = 600;
var fireworks;
function Particle(x,y) {
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);

    this.applyForce = function(force) {
        acc.add(force);
    }
    
    this.update = function() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.show = function() {
        this.point(this.pos.x, this.pos.y);
    }
}

function setup() {
  createCanvas(window_x, window_y);
  stroke(255);
  strokeWeight(4);
  fireworks = new Particle(100 ,250);
  
}

function draw() {
  background(51);

}