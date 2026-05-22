// Smooth scrolling for navigation links
const nav = document.querySelector('nav');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link =>{
    link.addEventListener('click', () => {
        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    })
    nav.classList.remove('active');
});

/**menu mobile */
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});