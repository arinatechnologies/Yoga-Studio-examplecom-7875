// js/contact.js
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('customForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Here you would typically submit the form data to your backend
            // For demonstration, we'll just show a success message
            alert('Thank you for your message! Our team will get back to you soon.');
            contactForm.reset();
            
            // In a real implementation, you would use fetch() or similar to submit the form
            // Example:
            // const formData = new FormData(contactForm);
            // fetch('your-endpoint', { method: 'POST', body: formData })
            //     .then(response => response.json())
            //     .then(data => { ... })
            //     .catch(error => { ... });
        });
    }
    
    // Smooth scroll for anchor links (if any on the page)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});