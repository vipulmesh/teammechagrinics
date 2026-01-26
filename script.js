// ===== MOBILE MENU TOGGLE =====
const menuBtn = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle('hidden');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      mobileMenu.classList.add('hidden');
    }
  });

  // Close menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// ===== SET COPYRIGHT YEAR =====
const yearEl = document.getElementById('year');
const currentYearEl = document.getElementById('current-year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (currentYearEl) {
  currentYearEl.textContent = new Date().getFullYear();
}

// ===== SCROLL REVEAL ANIMATION =====
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

// Run on scroll
window.addEventListener('scroll', revealOnScroll);

// Run on page load
window.addEventListener('load', revealOnScroll);

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Ignore empty hash or just "#"
    if (href === '#' || !href) return;
    
    const target = document.querySelector(href);
    
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== ADD HOVER CLASSES TO CARDS =====
document.addEventListener('DOMContentLoaded', () => {
  // Add hover effects to all cards
  const cards = document.querySelectorAll('.card, .team-member, .leader-card, .member-item');
  
  cards.forEach(card => {
    if (!card.classList.contains('card-hover')) {
      card.classList.add('card-hover');
    }
  });

  // Add image zoom to all image containers
  const imageContainers = document.querySelectorAll('.member-photo-section, .card img');
  
  imageContainers.forEach(container => {
    if (!container.classList.contains('image-zoom')) {
      const parent = container.parentElement;
      if (parent && !parent.classList.contains('image-zoom')) {
        parent.classList.add('image-zoom');
      }
    }
  });

  // Add animations to buttons
  const buttons = document.querySelectorAll('a[href*="contact"], button, .bg-green-700');
  
  buttons.forEach(btn => {
    if (!btn.classList.contains('btn-animated')) {
      btn.classList.add('btn-animated');
    }
  });
});

// ===== PARALLAX EFFECT FOR HERO =====
window.addEventListener('scroll', () => {
  const hero = document.querySelector('#hero');
  if (hero) {
    const scrolled = window.pageYOffset;
    const parallax = hero.querySelector('.relative.z-10');
    
    if (parallax) {
      parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
      parallax.style.opacity = 1 - (scrolled * 0.002);
    }
  }
});

// ===== NAVBAR BACKGROUND ON SCROLL =====
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  
  if (header) {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
      header.style.boxShadow = '';
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
    }
  }
});

// ===== ANIMATE ELEMENTS ON PAGE LOAD =====
window.addEventListener('load', () => {
  // Animate hero elements
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const logoContainer = document.querySelector('.logo-container');
  
  if (heroTitle) {
    heroTitle.style.opacity = '0';
    setTimeout(() => {
      heroTitle.style.transition = 'opacity 1s ease, transform 1s ease';
      heroTitle.style.opacity = '1';
    }, 100);
  }
  
  if (heroSubtitle) {
    heroSubtitle.style.opacity = '0';
    setTimeout(() => {
      heroSubtitle.style.transition = 'opacity 1s ease, transform 1s ease';
      heroSubtitle.style.opacity = '1';
    }, 300);
  }

  if (logoContainer) {
    logoContainer.style.opacity = '0';
    logoContainer.style.transform = 'scale(0.8)';
    setTimeout(() => {
      logoContainer.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      logoContainer.style.opacity = '1';
      logoContainer.style.transform = 'scale(1)';
    }, 50);
  }

  // Animate achievement cards
  const achievementCards = document.querySelectorAll('.card');
  achievementCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 100 * (index + 1));
  });
});

// ===== COUNTER ANIMATION (for stats if needed) =====
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}

// ===== ADD RIPPLE EFFECT TO BUTTONS =====
document.querySelectorAll('button, .btn-animated').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// ===== LAZY LOAD IMAGES =====
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('fade-in');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ===== SCROLL PROGRESS BAR =====
function createScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #22c55e, #166534);
    width: 0%;
    z-index: 9999;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

// Initialize scroll progress bar
createScrollProgress();

console.log('✅ MechAgrinics animations loaded successfully!');