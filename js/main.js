/* ═══════════════════════════════════════════
   CUSTOM CURSOR
   ═══════════════════════════════════════════ */
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');
let mx = 0, my = 0, cx = 0, cy = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

function animateCursor() {
  cx += (mx - cx) * 0.15;
  cy += (my - cy) * 0.15;
  fx += (mx - fx) * 0.08;
  fy += (my - fy) * 0.08;
  cursor.style.transform = `translate(${cx - 6}px, ${cy - 6}px)`;
  cursorFollower.style.transform = `translate(${fx - 18}px, ${fy - 18}px)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor hover state
document.querySelectorAll('[data-cursor-hover], a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
    cursorFollower.classList.add('hover');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    cursorFollower.classList.remove('hover');
  });
});

/* ═══════════════════════════════════════════
   SPOTLIGHT EFFECT
   ═══════════════════════════════════════════ */
const spotlight = document.getElementById('spotlight');
document.addEventListener('mousemove', e => {
  spotlight.style.setProperty('--mouse-x', (e.clientX / window.innerWidth * 100) + '%');
  spotlight.style.setProperty('--mouse-y', (e.clientY / window.innerHeight * 100) + '%');
});

/* ═══════════════════════════════════════════
   SCROLL PROGRESS
   ═══════════════════════════════════════════ */
const scrollProgress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  scrollProgress.style.transform = `scaleX(${window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)})`;
});

/* ═══════════════════════════════════════════
   NAV SCROLL EFFECT
   ═══════════════════════════════════════════ */
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* ═══════════════════════════════════════════
   INTERSECTION OBSERVER FOR REVEALS
   ═══════════════════════════════════════════ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger').forEach(el => revealObserver.observe(el));

/* ═══════════════════════════════════════════
   COUNTER ANIMATION
   ═══════════════════════════════════════════ */
const counters = document.querySelectorAll('.stat-num[data-count]');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const target = parseInt(e.target.dataset.count);
      const start = performance.now();
      function update(now) {
        const p = Math.min((now - start) / 2000, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        e.target.textContent = Math.round(eased * target);
        if (p < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

/* ═══════════════════════════════════════════
   MAGNETIC BUTTONS
   ═══════════════════════════════════════════ */
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.2}px, ${(e.clientY - r.top - r.height / 2) * 0.2}px)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0, 0)'; });
});

/* ═══════════════════════════════════════════
   SMOOTH SCROLL FOR ANCHOR LINKS
   ═══════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ═══════════════════════════════════════════
   FORM HANDLING
   ═══════════════════════════════════════════ */
function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const msg = document.getElementById('formMsg');
  const inputs = form.querySelectorAll('.form-input, .form-textarea');
  let valid = true;
  inputs.forEach(i => { if (!i.value.trim()) valid = false; });
  if (!valid) { msg.textContent = 'All fields are required.'; msg.style.color = '#ff6b6b'; return; }
  const email = form.querySelector('[type="email"]')?.value || '';
  if (!/\S+@\S+\.\S+/.test(email)) { msg.textContent = 'Please enter a valid email.'; msg.style.color = '#ff6b6b'; return; }
  msg.textContent = '✓ Message sent. I will get back to you soon.';
  msg.style.color = '#c8ff00';
  form.reset();
}

/* ═══════════════════════════════════════════
   PARALLAX ON SCROLL
   ═══════════════════════════════════════════ */
const parallaxElements = document.querySelectorAll('.hero-bg-text');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  parallaxElements.forEach(el => {
    el.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.3}px))`;
  });
});

/* ═══════════════════════════════════════════
   PREFERS REDUCED MOTION
   ═══════════════════════════════════════════ */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.style.scrollBehavior = 'auto';
  cursor.style.display = 'none';
  cursorFollower.style.display = 'none';
  document.body.style.cursor = 'auto';
}
