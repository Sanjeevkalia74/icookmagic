/* ============================================
   iCook Magic Rasa Blend — Partner Landing Page
   Design System & Styles
   ============================================ */

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

/* --- CSS Variables / Design Tokens --- */
:root {
  /* Brand Colors */
  --brand-primary: #E85D26;
  --brand-primary-dark: #C94D1E;
  --brand-primary-light: #FF7A45;
  --brand-secondary: #262320; /* Warm Charcoal */
  --brand-accent: #F5A623;
  --brand-green: #27AE60;
  --brand-green-light: #2ECC71;
  --warm-dark: #1C1917;
  --warm-charcoal: #292524;

  /* Neutrals */
  --white: #FFFFFF;
  --off-white: #FAF9F6;
  --cream: #FFF8F0;
  --warm-bg: #FCF9F2;
  --gray-100: #F5F3EF;
  --gray-200: #EAE5DE;
  --gray-300: #D8D2CA;
  --gray-500: #8C8479;
  --gray-700: #5C564E;
  --gray-900: #2C2824;
  --dark-bg: #1A1816;
  --dark-card: #262320;

  /* Typography */
  --font-main: 'Outfit', sans-serif;
  --font-display: 'Playfair Display', serif;

  /* Spacing */
  --section-padding: 140px 0;
  --container-width: 1240px;

  /* Shadows */
  --shadow-sm: 0 4px 12px rgba(0,0,0,0.04);
  --shadow-md: 0 10px 40px rgba(0,0,0,0.06);
  --shadow-lg: 0 24px 80px rgba(0,0,0,0.1);
  --shadow-glow: 0 0 50px rgba(232,93,38,0.12);

  /* Border Radius */
  --radius-sm: 10px;
  --radius-md: 20px;
  --radius-lg: 32px;
  --radius-xl: 40px;
  --radius-full: 50%;

  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-base: 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-slow: 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

/* --- Reset & Base --- */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-main);
  color: var(--gray-900);
  background: var(--white);
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

ul { list-style: none; }

/* --- Utility --- */
.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 24px;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--brand-primary);
  margin-bottom: 16px;
}

.section-label::before {
  content: '';
  width: 32px;
  height: 2px;
  background: var(--brand-primary);
  border-radius: 1px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  font-weight: 700;
  color: var(--gray-900);
  line-height: 1.15;
  margin-bottom: 24px;
  letter-spacing: -1px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--gray-700);
  max-width: 650px;
  line-height: 1.75;
  margin: 0 auto;
}

/* Animate-on-scroll base */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

.animate-on-scroll.delay-1 { transition-delay: 0.1s; }
.animate-on-scroll.delay-2 { transition-delay: 0.2s; }
.animate-on-scroll.delay-3 { transition-delay: 0.3s; }
.animate-on-scroll.delay-4 { transition-delay: 0.4s; }

/* --- Buttons --- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 36px;
  font-family: var(--font-main);
  font-size: 1rem;
  font-weight: 600;
  border-radius: 60px;
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, var(--brand-primary), var(--brand-primary-light));
  color: var(--white);
  box-shadow: 0 4px 20px rgba(232, 93, 38, 0.35);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(232, 93, 38, 0.45);
}

.btn-primary:active {
  transform: translateY(-1px);
}

.btn-outline {
  background: transparent;
  color: var(--white);
  border: 2px solid rgba(255,255,255,0.3);
}

.btn-outline:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.6);
}

.btn-dark {
  background: var(--gray-900);
  color: var(--white);
}

.btn-dark:hover {
  background: #333;
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 1.2em;
}

/* ============================================
   NAVIGATION
   ============================================ */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  background: var(--white);
  box-shadow: 0 1px 0 rgba(0,0,0,0.03);
}

.navbar.scrolled {
  box-shadow: 0 10px 30px rgba(0,0,0,0.04);
  padding: 12px 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 1.25rem;
}

.nav-logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--brand-primary), var(--brand-primary-light));
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.nav-logo-text {
  color: var(--gray-900);
  transition: color var(--transition-base);
}

.navbar.scrolled .nav-logo-text {
  color: var(--gray-900);
}

.nav-links {
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-link {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--gray-700);
  transition: color var(--transition-base);
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--brand-primary);
  transition: width var(--transition-base);
}

.nav-link:hover::after { width: 100%; }

.nav-link:hover {
  color: var(--brand-primary);
}

.navbar.scrolled .nav-link {
  color: var(--gray-700);
}

.navbar.scrolled .nav-link:hover {
  color: var(--brand-primary);
}

.nav-cta {
  padding: 10px 24px;
  font-size: 0.85rem;
}

.nav-mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.nav-mobile-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--gray-900);
  border-radius: 2px;
  transition: all var(--transition-base);
}

.navbar.scrolled .nav-mobile-toggle span {
  background: var(--gray-900);
}

/* Dropdown Menu */
.nav-item-dropdown {
  position: relative;
}

.dropdown-arrow {
  font-size: 0.7em;
  margin-left: 2px;
  transition: transform 0.3s ease;
}

.nav-item-dropdown:hover .dropdown-arrow,
.nav-item-dropdown.open .dropdown-arrow {
  transform: rotate(180deg);
}

.nav-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  min-width: 220px;
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: var(--radius-md);
  box-shadow: 0 12px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04);
  padding: 8px 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s ease;
  z-index: 100;
}

.nav-item-dropdown:hover .nav-dropdown-menu,
.nav-item-dropdown.open .nav-dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.nav-dropdown-menu a {
  display: block;
  padding: 10px 20px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--gray-700);
  transition: all 0.2s ease;
  white-space: nowrap;
}

.nav-dropdown-menu a:hover {
  background: rgba(232, 93, 38, 0.06);
  color: var(--brand-primary);
  padding-left: 24px;
}

/* ============================================
 /* ============================================
   HERO BANNER — Light & Trust-Focused
   ============================================ */
.hero-banner {
  margin-top: 56px;
  padding: 100px 0 140px;
  background: var(--warm-bg);
  background-image: var(--warm-bg-texture);
  position: relative;
  overflow: hidden;
}

/* Organic Blobs */
.hero-banner::before {
  content: '';
  position: absolute;
  top: -150px;
  right: -5%;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(232,93,38,0.04) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.hero-banner::after {
  content: '';
  position: absolute;
  bottom: -100px;
  left: -5%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(232,93,38,0.03) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* Spice Decorations - Absolute Background Feel */
.hero-banner-grid::after {
  content: '';
  position: absolute;
  top: 15%;
  left: -40px;
  width: 120px;
  height: 120px;
  background: url('assets/images/background_spices.png') no-repeat center;
  background-size: contain;
  opacity: 0.08;
  transform: rotate(-15deg);
  pointer-events: none;
  z-index: 0;
}

.hero-banner-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: center;
}

.hero-banner-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  background: rgba(232, 93, 38, 0.15);
  border: 1px solid rgba(232, 93, 38, 0.3);
  border-radius: 60px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--brand-accent);
  margin-bottom: 20px;
}

.hero-banner-title {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4.5vw, 3.8rem);
  color: var(--gray-900);
  line-height: 1.05; /* Tighter for premium feel */
  margin-bottom: 24px;
  letter-spacing: -2px; /* Smoother typography */
  font-weight: 800;
}

.hero-highlight {
  color: var(--brand-primary);
  display: block;
}

/* Rotating text animation */
.text-rotate-wrapper {
  display: inline-block;
  position: relative;
  height: 1.15em;
  overflow: hidden;
  vertical-align: bottom;
}

.text-rotate-word {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(135deg, var(--brand-primary), var(--brand-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;
}

.text-rotate-word.active {
  opacity: 1;
  transform: translateY(0);
}

.text-rotate-word.exit {
  opacity: 0;
  transform: translateY(-100%);
}

.hero-banner-subtitle {
  font-size: 1.2rem;
  color: var(--gray-700);
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 550px;
  font-weight: 400;
}

.hero-cta-btn {
  font-size: 1.1rem;
  padding: 20px 48px;
  margin-bottom: 32px;
  display: inline-flex;
}

/* Trust pills */
.hero-trust-pills {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.trust-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 40px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--gray-700);
  letter-spacing: 0.2px;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-base);
}

.trust-pill:hover {
  border-color: var(--brand-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.hero-banner-ctas {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}

.btn-outline-dark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 36px;
  font-family: var(--font-main);
  font-size: 1rem;
  font-weight: 600;
  border-radius: 60px;
  border: 2px solid rgba(255,255,255,0.25);
  cursor: pointer;
  transition: all var(--transition-base);
  background: transparent;
  color: rgba(255,255,255,0.85);
}

.btn-outline-dark:hover {
  border-color: var(--brand-primary);
  color: var(--white);
  background: rgba(232, 93, 38, 0.15);
}

/* Stats strip */
.hero-banner-stats {
  display: flex;
  align-items: center;
  gap: 20px;
}

.banner-stat {
  display: flex;
  flex-direction: column;
}

.banner-stat-num {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--white);
}

.banner-stat-label {
  font-size: 0.7rem;
  color: rgba(255,255,255,0.5);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.banner-stat-divider {
  width: 1px;
  height: 32px;
  background: rgba(255,255,255,0.15);
}

/* Product image */
.hero-image-composition {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 520px;
}

.food-hero-img {
  width: 100%; /* More prominent since it's solo */
  height: auto;
  border-radius: var(--radius-lg);
  box-shadow: 0 30px 60px rgba(0,0,0,0.12);
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  animation: float-food 6s ease-in-out infinite;
}

@keyframes float-food {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@media (max-width: 768px) {
  .hero-image-composition {
    max-width: 440px;
    margin: 40px auto 0;
  }
}

@media (max-width: 768px) {
  .hero-banner {
    padding: 40px 0 30px;
  }
  .hero-banner-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    text-align: center;
  }
  .hero-banner-ctas {
    justify-content: center;
  }
  .hero-banner-stats {
    justify-content: center;
  }
  .hero-banner-subtitle {
    margin-left: auto;
    margin-right: auto;
  }
  .hero-product-img {
    max-height: 300px;
  }
  .hero-banner-badge {
    font-size: 0.7rem;
  }
}


/* --- Section Transitions & Optimization --- */




/* Hero Right — Visual */

/* --- Global Section Refinements --- */


/* ============================================
   PROBLEM SECTION
   ============================================ */
.problem-section {
  padding: 100px 0 60px; /* Consistently neater spacing */
  background: var(--white); /* Brighter, cleaner look */
}

.problem-section .container {
  text-align: center;
}

.problem-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 48px;
}

.problem-card {
  background: var(--white);
  padding: 36px 24px;
  border-radius: var(--radius-md);
  border: 1px solid var(--gray-200);
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.problem-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--brand-primary);
}

.problem-card-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-sm);
  background: var(--cream);
  border: 1px solid rgba(232, 93, 38, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin: 0 auto 16px;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.problem-card h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.problem-card p {
  font-size: 0.85rem;
  color: var(--gray-700);
  line-height: 1.6;
}

.problem-card .time-badge {
  display: inline-block;
  margin-top: 12px;
  padding: 4px 12px;
  background: #FFF0E5;
  color: var(--brand-primary);
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 60px;
}

/* ============================================
   SOLUTION / PRODUCT SECTION — Warm & Premium
   ============================================ */
.solution-section {
  padding: var(--section-padding);
  background: linear-gradient(160deg, var(--warm-dark) 0%, #262320 100%);
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.solution-section::before {
  content: '';
  position: absolute;
  top: -20%;
  right: -10%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(232,93,38,0.1) 0%, transparent 70%);
  pointer-events: none;
}

.solution-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* Solution Section */
.solution-section {
  padding: var(--section-padding);
  background: var(--dark-bg);
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.solution-left .section-subtitle {
  color: rgba(255,255,255,0.6);
}

.ingredient-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 32px;
  margin-bottom: 32px;
}

.ingredient-tag {
  padding: 8px 16px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 60px;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(255,255,255,0.7);
  transition: all var(--transition-base);
}

.ingredient-tag:hover {
  background: rgba(232, 93, 38, 0.15);
  border-color: rgba(232, 93, 38, 0.3);
  color: var(--brand-primary-light);
}

.ingredient-tag.more {
  background: linear-gradient(135deg, rgba(232,93,38,0.2), rgba(245,166,35,0.15));
  border-color: rgba(232,93,38,0.3);
  color: var(--brand-primary-light);
  font-weight: 700;
}

.solution-right {
  display: flex;
  justify-content: center;
}

.cooking-comparison {
  width: 100%;
  max-width: 480px;
}

.cooking-comparison-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  margin-bottom: 4px;
}

.comparison-header-item {
  padding: 14px;
  font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.comparison-header-item.old {
  background: rgba(255, 82, 82, 0.1);
  color: #FF5252;
}

.comparison-header-item.new {
  background: rgba(39, 174, 96, 0.1);
  color: var(--brand-green-light);
}

.cooking-comparison-rows {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.comparison-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
}

.comparison-cell {
  padding: 16px;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.comparison-cell.old {
  background: rgba(255, 82, 82, 0.05);
  color: rgba(255,255,255,0.6);
}

.comparison-cell.new {
  background: rgba(39, 174, 96, 0.05);
  color: rgba(255,255,255,0.8);
}

.comparison-cell .emoji {
  font-size: 1.1rem;
}

.comparison-total {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  margin-top: 4px;
}

.total-cell {
  padding: 20px 16px;
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  border-radius: 0 0 var(--radius-sm) var(--radius-sm);
}

.total-cell.old {
  background: rgba(255, 82, 82, 0.1);
  color: #FF5252;
}

.total-cell.new {
  background: rgba(39, 174, 96, 0.1);
  color: var(--brand-green-light);
}

/* ============================================
   OPPORTUNITY / EARNINGS SECTION
   ============================================ */
.opportunity-section {
  padding: 100px 0 60px; /* Reduced bottom padding */
  background: var(--white);
}

.opportunity-section .container {
  text-align: center;
}

.earnings-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;
}

.earnings-card {
  padding: 40px 28px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--gray-200);
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all var(--transition-base);
}

.earnings-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.earnings-card.featured {
  background: linear-gradient(160deg, var(--brand-primary), var(--brand-primary-dark));
  border: none;
  color: var(--white);
  transform: scale(1.05);
}

.earnings-card.featured:hover {
  transform: scale(1.05) translateY(-6px);
}

.earnings-card-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 4px 12px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 60px;
  background: rgba(255,255,255,0.2);
  color: var(--white);
}

.earnings-level {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--brand-primary);
  margin-bottom: 12px;
}

.earnings-card.featured .earnings-level {
  color: rgba(255,255,255,0.8);
}

.earnings-amount {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 4px;
}

.earnings-period {
  font-size: 0.8rem;
  color: var(--gray-500);
  margin-bottom: 24px;
}

.earnings-card.featured .earnings-period {
  color: rgba(255,255,255,0.6);
}

.earnings-effort {
  font-size: 0.9rem;
  font-weight: 500;
  padding: 12px 0;
  border-top: 1px solid var(--gray-200);
  margin-bottom: 20px;
}

.earnings-card.featured .earnings-effort {
  border-color: rgba(255,255,255,0.2);
}

.earnings-details {
  text-align: left;
}

.earnings-detail {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  font-size: 0.85rem;
  color: var(--gray-700);
}

.earnings-card.featured .earnings-detail {
  color: rgba(255,255,255,0.8);
}

.earnings-detail-icon {
  width: 24px;
  height: 24px;
  border-radius: var(--radius-full);
  background: rgba(39, 174, 96, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  flex-shrink: 0;
  color: var(--brand-green);
}

.earnings-card.featured .earnings-detail-icon {
  position: relative;
  overflow: hidden;
}

.comparison-card.brand {
  background: var(--cream);
  border: 1px solid rgba(232, 93, 38, 0.1);
}

.comparison-card.other {
  background: var(--warm-bg);
  border: 1px solid var(--gray-200);
}

/* ============================================
   COMMISSION STRUCTURE SECTION
   ============================================ */
.commission-section {
  padding: var(--section-padding);
  background: var(--cream);
}

.commission-section .container {
  text-align: center;
}

.commission-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;
}

.commission-card {
  background: var(--white);
  padding: 36px 28px;
  border-radius: var(--radius-md);
  border: 1px solid var(--gray-200);
  text-align: left;
  transition: all var(--transition-base);
}

.commission-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.commission-icon {
  font-size: 2rem;
  margin-bottom: 16px;
}

.commission-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.commission-percent {
  font-size: 2rem;
  font-weight: 800;
  color: var(--brand-primary);
  margin-bottom: 4px;
}

.commission-desc {
  font-size: 0.85rem;
  color: var(--gray-700);
  line-height: 1.6;
}

/* ============================================
   HOW IT WORKS SECTION
   ============================================ */
.how-section {
  padding: var(--section-padding);
  background: var(--white);
}

.how-section .container {
  text-align: center;
}

.steps-timeline {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  margin-top: 60px;
  position: relative;
}

.steps-timeline::before {
  content: '';
  position: absolute;
  top: 40px;
  left: 12.5%;
  right: 12.5%;
  height: 3px;
  background: linear-gradient(90deg, var(--brand-primary), var(--brand-accent), var(--brand-green));
  border-radius: 2px;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  position: relative;
}

.step-number {
  width: 80px;
  height: 80px;
  border-radius: var(--radius-full);
  background: var(--white);
  border: 3px solid var(--brand-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--brand-primary);
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
  transition: all var(--transition-base);
}

.step-item:hover .step-number {
  background: var(--brand-primary);
  color: var(--white);
  transform: scale(1.1);
}

.step-item h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.step-item p {
  font-size: 0.85rem;
  color: var(--gray-700);
  line-height: 1.5;
}

/* ============================================
   STARTER KIT SECTION
   ============================================ */
.kit-section {
  padding: var(--section-padding);
  background: var(--dark-bg);
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.kit-content {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 80px;
  align-items: flex-start; /* Fixes card stretching */
}

.kit-price-block {
  margin: 32px 0;
}

.kit-original-price s {
  font-size: 1.4rem;
  color: rgba(255,255,255,0.4);
  font-weight: 500;
}

.kit-sale-price {
  font-size: 4.5rem;
  font-weight: 800;
  color: var(--white);
  line-height: 1;
  margin: 12px 0;
  font-family: var(--font-main);
  letter-spacing: -2px;
}

.kit-savings {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(39,174,96,0.15);
  border: 1px solid rgba(39,174,96,0.3);
  border-radius: 60px;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--brand-green-light);
}

.kit-left .section-subtitle {
  color: rgba(255,255,255,0.6);
}

.kit-guarantee {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: rgba(39, 174, 96, 0.1);
  border: 1px solid rgba(39, 174, 96, 0.2);
  border-radius: var(--radius-md);
  margin-top: 24px;
}

.kit-guarantee-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.kit-guarantee-text h4 {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--brand-green-light);
  margin-bottom: 2px;
}

.kit-guarantee-text p {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.5);
}

.kit-right {
  display: flex;
  justify-content: center;
}

.kit-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  padding: 40px;
  box-shadow: var(--shadow-lg);
}

.kit-card h3 {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 32px;
  color: var(--white);
  letter-spacing: -0.5px;
}

.kit-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.kit-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px;
  background: rgba(255,255,255,0.04);
  border-radius: var(--radius-sm);
  transition: all var(--transition-base);
}

.kit-item:hover {
  background: rgba(255,255,255,0.08);
}

.kit-item-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: linear-gradient(135deg, rgba(232,93,38,0.15), rgba(245,166,35,0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
}

.kit-item-text h4 {
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
}

.kit-item-text p {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.45);
}

/* ============================================
   SOCIAL PROOF / TESTIMONIALS
   ============================================ */
.testimonials-section {
  padding: var(--section-padding);
  background: var(--off-white);
}

.testimonials-section .container {
  text-align: center;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;
}

.testimonial-card {
  background: var(--white);
  padding: 32px;
  border-radius: var(--radius-md);
  border: 1px solid var(--gray-200);
  text-align: left;
  transition: all var(--transition-base);
  position: relative;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.testimonial-quote {
  font-size: 2.5rem;
  color: var(--brand-primary);
  line-height: 1;
  margin-bottom: 12px;
  font-family: Georgia, serif;
}

.testimonial-text {
  font-size: 0.95rem;
  color: var(--gray-700);
  line-height: 1.7;
  margin-bottom: 20px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.testimonial-avatar {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--brand-primary), var(--brand-accent));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--white);
  font-weight: 700;
}

.testimonial-info h4 {
  font-size: 0.9rem;
  font-weight: 700;
}

.testimonial-info p {
  font-size: 0.75rem;
  color: var(--gray-500);
}

.testimonial-earning {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 6px 12px;
  background: rgba(39, 174, 96, 0.1);
  border-radius: 60px;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--brand-green);
}

/* ============================================
   FAQ SECTION
   ============================================ */
.faq-section {
  padding: var(--section-padding);
  background: var(--white);
}

.faq-section .container {
  max-width: 800px;
  text-align: center;
}

.faq-list {
  margin-top: 48px;
  text-align: left;
}

.faq-item {
  border-bottom: 1px solid var(--gray-200);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  font-family: var(--font-main);
  font-size: 1rem;
  font-weight: 600;
  color: var(--gray-900);
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 16px;
  transition: color var(--transition-base);
}

.faq-question:hover {
  color: var(--brand-primary);
}

.faq-icon {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-full);
  background: var(--gray-100);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--gray-700);
  flex-shrink: 0;
  transition: all var(--transition-base);
}

.faq-item.active .faq-icon {
  background: var(--brand-primary);
  color: var(--white);
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
}

.faq-answer-inner {
  padding-bottom: 20px;
  font-size: 0.9rem;
  color: var(--gray-700);
  line-height: 1.7;
}

.faq-item.active .faq-answer {
  max-height: 300px;
}

/* ============================================
   CTA FOOTER SECTION
   ============================================ */
.cta-section {
  padding: 80px 0;
  background: linear-gradient(160deg, var(--brand-primary), var(--brand-primary-dark), #C04020);
  color: var(--white);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
}

.cta-section::after {
  content: '';
  position: absolute;
  bottom: -100px;
  left: -100px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
}

.cta-section .container {
  position: relative;
  z-index: 2;
}

.cta-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 16px;
}

.cta-subtitle {
  font-size: 1.1rem;
  opacity: 0.85;
  max-width: 600px;
  margin: 0 auto 36px;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.cta-trust {
  display: flex;
  justify-content: center;
  gap: 32px;
  font-size: 0.8rem;
  opacity: 0.7;
}

.cta-trust-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

/* ============================================
   FOOTER
   ============================================ */
.footer {
  padding: 40px 0;
  background: var(--dark-bg);
  color: rgba(255,255,255,0.4);
  text-align: center;
  font-size: 0.85rem;
}

.footer a {
  color: rgba(255,255,255,0.6);
  transition: color var(--transition-base);
}

.footer a:hover {
  color: var(--brand-primary-light);
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 16px;
}

/* ============================================
   MOBILE RESPONSIVE
   ============================================ */
@media (max-width: 1024px) {
  .hero .container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-desc { margin-left: auto; margin-right: auto; }
  .hero-ctas { justify-content: center; }
  .hero-stats { justify-content: center; }

  .problem-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .solution-content {
    grid-template-columns: 1fr;
  }

  .earnings-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .earnings-card.featured {
    transform: scale(1);
  }

  .earnings-card.featured:hover {
    transform: translateY(-6px);
  }

  .commission-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .steps-timeline {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  .steps-timeline::before {
    display: none;
  }

  .kit-content {
    grid-template-columns: 1fr;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 768px) {
  :root {
    --section-padding: 60px 0;
  }

  .nav-links {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(13, 13, 26, 0.98);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    z-index: 999;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links.active .nav-link {
    color: var(--white);
    font-size: 1.1rem;
  }

  /* Mobile dropdown */
  .nav-item-dropdown {
    width: 100%;
    text-align: center;
  }

  .nav-dropdown-menu {
    position: static;
    transform: none;
    opacity: 1;
    visibility: visible;
    min-width: auto;
    background: rgba(255,255,255,0.05);
    box-shadow: none;
    border-radius: var(--radius-sm);
    padding: 4px 0;
    margin-top: 8px;
    display: none;
  }

  .nav-item-dropdown.open .nav-dropdown-menu {
    display: block;
  }

  .nav-dropdown-menu a {
    color: rgba(255,255,255,0.7);
    font-size: 0.9rem;
    padding: 8px 16px;
  }

  .nav-dropdown-menu a:hover {
    background: rgba(255,255,255,0.08);
    color: var(--white);
    padding-left: 20px;
  }

  .nav-mobile-toggle {
    display: flex;
    z-index: 1001;
  }

  .nav-mobile-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .nav-mobile-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .nav-mobile-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  .hero {
    padding: 100px 0 60px;
    min-height: auto;
  }

  .hero-stats {
    gap: 24px;
  }

  .hero-visual { margin-top: 20px; }

  .floating-badge {
    display: none;
  }

  .problem-grid {
    grid-template-columns: 1fr;
  }

  .steps-timeline {
    grid-template-columns: 1fr;
  }

  .cta-trust {
    flex-direction: column;
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .hero-ctas {
    flex-direction: column;
    align-items: center;
  }

  .hero-ctas .btn {
    width: 100%;
    max-width: 300px;
  }

  .hero-stats {
    flex-wrap: wrap;
    justify-content: center;
  }

  .cooking-comparison-header,
  .comparison-row,
  .comparison-total {
    grid-template-columns: 1fr;
  }

  .calculator-wrapper {
    flex-direction: column;
  }
}

/* ============================================
   EARNINGS CALCULATOR — Professional Design
   ============================================ */
.calculator-section {
  padding: 100px 0 40px; 
  background: var(--warm-bg);
}

.calculator-wrapper {
  background: var(--white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  max-width: 1100px;
  margin: 60px auto 0;
  border: 1px solid var(--gray-200);
}

.calculator-inputs {
  padding: 50px;
  background: var(--white);
}

.calc-section-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 32px;
  color: var(--gray-900);
  letter-spacing: -0.5px;
}

.calc-field {
  margin-bottom: 32px;
}

.calc-field:last-child {
  margin-bottom: 0;
}

.calc-field label {
  display: block;
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 12px;
  color: var(--gray-700);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Product Cards */
.product-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.product-card {
  flex: 1;
  background: var(--white);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-sm);
  padding: 16px 12px;
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.product-card:hover {
  border-color: var(--brand-primary-light);
  transform: translateY(-2px);
  background: rgba(232, 93, 38, 0.02);
}

.product-card.active {
  border-color: var(--brand-primary);
  background: linear-gradient(135deg, rgba(232,93,38,0.08), rgba(245,166,35,0.05));
  box-shadow: 0 0 0 3px rgba(232, 93, 38, 0.12);
}

.product-price {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--gray-900);
  line-height: 1;
}

.product-card.active .product-price {
  color: var(--brand-primary);
}

.product-name {
  font-size: 0.7rem;
  color: var(--gray-500);
  margin-top: 4px;
  font-weight: 500;
}

/* Slider */
.slider-wrapper {
  position: relative;
  padding-top: 40px;
}

.slider-value-bubble {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: var(--brand-primary);
  color: var(--white);
  padding: 6px 16px;
  border-radius: 60px;
  font-size: 0.85rem;
  font-weight: 700;
  white-space: nowrap;
  transition: left 0.15s ease;
  box-shadow: 0 4px 12px rgba(232, 93, 38, 0.25);
}

.slider-value-bubble::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  background: var(--brand-primary);
  border-radius: 2px;
  transform: translateX(-50%) rotate(45deg);
}

.calc-field input[type="range"] {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: var(--gray-200);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  position: relative;
}

.calc-field input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--white);
  border: 3px solid var(--brand-primary);
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  cursor: grab;
  transition: all 0.2s ease;
}

.calc-field input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 2px 16px rgba(232, 93, 38, 0.35);
}

.calc-field input[type="range"]::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--white);
  border: 3px solid var(--brand-primary);
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  cursor: grab;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 0.7rem;
  color: var(--gray-400);
  font-weight: 500;
}

/* Toggle Group */
.toggle-group {
  display: flex;
  gap: 10px;
}

.toggle-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 16px;
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-md);
  background: var(--off-white);
  font-size: 0.85rem;
  font-family: var(--font-body);
  cursor: pointer;
  transition: all 0.25s ease;
  color: var(--gray-600);
  font-weight: 500;
}

.toggle-btn:hover {
  border-color: var(--brand-primary);
  background: rgba(232, 93, 38, 0.03);
}

.toggle-btn.active {
  background: linear-gradient(135deg, var(--brand-primary), var(--brand-primary-dark));
  color: var(--white);
  border-color: var(--brand-primary);
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(232, 93, 38, 0.25);
}

.toggle-icon {
  font-size: 1.1rem;
}

/* Calculator Results Panel — Warm Charcoal */
.calculator-results {
  flex: 0.9;
  padding: 40px;
  background: linear-gradient(160deg, var(--warm-dark), var(--warm-charcoal));
  color: var(--white);
  position: relative;
  overflow: hidden;
}

.calculator-results::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 80% 20%, rgba(232,93,38,0.06) 0%, transparent 50%);
  pointer-events: none;
}

/* Tier Progress Bar */
.tier-progress {
  margin-bottom: 28px;
  position: relative;
  z-index: 1;
}

.tier-bar {
  height: 8px;
  background: rgba(255,255,255,0.08);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.tier-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--brand-primary), var(--brand-accent));
  border-radius: 4px;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.tier-marker {
  position: absolute;
  top: -4px;
  width: 16px;
  height: 16px;
  background: var(--white);
  border: 3px solid var(--brand-primary);
  border-radius: 50%;
  transform: translateX(-50%);
  transition: left 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.tier-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.tier-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255,255,255,0.3);
  text-align: center;
  line-height: 1.3;
}

.tier-label small {
  font-weight: 400;
  font-size: 0.65rem;
}

.tier-label.tier-active {
  color: var(--brand-primary-light);
}

/* Result Rows */
.result-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  font-size: 0.9rem;
  color: rgba(255,255,255,0.5);
  border-bottom: 1px solid rgba(255,255,255,0.05);
  position: relative;
  z-index: 1;
}

.result-value {
  font-weight: 700;
  color: var(--white);
  font-size: 1.05rem;
  font-feature-settings: 'tnum';
}

.result-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0 16px;
  margin-top: 8px;
  border-top: 2px solid rgba(232, 93, 38, 0.3);
  font-weight: 700;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;
}

.result-total-value {
  font-size: 2.2rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--brand-primary-light), var(--brand-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: transform 0.2s ease;
  line-height: 1;
}

.tier-explanation {
  margin-top: 16px;
  padding: 12px 16px;
  background: rgba(232, 93, 38, 0.08);
  border: 1px solid rgba(232, 93, 38, 0.15);
  border-radius: var(--radius-sm);
}

/* ============================================
   SUCCESS STEPS (Getting Started)
   ============================================ */
.steps-section {
  padding: 60px 0 100px;
  background: var(--white);
}

.step-card {
  background: var(--warm-bg);
  padding: 40px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--gray-200);
  position: relative;
  transition: all var(--transition-base);
}

.step-card:hover {
  transform: translateY(-5px);
  border-color: var(--brand-primary-light);
  box-shadow: var(--shadow-md);
}

.step-number {
  width: 60px;
  height: 60px;
  background: var(--brand-primary);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  margin-bottom: 24px;
  font-size: 1.2rem;
  box-shadow: 0 8px 20px rgba(232, 93, 38, 0.2);
}

/* ============================================
   FOUNDING PARTNER KIT
   ============================================ */
.kit-section {
  padding: var(--section-padding);
  background: var(--warm-bg);
  color: var(--gray-900);
  overflow: hidden;
}

.kit-content {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 80px;
  align-items: flex-start; /* Prevents stretching */
}

.section-title.light {
  color: var(--gray-900) !important;
}

.kit-original-price s {
  font-size: 1.4rem;
  color: var(--gray-500);
  font-weight: 500;
}

.kit-sale-price {
  font-size: 4.5rem;
  font-weight: 800;
  color: var(--brand-primary);
  line-height: 1;
  margin: 12px 0;
  font-family: var(--font-main);
  letter-spacing: -2px;
}

.kit-card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-xl);
  padding: 48px;
  box-shadow: var(--shadow-lg);
}

.kit-card h3 {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 32px;
  color: var(--gray-900);
  letter-spacing: -1px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.kit-items {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.kit-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 12px;
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
}

.kit-item:hover {
  background: var(--cream);
  transform: translateX(5px);
}

.kit-item-icon {
  width: 48px;
  height: 48px;
  background: var(--white);
  border: 1px solid rgba(232, 93, 38, 0.1);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
}

.kit-item-text h4 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 4px;
}

.kit-item-text p {
  font-size: 0.95rem;
  color: var(--gray-600);
  line-height: 1.4;
}

.kit-guarantee {
  background: var(--cream);
  border: 1px solid rgba(232, 93, 38, 0.1);
  color: var(--gray-900);
}

.kit-guarantee h4 {
  color: var(--brand-primary);
}

.kit-guarantee p {
  color: var(--gray-700);
}

/* Responsive calculator */
@media (max-width: 768px) {
  .hero-banner {
    padding: 80px 0 60px;
    text-align: center;
  }
  
  .hero-banner-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .hero-banner-title {
    font-size: 2.5rem;
  }
  
  .hero-banner-subtitle {
    margin: 0 auto 32px;
  }
  
  .hero-trust-pills {
    justify-content: center;
  }
  
  .kit-content {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  
  .kit-card {
    padding: 32px 24px;
  }

  .calculator-wrapper {
    flex-direction: column;
  }
  
  .product-cards {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .toggle-group {
    flex-direction: column;
  }
  
  .steps-timeline {
    grid-template-columns: 1fr 1fr !important;
  }
}

@media (max-width: 480px) {
  .steps-timeline {
    grid-template-columns: 1fr !important;
  }
  
  .product-cards {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .calculator-inputs,
  .calculator-results {
    padding: 24px;
  }
}

/* Price Hike Notice */
.price-hike-notice {
  font-size: 0.75rem;
  color: var(--gray-500);
  margin-top: 12px;
  line-height: 1.5;
  font-style: italic;
}

.footer .price-hike-notice {
  color: rgba(255,255,255,0.4);
  font-size: 0.7rem;
  max-width: 600px;
  margin: 12px auto 0;
}

/* ============================================
   FAQ SECTION
   ============================================ */
.faq-section {
  padding: var(--section-padding);
  background: var(--white);
}

.faq-item {
  background: var(--warm-bg);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-md);
  margin-bottom: 16px;
  transition: all var(--transition-base);
}

.faq-item.active {
  border-color: var(--brand-primary-light);
  box-shadow: var(--shadow-sm);
}

.faq-question {
  color: var(--gray-900);
  font-weight: 700;
}

.faq-icon {
  color: var(--brand-primary);
}

.faq-answer-inner {
  color: var(--gray-700);
}

/* ============================================
   FOOTER
   ============================================ */
.footer {
  background: var(--dark-bg);
  color: var(--white);
  padding: 80px 0 40px;
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.05);
  padding-top: 30px;
  margin-top: 60px;
  color: rgba(255,255,255,0.4);
}

.footer-link:hover {
  color: var(--brand-primary-light);
}

/* ============================================
   WHAT YOU NEED (Dynamic UI)
   ============================================ */
#requirements .problem-grid {
  margin-top: 50px;
  gap: 24px;
}

#requirements .problem-card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-left: 4px solid var(--brand-primary);
  padding: 32px;
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

#requirements .problem-card:hover {
  transform: translateY(-8px);
  border-color: var(--brand-primary-light);
  box-shadow: var(--shadow-lg);
  background: var(--cream);
}

#requirements .problem-card::after {
  content: '✓';
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  background: var(--gray-100);
  color: var(--gray-400);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.9rem;
  transition: all var(--transition-base);
}

#requirements .problem-card:hover::after {
  background: var(--brand-primary);
  color: var(--white);
  transform: rotate(360deg);
}

#requirements .problem-card-icon {
  font-size: 2.5rem;
  margin-bottom: 8px;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

#requirements .problem-card:hover .problem-card-icon {
  transform: scale(1.2) rotate(5deg);
}

#requirements .problem-card h3 {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--gray-900);
  letter-spacing: -0.5px;
}

#requirements .problem-card p {
  color: var(--gray-600);
  line-height: 1.6;
}

#requirements .time-badge {
  align-self: flex-start;
  padding: 6px 14px;
  border-radius: 40px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

