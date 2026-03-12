/* ============================================
   iCook Magic Mixx — Partner Landing Page
   JavaScript — Interactions, Calculator & Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // --- Rotating Text Animation ---
  var rotateWords = document.querySelectorAll('.text-rotate-word');
  if (rotateWords.length > 0) {
    var currentWord = 0;
    setInterval(function() {
      rotateWords[currentWord].classList.remove('active');
      rotateWords[currentWord].classList.add('exit');
      setTimeout(function() {
        rotateWords.forEach(function(w) { w.classList.remove('exit'); });
      }, 500);
      currentWord = (currentWord + 1) % rotateWords.length;
      rotateWords[currentWord].classList.add('active');
    }, 3000);
  }

  // --- Navbar Scroll Effect ---
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // --- Mobile Nav Toggle ---
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    navLinks.querySelectorAll('.nav-link, .nav-dropdown a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Dropdown Menu ---
  const dropdownToggle = document.querySelector('.nav-dropdown-toggle');
  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      dropdownToggle.parentElement.classList.toggle('open');
    });
  }

  // --- Scroll-triggered Animations ---
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { root: null, rootMargin: '0px 0px -60px 0px', threshold: 0.1 });
  animatedElements.forEach(el => observer.observe(el));

  // --- Animated Counters ---
  const counters = document.querySelectorAll('.counter');
  let countersAnimated = false;

  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      const update = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(update);
        } else {
          counter.textContent = target;
        }
      };
      update();
    });
  }

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counterObserver.observe(heroStats);
  }

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(faq => {
        faq.classList.remove('active');
        faq.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // --- Smooth Scroll ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - navbar.offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Parallax glow effect on hero ---
  const hero = document.querySelector('.hero');
  if (hero && window.innerWidth > 768) {
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty('--glow-x', ((e.clientX - rect.left) / rect.width * 100) + '%');
      hero.style.setProperty('--glow-y', ((e.clientY - rect.top) / rect.height * 100) + '%');
    });
  }

  // =============================================
  // EARNINGS CALCULATOR
  // =============================================
  const productSelect = document.getElementById('product-select');
  const productCards = document.querySelectorAll('.product-card');
  const packsSlider = document.getElementById('packs-slider');
  const packsValue = document.getElementById('packs-value');
  const packsBubble = document.getElementById('packs-bubble');
  const deliveryNo = document.getElementById('delivery-no');
  const deliveryYes = document.getElementById('delivery-yes');
  const deliveryRow = document.getElementById('delivery-row');

  const calcSales = document.getElementById('calc-sales');
  const calcTierText = document.getElementById('calc-tier-text');
  const calcCommission = document.getElementById('calc-commission');
  const calcDelivery = document.getElementById('calc-delivery');
  const calcBonus = document.getElementById('calc-bonus');
  const bonusRow = document.getElementById('bonus-row');
  const calcTotal = document.getElementById('calc-total');
  const tierExplanation = document.getElementById('tier-explanation');
  const tierFill = document.getElementById('tier-fill');
  const tierMarker = document.getElementById('tier-marker');
  const tierLabels = document.querySelectorAll('.tier-label');

  let selfDelivery = false;

  function formatCurrency(amount) {
    return '\u20B9' + Math.round(amount).toLocaleString('en-IN');
  }

  function getCommissionTier(monthlySales) {
    if (monthlySales > 50000) return { rate: 0.30, label: '30%', tier: 3 };
    if (monthlySales > 10000) return { rate: 0.25, label: '25%', tier: 2 };
    return { rate: 0.20, label: '20%', tier: 1 };
  }

  function getPerformanceBonus(monthlySales) {
    if (monthlySales >= 100000) return 10000;
    if (monthlySales >= 60000) return 4000;
    if (monthlySales >= 30000) return 1500;
    if (monthlySales >= 15000) return 500;
    return 0;
  }

  function updateSliderBubble() {
    if (!packsSlider || !packsBubble) return;
    var min = parseInt(packsSlider.min);
    var max = parseInt(packsSlider.max);
    var val = parseInt(packsSlider.value);
    var pct = ((val - min) / (max - min)) * 100;
    packsBubble.style.left = 'calc(' + pct + '% + ' + (8 - pct * 0.16) + 'px)';
  }

  function updateTierProgress(monthlySales, tierNum) {
    if (!tierFill || !tierMarker) return;
    var fillPct;
    if (monthlySales <= 10000) {
      fillPct = (monthlySales / 10000) * 33;
    } else if (monthlySales <= 50000) {
      fillPct = 33 + ((monthlySales - 10000) / 40000) * 33;
    } else {
      fillPct = 66 + Math.min((monthlySales - 50000) / 50000, 1) * 34;
    }
    tierFill.style.width = fillPct + '%';
    tierMarker.style.left = fillPct + '%';
    tierLabels.forEach(function(label, i) {
      label.classList.remove('tier-active');
      if (i + 1 === tierNum) label.classList.add('tier-active');
    });
  }

  function updateCalculator() {
    if (!productSelect || !packsSlider) return;
    var productPrice = parseInt(productSelect.value);
    var packs = parseInt(packsSlider.value);
    var monthlySales = productPrice * packs;

    packsValue.textContent = packs;
    updateSliderBubble();

    var tier = getCommissionTier(monthlySales);
    var commission = monthlySales * tier.rate;
    var deliveryBonus = selfDelivery ? monthlySales * 0.10 : 0;
    var performanceBonus = getPerformanceBonus(monthlySales);
    var total = commission + deliveryBonus + performanceBonus;

    calcSales.textContent = formatCurrency(monthlySales);
    if (calcTierText) calcTierText.textContent = tier.label;
    calcCommission.textContent = formatCurrency(commission);
    calcDelivery.textContent = formatCurrency(deliveryBonus);
    calcBonus.textContent = formatCurrency(performanceBonus);
    calcTotal.textContent = formatCurrency(total);

    deliveryRow.style.display = selfDelivery ? 'flex' : 'none';
    bonusRow.style.display = performanceBonus > 0 ? 'flex' : 'none';

    updateTierProgress(monthlySales, tier.tier);

    if (tier.tier === 3) {
      tierExplanation.innerHTML = '\uD83D\uDD25 Power Partner! You crossed \u20B950K \u2014 <strong>30% commission</strong> on ALL sales + \u20B9' + performanceBonus.toLocaleString('en-IN') + ' bonus!';
    } else if (tier.tier === 2) {
      tierExplanation.innerHTML = '\uD83D\uDCCA You crossed \u20B910K \u2014 <strong>25% commission</strong> applied on ALL your sales this month!';
    } else {
      tierExplanation.innerHTML = '\uD83D\uDCA1 Sell more to unlock <strong>25%</strong> commission (at \u20B910K) and <strong>30%</strong> (at \u20B950K)!';
    }
    tierExplanation.style.display = 'block';

    calcTotal.style.transform = 'scale(1.05)';
    setTimeout(function() { calcTotal.style.transform = 'scale(1)'; }, 200);
  }

  // Product card click handlers
  productCards.forEach(function(card) {
    card.addEventListener('click', function() {
      productCards.forEach(function(c) { c.classList.remove('active'); });
      card.classList.add('active');
      productSelect.value = card.getAttribute('data-price');
      updateCalculator();
    });
  });

  // Slider & delivery event listeners
  if (productSelect && packsSlider) {
    productSelect.addEventListener('change', updateCalculator);
    packsSlider.addEventListener('input', updateCalculator);

    if (deliveryNo) {
      deliveryNo.addEventListener('click', function() {
        selfDelivery = false;
        deliveryNo.classList.add('active');
        deliveryYes.classList.remove('active');
        updateCalculator();
      });
    }

    if (deliveryYes) {
      deliveryYes.addEventListener('click', function() {
        selfDelivery = true;
        deliveryYes.classList.add('active');
        deliveryNo.classList.remove('active');
        updateCalculator();
      });
    }

    // Initialize
    updateCalculator();
  }

});
