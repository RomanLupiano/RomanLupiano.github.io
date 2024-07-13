window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var seccion1 = document.getElementById('projects');
  var seccion2 = document.getElementById('technologies');
  var seccion3 = document.getElementById('studies');
  var seccion3 = document.getElementById('contact');

  if (window.pageYOffset >= seccion1.offsetTop && window.pageYOffset < seccion2.offsetTop) {
    navbar.classList.add('fixed-top');
    navbar.classList.remove('absolute-top');
  } else if (window.pageYOffset >= seccion2.offsetTop && window.pageYOffset < seccion3.offsetTop) {
    navbar.classList.add('fixed-top');
    navbar.classList.remove('absolute-top');
  } else if (window.pageYOffset >= seccion3.offsetTop && window.pageYOffset < seccion4.offsetTop) {
      navbar.classList.add('fixed-top');
      navbar.classList.remove('absolute-top');
  } else {
    navbar.classList.remove('fixed-top');
    navbar.classList.remove('absolute-top');
  }
});
  