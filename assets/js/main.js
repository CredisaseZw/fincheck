// ── Carousel (Glide.js) ──
const glide = new Glide('.glide', {
  type: 'carousel',
  autoplay: 5000,
  hoverpause: false,
  animationDuration: 1000,
  animationTimingFunc: 'cubic-bezier(0.4, 0, 0.2, 1)'
});

// Reset dot progress animation when slide changes
glide.on('run.before', function() {
  const activeDot = document.querySelector('.carousel-dot.glide__bullet--active .dot-progress');
  if (activeDot) {
    activeDot.style.animation = 'none';
  }
});

glide.on('run.after', function() {
  const activeDot = document.querySelector('.carousel-dot.glide__bullet--active .dot-progress');
  if (activeDot) {
    activeDot.style.animation = ''; 
  }
});

glide.mount();

// ── Nav scroll ──
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Mobile menu ──
const hamburger = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

function closeMobile() {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeMobile(); }
});

// ── Fade-up on scroll ──
const fadeEls = document.querySelectorAll('.fade-up');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
    }
    });
}, { threshold: 0.15 });

fadeEls.forEach(el => fadeObserver.observe(el));
