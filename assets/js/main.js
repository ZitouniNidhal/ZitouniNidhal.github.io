(function () {
  'use strict';

  /* ── Active nav link ─────────────────────────────────── */
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav__link').forEach(function (link) {
    const href = link.getAttribute('href');
    const isHome = currentFile === '' || currentFile === 'index.html';
    if (href === currentFile || (isHome && href === 'index.html')) {
      link.classList.add('is-active');
    }
  });

  /* ── Scrolled header shadow ──────────────────────────── */
  const header = document.getElementById('site-header');
  if (header) {
    function onScroll() {
      header.classList.toggle('is-scrolled', window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile nav toggle ───────────────────────────────── */
  const toggle = document.getElementById('nav-toggle');
  const nav    = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    nav.querySelectorAll('.site-nav__link').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('click', function (e) {
      if (nav.classList.contains('is-open') &&
          !nav.contains(e.target) &&
          !toggle.contains(e.target)) {
        closeNav();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        closeNav();
        toggle.focus();
      }
    });
  }

  function closeNav() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  /* ── Dark mode toggle ────────────────────────────────── */
  const themeToggle = document.getElementById('theme-toggle');
  
  function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);
  }

  // Check for saved theme preference or OS preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      if (document.documentElement.getAttribute('data-theme') === 'dark') {
        setTheme('light');
      } else {
        setTheme('dark');
      }
    });
  }

})();

