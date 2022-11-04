var window_x = 1000;
var window_y = 600;
var firework;
var fireworks = [];
var colors = ['red','green', 'pink','blue']
function Particle(x,y) {
    this.pos = createVector(x,y);
    this.vel = createVector(0,random(-11,-5));
    this.acc = createVector(0,random(10,15)/100);

    this.applyForce = function(force) {
        this.acc.add(force);
    }
    
    this.update = function() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
    }

    this.show = function() {
        point(this.pos.x, this.pos.y);
    }
}

function FireworkParticle(x,y,velx,vely) {
  this.pos = createVector(x,y);
  this.vel = createVector(velx, vely);
  this.acc = createVector(0,random(0,2));

  this.applyForce = function(force) {
      this.acc.add(force);
  }
  
  this.update = function() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
  }

  this.show = function() {
      point(this.pos.x, this.pos.y);
  }
}


function Firework() {
  this.firework = new Particle(random(width), window_y);
  this.exploded = false;

  this.update = function() {
    if (!this.exploded) {
      this.firework.update()
      if (this.firework.vel.y >= 0){
        this.exploded = true;
        this.explode(this.firework);
        this.firework = null;

        } 
      }
    }
  this.show = function() {
  if (this.firework) {
    this.firework.show()
    }
  }

  this.explode = function(firework) {
    let interval = (2 * Math.PI)/20
    for (var i = 0; i < 50; i++) {
      fireworks.push(new FireworkParticle(firework.pos.x, firework.pos.y, 5*Math.cos(i*interval), 5*Math.sin(i*interval)));
  }
  
  }
}

function setup() {
  createCanvas(window_x, window_y);
  
  stroke(colors[Math.floor(random(colors.length-1))]);
  strokeWeight(4);


}

function draw() {
  background(51);

  if (random(1) < 0.05) {fireworks.push(new Firework());}
  for (var i = 0; i < fireworks.length; i++) {
    fireworks[i].update();
    fireworks[i].show();
  }

}
