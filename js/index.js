// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', function() {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });
  
  // Responsive adjustment for nav links
  function handleResize() {
    if (window.innerWidth > 768) {
      navLinks.style.display = 'flex';
    } else {
      navLinks.style.display = 'none';
    }
  }
  
  window.addEventListener('resize', handleResize);
  handleResize(); // Initialize
});