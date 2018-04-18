var canvas = document.querySelector('canvas');

canvas.width = innerWidth;
canvas.height = innerHeight;
var bubbleScreenRatio = innerWidth / 30;
if (innerWidth < 576) bubbleScreenRatio = 0;

var c = canvas.getContext('2d');


var maxRadius = 120;

var mouse = {
  x: undefined,
  y: undefined
}

window.addEventListener('mousemove', function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
})

window.addEventListener('resize', function (){
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  bubbleScreenRatio = innerWidth / 30;
  if (innerWidth < 576) bubbleScreenRatio = 0;

  init();
})

function Circle(x, y, dx, dy, radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;

  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = 'rgba(0,0,0,.07)';
    c.fill();
  }

  this.update = function(){
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) this.dx = -this.dx;
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) this.dy = -this.dy;

    this.x += this.dx;
    this.y += this.dy;

    //mouse movement
    if (mouse.x - this.x < 100 && mouse.x - this.x > -100
        && mouse.y - this.y < 100 && mouse.y - this.y > -100){
      if (this.radius < maxRadius){
        this.radius++;
      }
    }
    else if (this.radius > this.minRadius){
      this.radius--;
    }

    this.draw();
  }
}

var circleArray = [];

function init(){
  circleArray = [];
  for (var i = 0; i < bubbleScreenRatio; i++){
    var radius = Math.random() * 38 + 2;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 8;
    var dy = (Math.random() - 0.5) * 8;
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
