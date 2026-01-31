/*window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var seccion1 = document.getElementById('projects');
    var seccion2 = document.getElementById('technologies');
    var seccion3 = document.getElementById('studies');
  
    if (window.pageYOffset >= seccion1.offsetTop && window.pageYOffset < seccion2.offsetTop) {
      navbar.classList.add('fixed-top');
      navbar.classList.remove('absolute-top');
    } else if (window.pageYOffset >= seccion2.offsetTop && window.pageYOffset < seccion3.offsetTop) {
      navbar.classList.add('fixed-top');
      navbar.classList.remove('absolute-top');
    } else {
      navbar.classList.remove('fixed-top');
      navbar.classList.remove('absolute-top');
    }
  });
  


const navbar = document.getElementById('navbar');
const seccion1 = document.getElementById('projects');
const seccion3 = document.getElementById('studies');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;

  if (scrollY >= seccion1.offsetTop && scrollY < seccion3.offsetTop) {
    navbar.classList.add('fixed-top');
  } else {
    navbar.classList.remove('fixed-top');
  }
});*/


// 1. Declaramos las variables AFUERA del evento (Cacheamos el DOM)
const navbar = document.getElementById('navbar');
// Usamos el header de intro como referencia. Cuando pase esto, se fija el menú.
const introSection = document.getElementById('intro');

window.addEventListener('scroll', function() {
    // 2. Calculamos el punto de quiebre
    // (Restamos un poco, ej 50px, para que el efecto sea antes de que termine la intro)
    const triggerPoint = introSection.offsetHeight - 50; 

    if (window.scrollY >= triggerPoint) {
        // Si bajamos más allá de la intro
        navbar.classList.add('fixed-top');
        // Opcional: Agregar fondo negro si era transparente
        navbar.classList.remove('bg-transparent'); 
        navbar.classList.add('bg-black');
    } else {
        // Si estamos arriba de todo (en la intro)
        navbar.classList.remove('fixed-top');
        // Opcional: Volver a transparente si lo usas así
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-black');
    }
});