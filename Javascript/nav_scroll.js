var navScroll = document.getElementsByClassName('nav_scroll')

for(var i = 0; i < navScroll.length; i++){
  navScroll[i].addEventListener('click', scroll_to, false);
}

function scroll_to(e){

  var element = '';

  switch (e.target.id) {
    case 'logo_nav':
      element = document.getElementById('intro');
      break;
    case 'about_nav':
      element = document.getElementById('about');
      break;
    case 'tech_nav':
      element = document.getElementById('tech');
      break;
    case 'projects_nav':
      element = document.getElementById('projects');
      break;
    case 'contact_nav':
      element = document.getElementById('contact');
      break;
    case 'arrow':
      element = document.getElementById('about');
      break;
    default:
      alert('someone probably changed id names');
  }

  element = element.getBoundingClientRect();

  var scroll = element.top - 70;

  window.scrollBy({
    top: scroll,
    behavior: 'smooth'
  });

  resetMenu();
}

var navToggle = false;

window.onscroll = function () {
  if (window.pageYOffset > 120 && navToggle == false) {
    // do dat thang
    document.getElementById('nav').style.height = 70 + 'px';
    document.getElementById('nav').style.opacity = '1';
    document.getElementById('nav').style.backgroundColor = '#222228';
    navToggle = true;
  }
  else if (window.pageYOffset <= 120 && navToggle == true){
    // do dat dang that
    document.getElementById('nav').style.height = 120 + 'px';
    document.getElementById('nav').style.opacity = '.4';
    document.getElementById('nav').style.backgroundColor = 'transparent';
    navToggle = false;
  }
};
