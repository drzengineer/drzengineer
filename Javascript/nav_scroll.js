var aboutListener = document.getElementsByClassName('about_scroll')

for(var i = 0; i < aboutListener.length; i++){
  aboutListener[i].addEventListener('click', aboutScroll, false);
}

function aboutScroll(){
  var element = document.getElementById('about');
  element = element.getBoundingClientRect();

  window.scrollBy({
    top: element.top,
    behavior: 'smooth'
  });
}
