/**
 * Zitouni Nidhal - Portfolio Script
 * Optimized for performance, accessibility, and maintainability
 */

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initThemeToggle();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initLazyLoading();
    initIntersectionObserver();
});

// ===== THEME TOGGLE =====
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;

    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    // Apply the theme
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Update button icon
    updateThemeIcon(themeToggle, currentTheme);

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(themeToggle, newTheme);
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!savedTheme) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateThemeIcon(themeToggle, newTheme);
        }
    });
}

function updateThemeIcon(button, theme) {
    const icon = button.querySelector('i');
    if (!icon) return;
    
    icon.className = theme === 'dark' 
        ? 'fas fa-sun' 
        : 'fas fa-moon';
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (!menuToggle || !mainNav) return;

    // Toggle menu visibility
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('show');
        const isExpanded = mainNav.classList.contains('show');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking a link
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('show');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
            mainNav.classList.remove('show');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            mainNav.classList.remove('show');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Skip if it's a hash-only link or already on the same page
            if (this.href === window.location.href || this.href === '#') {
                e.preventDefault();
                return;
            }

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Focus the target element for accessibility
                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus();
            }
        });
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    // Use IntersectionObserver for better performance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all sections and cards
    document.querySelectorAll('section, .focus-card, .info-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== LAZY LOADING =====
function initLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
        // Native lazy loading is supported
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    } else {
        // Fallback for browsers without native lazy loading
        const lazyLoadScript = document.createElement('script');
        lazyLoadScript.src = 'https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.3.1/dist/lazyload.min.js';
        document.body.appendChild(lazyLoadScript);
        
        lazyLoadScript.onload = () => {
            const lazyLoadInstance = new LazyLoad({
                elements_selector: 'img[loading="lazy"]'
            });
        };
    }
}

// ===== INTERSECTION OBSERVER FOR PERFORMANCE =====
function initIntersectionObserver() {
    // For any additional intersection-based features
    const ioOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add any intersection-based logic here
                console.log(`${entry.target.id || entry.target.className} is now visible`);
            }
        });
    }, ioOptions);

    // Observe all elements with the 'observe' class
    document.querySelectorAll('.observe').forEach(el => {
        io.observe(el);
    });
}

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ===== ACCESSIBILITY ENHANCEMENTS =====

// Add focus styles for keyboard navigation
function addFocusStyles() {
    const focusableElements = document.querySelectorAll(
        'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(el => {
        el.addEventListener('focus', () => {
            el.style.outline = '2px solid var(--accent-text)';
            el.style.outlineOffset = '2px';
        });
        
        el.addEventListener('blur', () => {
            el.style.outline = '';
            el.style.outlineOffset = '';
        });
    });
}

// Initialize focus styles
addFocusStyles();

// ===== PERFORMANCE OPTIMIZATIONS =====

// Load non-critical CSS asynchronously
function loadCSSAsync(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    link.onload = () => {
        link.media = 'all';
    };
    document.head.appendChild(link);
}

// Load non-critical resources
if (window.innerWidth > 768) {
    // Load additional resources for larger screens
}

// ===== ERROR HANDLING =====

// Global error handler
window.addEventListener('error', (e) => {
    console.error('Error:', e.message, e.filename, e.lineno, e.colno);
});

// Promise rejection handler
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled rejection:', e.reason);
});

// ===== SERVICE WORKER REGISTRATION (Optional) =====

// Uncomment to enable PWA functionality
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}
*/

// ===== ANALYTICS (Optional) =====

// Uncomment to enable lightweight analytics
/*
function initAnalytics() {
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://plausible.io/js/plausible.js';
    script.setAttribute('data-domain', 'yourdomain.com');
    document.head.appendChild(script);
}

initAnalytics();
*/
