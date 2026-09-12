const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.background = window.scrollY > 40 ? 'rgba(244,241,233,.94)' : 'transparent';
  header.style.position = window.scrollY > 40 ? 'sticky' : 'relative';
  header.style.top = '0';
  header.style.backdropFilter = window.scrollY > 40 ? 'blur(14px)' : 'none';
}, { passive: true });

const observed = document.querySelectorAll('.work-item, .network-card, .metric');
const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add('is-visible');
}), { threshold: .12 });
observed.forEach((item) => reveal.observe(item));
