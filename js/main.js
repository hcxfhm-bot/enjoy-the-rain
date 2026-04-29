/* ============================================
   3D Print Starter - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      item.classList.toggle('open');
    });
  });

  // Scroll fade animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-up');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature-card, .article-card, .printer-card, .faq-item')
    .forEach(el => observer.observe(el));

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Table of contents highlighting (for guide pages)
  const tocLinks = document.querySelectorAll('.sidebar-card a[href^="#"]');
  if (tocLinks.length > 0) {
    const headings = [];
    tocLinks.forEach(link => {
      const id = link.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) headings.push({ el, link });
    });

    window.addEventListener('scroll', () => {
      let current = '';
      headings.forEach(h => {
        if (h.el.getBoundingClientRect().top < 120) {
          current = '#' + h.el.id;
        }
      });
      tocLinks.forEach(l => {
        l.style.color = l.getAttribute('href') === current ? 'var(--accent)' : '';
      });
    });
  }
});
