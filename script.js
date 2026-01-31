const navbar = document.getElementById('navbar');
const introSection = document.getElementById('intro');

window.addEventListener('scroll', function() {
    const triggerPoint = introSection.offsetHeight; 

    if (window.scrollY >= triggerPoint) {
        navbar.classList.add('fixed-top');
        navbar.classList.remove('bg-transparent'); 
        navbar.classList.add('bg-black');
    } else {
        navbar.classList.remove('fixed-top');
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-black');
    }
});