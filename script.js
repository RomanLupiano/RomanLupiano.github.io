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
  
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-buttons button");
    const certificateList = document.querySelector(".certificate-list");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
  
        certificateList.querySelectorAll(".certificate").forEach((certificate) => {
          const category = certificate.getAttribute("data-category");
  
          if (filter === "All" || category === filter) {
            certificate.style.display = "block";
          } else {
            certificate.style.display = "none";
          }
        });
      });
    });
  });
  