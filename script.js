// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero animations on load
gsap.from('.hero-badge', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.2,
});

gsap.from('.title-line', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.4,
});

gsap.from('.title-name', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.6,
});

gsap.from('.title-sub', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.8,
});

gsap.from('.hero-desc', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 1,
});

gsap.from('.hero-cta', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 1.2,
});

gsap.from('.hero-stats', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 1.4,
});

// Animate stats counter
const statNums = document.querySelectorAll('.stat-num');
statNums.forEach((stat) => {
    const target = stat.getAttribute('data-target');
    gsap.to(stat, {
        innerText: target,
        duration: 2,
        scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
            snap: 1,
        },
        ease: 'power2.out',
        onUpdate: function() {
            stat.innerText = Math.ceil(this.targets()[0].innerText);
        },
    });
});

// Section animations
gsap.utils.toArray('.section').forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
        },
    });
});

// Project cards animation
gsap.utils.toArray('.project').forEach((project, i) => {
    gsap.from(project, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.2,
        scrollTrigger: {
            trigger: project,
            start: 'top 85%',
        },
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            lenis.scrollTo(target);
        }
    });
});
