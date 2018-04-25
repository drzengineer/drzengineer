var canvas = document.querySelector('canvas');

canvas.width = innerWidth;
canvas.height = innerHeight;
var bubbleScreenRatio = innerWidth / 30 % 500;
if (innerWidth < 576) bubbleScreenRatio = 0;

var c = canvas.getContext('2d');


var maxRadius = 120;

var mouse = {
  x: 0,
  y: 0
}

window.addEventListener('mousemove', function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
})

window.addEventListener('resize', function (){
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  bubbleScreenRatio = innerWidth / 30 % 500;
  if (innerWidth < 576) bubbleScreenRatio = 0;

  init();
})

var posRelativeToMouse = {
  x: undefined,
  y: undefined
}
var distance = undefined;
var forceDirection = {
  x: undefined,
  y: undefined
}
var maxDistance = 150;
var force = undefined;

function Circle(x, y, dx, dy, radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.originalDx = dx;
  this.dy = dy;
  this.originalDy = dy;
  this.radius = radius;
  this.minRadius = radius;

  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = 'rgba(0,0,0,.07)';
    c.fill();
  }

  this.update = function(){
    posRelativeToMouse = {
      x: this.x - mouse.x,
      y: this.y - mouse.y
    };

    distance = Math.sqrt(
      posRelativeToMouse.x * posRelativeToMouse.x +
      posRelativeToMouse.y * posRelativeToMouse.y
    );

    forceDirection = {
      x: posRelativeToMouse.x / distance,
      y: posRelativeToMouse.y / distance,
    };

    force = (maxDistance - distance) / maxDistance;
    if (force < 0) {
      if ( Math.abs(this.dx) > Math.abs(this.originalDx)) this.dx *= 0.99;
      if ( Math.abs(this.dy) > Math.abs(this.originalDy)) this.dy *= 0.99;
    }
    else {
      this.dx += forceDirection.x * force;
      this.dy += forceDirection.y * force;
    }

    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) this.dx = -this.dx;
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) this.dy = -this.dy;

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

var circleArray = [];

function init(){
  circleArray = [];
  for (var i = 0; i < bubbleScreenRatio; i++){
    var radius = Math.floor(Math.random() * 38 + 2);
    var x = Math.floor(Math.random() * (innerWidth - radius * 2) + radius);
    var y = Math.floor(Math.random() * (innerHeight - radius * 2) + radius);
    var dx = Math.floor((Math.random() - 0.5) * 7) + 1;
    var dy = Math.floor((Math.random() - 0.5) * 7) + 1;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++){
    circleArray[i].update();
  }
}

init();
animate();
