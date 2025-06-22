document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1 });

    timelineItems.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transition = 'all 0.5s ease';
        
        if (index % 2 === 0) {
            item.style.transform = 'translateX(-20px)';
        } else {
            item.style.transform = 'translateX(20px)';
        }
        
        observer.observe(item);
    });

    // Team member hover effect enhancement
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.querySelector('.team-photo').style.transform = 'scale(1.05)';
            this.querySelector('.team-photo').style.boxShadow = '0 5px 15px rgba(0, 86, 179, 0.3)';
        });
        
        member.addEventListener('mouseleave', function() {
            this.querySelector('.team-photo').style.transform = 'scale(1)';
            this.querySelector('.team-photo').style.boxShadow = 'none';
        });
    });
});