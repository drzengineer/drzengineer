var items = document.getElementsByClassName('carousel_item');

var start = 0;
var pos = [];

for (var i = 0; i < items.length; i++){
  items[i].style.left = start + 'px';
  pos.push(start);
  start+= 300;
}

setInterval(slider, 10);

function slider() {

  for (var i = 0; i < items.length; i++){
    if (items[i].style.left == '-300px'){
      pos[i] =  items.length * 300 - 300;
    }
    pos[i]--;
    items[i].style.left = pos[i] + 'px';
  }
}
