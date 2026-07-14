document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // ===== BURGER MENU =====
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', function() {
      burger.classList.toggle('active');
      nav.classList.toggle('active');
    });

    document.querySelectorAll('.nav__link').forEach(function(link) {
      link.addEventListener('click', function() {
        burger.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }

  // ===== REVIEWS SLIDER =====
  var slider = document.getElementById('reviewsSlider');
  var prevBtn = document.getElementById('prevReview');
  var nextBtn = document.getElementById('nextReview');

  if (slider && prevBtn && nextBtn) {
    var cards = slider.querySelectorAll('.review-card');
    var currentIndex = 0;
    var totalCards = cards.length;
    var autoSlideInterval;

    function updateSlider() {
      var offset = -currentIndex * 100;
      slider.style.transform = 'translateX(' + offset + '%)';
    }

    function startAutoSlide() {
      autoSlideInterval = setInterval(function() {
        currentIndex = (currentIndex + 1) % totalCards;
        updateSlider();
      }, 6000);
    }

    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    prevBtn.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + totalCards) % totalCards;
      updateSlider();
      stopAutoSlide();
      startAutoSlide();
    });

    nextBtn.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % totalCards;
      updateSlider();
      stopAutoSlide();
      startAutoSlide();
    });

    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);

    startAutoSlide();
  }

  // ===== CONTACT FORM =====
  var form = document.getElementById('contactForm');
  var modal = document.getElementById('successModal');
  var modalClose = document.getElementById('modalClose');
  var modalOverlay = document.getElementById('modalOverlay');

  function showModal() {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function hideModal() {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function validateField(input) {
    var value = input.value.trim();
    if (!value) {
      input.classList.add('error');
      return false;
    }
    if (input.type === 'email' && value.indexOf('@') === -1) {
      input.classList.add('error');
      return false;
    }
    input.classList.remove('error');
    return true;
  }

  if (form && modal && modalClose) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      var nameInput = document.getElementById('name');
      var phoneInput = document.getElementById('phone');
      var emailInput = document.getElementById('email');

      var isNameValid = validateField(nameInput);
      var isPhoneValid = validateField(phoneInput);
      var isEmailValid = validateField(emailInput);

      if (!isNameValid || !isPhoneValid || !isEmailValid) {
        return;
      }

      var submitBtn = form.querySelector('.form__submit');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Отправка...';

      setTimeout(function() {
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Отправить заявку';
        showModal();
      }, 1500);
    });

    modalClose.addEventListener('click', hideModal);

    if (modalOverlay) {
      modalOverlay.addEventListener('click', hideModal);
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        hideModal();
      }
    });

    var formInputs = form.querySelectorAll('.form__input');
    formInputs.forEach(function(input) {
      input.addEventListener('blur', function() {
        if (input.hasAttribute('required')) {
          validateField(input);
        }
      });
      input.addEventListener('input', function() {
        if (input.classList.contains('error')) {
          validateField(input);
        }
      });
    });
  }

  // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
  if ('IntersectionObserver' in window) {
    var animElements = document.querySelectorAll('.section__title, .service-card, .teacher-card, .schedule__row');

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animElements.forEach(function(el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }
});