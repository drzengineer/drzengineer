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
