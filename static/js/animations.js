// Custom Animations and Interactions

document.addEventListener('DOMContentLoaded', function() {

  // Typing effect for command sentences on login page
  const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    const timer = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  };

  const commandSentence = document.getElementById('command-sentence');
  if (commandSentence) {
    let sentences = [
      "Authenticate your identity to enter the system.",
      "Initiate secure login protocol.",
      "Access granted — welcome back, commander.",
      "System booting... please verify credentials."
    ];

    // Check if on signup page
    if (document.body.classList.contains('signup')) {
      sentences = [
        "Initiate user registration sequence.",
        "Create your command access profile.",
        "Enter credentials to join the mission.",
        "Verifying identity... preparing launch access.",
        "Registration complete — welcome aboard, cadet."
      ];
    }

    let currentIndex = 0;

    const displayNextSentence = () => {
      typeWriter(commandSentence, sentences[currentIndex], 50);
      currentIndex = (currentIndex + 1) % sentences.length;
    };

    displayNextSentence();
    setInterval(displayNextSentence, 5000); // Change every 5 seconds
  }

  // Smooth scrolling for anchor links
  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Add click event to navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      smoothScroll(target);
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);

      if (isVisible) {
        element.classList.add('fade-in-up');
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial check

  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      hero.style.transform = `translateY(${rate}px)`;
    });
  }

  // Typing effect for headlines
  const headline = document.querySelector('.hero h1');
  if (headline) {
    const originalText = headline.textContent;
    typeWriter(headline, originalText, 150);
  }

  // Progress bar animation
  const progressBars = document.querySelectorAll('.progress-bar');
  const animateProgressBars = () => {
    progressBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width + '%';
    });
  };

  // Trigger progress bar animation when in view
  const progressSection = document.querySelector('.skills-section');
  if (progressSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateProgressBars();
        }
      });
    });
    observer.observe(progressSection);
  }

  // Counter animation for stats
  const counters = document.querySelectorAll('.counter');
  const animateCounters = () => {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // 2 seconds
      const step = target / (duration / 16); // 60 FPS
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current);
        }
      }, 16);
    });
  };

  // Trigger counter animation when in view
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
        }
      });
    });
    observer.observe(statsSection);
  }

  // Form floating labels
  const formGroups = document.querySelectorAll('.form-group');
  formGroups.forEach(group => {
    const input = group.querySelector('input, textarea');
    const label = group.querySelector('label');

    if (input && label) {
      input.addEventListener('focus', () => {
        label.classList.add('focused');
      });

      input.addEventListener('blur', () => {
        if (input.value === '') {
          label.classList.remove('focused');
        }
      });

      // Check on page load
      if (input.value !== '') {
        label.classList.add('focused');
      }
    }
  });

  // Button ripple effect
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      this.appendChild(ripple);

      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Modal functionality
  const modals = document.querySelectorAll('.modal');
  const modalTriggers = document.querySelectorAll('[data-modal]');
  const modalCloses = document.querySelectorAll('.modal-close');

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
    });
  });

  modalCloses.forEach(close => {
    close.addEventListener('click', function() {
      const modal = this.closest('.modal');
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  });

  // Close modal when clicking outside
  window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

});
