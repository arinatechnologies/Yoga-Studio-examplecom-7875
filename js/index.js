// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navActions.classList.toggle('active');
    });
});