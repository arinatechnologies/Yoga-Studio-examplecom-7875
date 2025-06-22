// Font Awesome initialization
document.addEventListener('DOMContentLoaded', function() {
    // Load Font Awesome if not already loaded
    if (!document.querySelector('#font-awesome-css')) {
        const faLink = document.createElement('link');
        faLink.id = 'font-awesome-css';
        faLink.rel = 'stylesheet';
        faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
        document.head.appendChild(faLink);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});