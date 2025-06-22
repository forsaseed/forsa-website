document.addEventListener('DOMContentLoaded', () => {
    // Language Switch
    const languageSwitch = document.querySelector('.language-switch');
    if (languageSwitch) {
        languageSwitch.addEventListener('click', () => {
            const currentLang = languageSwitch.querySelector('span').textContent;
            languageSwitch.querySelector('span').textContent = currentLang === 'EN' ? 'AR' : 'EN';
            // Here you would typically trigger the actual language change
        });
    }

    // Notify Form
    const notifyForm = document.querySelector('.notify-form');
    if (notifyForm) {
        notifyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = notifyForm.querySelector('input[type="email"]').value;
            
            // Here you would typically send this to your backend
            console.log('Email submitted:', email);
            
            // Show success message
            const button = notifyForm.querySelector('button');
            const originalText = button.textContent;
            button.textContent = 'Thanks!';
            button.style.backgroundColor = '#4CAF50';
            
            // Reset form
            notifyForm.reset();
            
            // Reset button after 2 seconds
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 2000);
        });
    }

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

    // Add scroll-based animations
    const addInViewAnimation = () => {
        const elements = document.querySelectorAll('.hero__content, .hero__image');
        elements.forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight * 0.75) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial animation styles
    document.querySelectorAll('.hero__content, .hero__image').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Run animations
    window.addEventListener('scroll', addInViewAnimation);
    addInViewAnimation(); // Run once on load
});
