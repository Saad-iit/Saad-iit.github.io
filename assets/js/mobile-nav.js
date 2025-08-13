(function() {
  'use strict';

  function initMobileNav() {
    if (window.innerWidth > 991.98) return;
    
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const body = document.body;
    
    if (!navbarToggler || !navbarCollapse) return;
    if (navbarToggler.hasAttribute('data-mobile-nav-initialized')) return;
    navbarToggler.setAttribute('data-mobile-nav-initialized', 'true');

    let closeButton = navbarCollapse.querySelector('.mobile-nav-close');
    if (!closeButton) {
      closeButton = document.createElement('button');
      closeButton.className = 'mobile-nav-close';
      closeButton.setAttribute('aria-label', 'Close navigation menu');
      navbarCollapse.appendChild(closeButton);
    }
    
    let backdrop = document.querySelector('.mobile-nav-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'mobile-nav-backdrop';
      document.body.appendChild(backdrop);
    }

    navbarToggler.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const isOpen = navbarCollapse.classList.contains('show');
      
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    function openMobileNav() {
      navbarCollapse.classList.add('show', 'mobile-open');
      body.classList.add('mobile-nav-open');
      navbarToggler.setAttribute('aria-expanded', 'true');
    }

    function closeMobileNav() {
      navbarCollapse.classList.remove('show', 'mobile-open');
      backdrop.classList.remove('show');
      body.classList.remove('mobile-nav-open');
      navbarToggler.setAttribute('aria-expanded', 'false');
    }

    closeButton.addEventListener('click', function(e) {
      e.preventDefault();
      closeMobileNav();
    });

    navbarCollapse.addEventListener('click', function(e) {
      if (e.target === navbarCollapse) {
        closeMobileNav();
      }
    });

    const navLinks = navbarCollapse.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navbarCollapse.classList.contains('show')) {
        closeMobileNav();
      }
    });
  }

function handleResize() {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const closeButton = document.querySelector('.mobile-nav-close');
  const body = document.body;
 
  if (window.innerWidth > 991.98) {
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show', 'mobile-open');
    }
    if (backdrop) {
      backdrop.classList.remove('show');
    }
    if (closeButton) {
      closeButton.style.display = 'none';
    }
    body.classList.remove('mobile-nav-open');
  } else {
    if (closeButton) {
      closeButton.style.display = '';
    }
    initMobileNav();
  }
}

  window.addEventListener('resize', handleResize);
})();
