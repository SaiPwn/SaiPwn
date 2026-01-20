// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe radio card
const radioCard = document.querySelector('.radio-card');
if (radioCard) {
    radioCard.style.opacity = '0';
    radioCard.style.transform = 'translateY(20px)';
    radioCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(radioCard);
}

// Observe connect content
const connectContent = document.querySelector('.connect-content');
if (connectContent) {
    connectContent.style.opacity = '0';
    connectContent.style.transform = 'translateY(20px)';
    connectContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(connectContent);
}
