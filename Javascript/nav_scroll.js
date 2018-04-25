$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 70
        }, 1500);
    }

    resetMenu();
});

var navToggle = false;

window.onscroll = function () {
  if (window.pageYOffset > 70 && navToggle == false) {
    document.getElementById('nav').style.height = 70 + 'px';
    document.getElementById('nav').style.opacity = '1';
    document.getElementById('nav').style.backgroundColor = '#222228';
    navToggle = true;
  }
  else if (window.pageYOffset <= 70 && navToggle == true){
    document.getElementById('nav').style.height = 120 + 'px';
    document.getElementById('nav').style.opacity = '.4';
    document.getElementById('nav').style.backgroundColor = 'transparent';
    navToggle = false;
  }
};
