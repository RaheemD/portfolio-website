document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const languageToggle = document.getElementById('languageToggle');
    let isEnglish = true;

    function updateLanguage(lang) {
        document.querySelectorAll('[data-en][data-fr]').forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });
    }

    languageToggle.addEventListener('click', function() {
        if (isEnglish) {
            languageToggle.textContent = 'EN';
            updateLanguage('fr');
        } else {
            languageToggle.textContent = 'FR';
            updateLanguage('en');
        }
        isEnglish = !isEnglish;
    });
});
// Add your custom JavaScript code here...
document.addEventListener('DOMContentLoaded', function() {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.querySelectorAll('.timeline-item').forEach((item, index) => {
            item.style.animationDelay = `${0.5 * (index + 1)}s`;
            item.style.animationPlayState = 'running';
        });
        observer.unobserve(entry.target);
    }
});
}, { threshold: 0.1 });

const timelineSection = document.querySelector('#experience');
if (timelineSection) {
observer.observe(timelineSection);
}
});

// Add your custom JavaScript code here...
document.addEventListener('DOMContentLoaded', function() {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.querySelectorAll('.education-card').forEach(card => {
            card.classList.add('animate');
        });
        observer.unobserve(entry.target);
    }
});
}, { threshold: 0.1 });

const educationSection = document.querySelector('#education');
if (educationSection) {
observer.observe(educationSection);
}
});

// Add your custom JavaScript code here...
document.addEventListener('DOMContentLoaded', function() {
var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
var navbarToggler = document.querySelector('.navbar-toggler');
var navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(function(link) {
link.addEventListener('click', function() {
    if (window.innerWidth < 992) {
        navbarCollapse.classList.remove('show');
        navbarToggler.setAttribute('aria-expanded', 'false');
    }
});
});
});