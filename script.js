// Dark Mode
const toggle = document.getElementById("toggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    navLinks.classList.remove('active');
  });
});

// Countdown Offer
let time = 3 * 24 * 60 * 60; // 3 أيام
setInterval(() => {
  const d = Math.floor(time / 86400);
  const h = Math.floor((time % 86400) / 3600);
  const m = Math.floor((time % 3600) / 60);
  const s = time % 60;
  document.getElementById("countdown").textContent =
    `${d}d ${h}h ${m}m ${s}s`;
  time--;
}, 1000);
