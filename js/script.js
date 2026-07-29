document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Navbar Scroll Handler
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      if (navLinks.classList.contains('active')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    });

    // Close menu when clicking links
    const links = navLinks.querySelectorAll('a, .nav-link');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (menuIcon && closeIcon) {
          menuIcon.style.display = 'block';
          closeIcon.style.display = 'none';
        }
      });
    });
  }

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Hero Typing Effect Animation
  const typingElement = document.getElementById('typing-text');
  if (typingElement) {
    const words = ['Software Developer', 'Siswa RPL SMKN 6 Jakarta', 'IT Software'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150;

    function type() {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
          isDeleting = true;
          typeSpeed = 2000; // Pause on complete word
        } else {
          typeSpeed = 100;
        }
      } else {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          typeSpeed = 500; // Pause before typing next word
        } else {
          typeSpeed = 50;
        }
      }
      setTimeout(type, typeSpeed);
    }

    type();
  }

  // Contact Form Handling (FormSubmit.co AJAX)
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Mengirim...';
      }

      const formData = {
        Nama: contactForm.querySelector('#name').value,
        Email: contactForm.querySelector('#email').value,
        Subjek: contactForm.querySelector('#subject').value,
        Pesan: contactForm.querySelector('#message').value,
      };

      fetch('https://formsubmit.co/ajax/badariklil6@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (response.ok) {
          if (formSuccess) formSuccess.style.display = 'block';
          contactForm.reset();
          setTimeout(() => {
            if (formSuccess) formSuccess.style.display = 'none';
          }, 5000);
        } else {
          alert('Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
        }
      })
      .catch(error => {
        alert('Terjadi kesalahan jaringan. Silakan periksa koneksi Anda.');
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Kirim Pesan <i data-lucide="send" class="w-4 h-4"></i>';
          if (window.lucide) lucide.createIcons();
        }
      });
    });
  }
});
