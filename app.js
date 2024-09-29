const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const fadeInElements = document.querySelectorAll('.fade-in');
fadeInElements.forEach((el) => observer.observe(el));

const slideUpElements = document.querySelectorAll('.slide-up');
slideUpElements.forEach((el) => observer.observe(el));