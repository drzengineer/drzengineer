var navScroll = document.getElementsByClassName('nav_scroll')

for(var i = 0; i < navScroll.length; i++){
  navScroll[i].addEventListener('click', scroll, false);
}

function scroll(e){

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

  var navSize = document.getElementById('nav');
  navSize = navSize.getBoundingClientRect();

  var scroll = element.top - navSize.height;

  window.scrollBy({
    top: scroll,
    behavior: 'smooth'
  });
}
