// Animation variants for Framer Motion
// Normalized for premium, calm, professional experience
// Consistent easing: cubic-bezier(0.33, 1, 0.68, 1) - smooth ease-out

// STANDARD EASING - Use everywhere for consistency
const PREMIUM_EASING = [0.33, 1, 0.68, 1];

// DURATION STANDARDS
// - Page/Section reveals: 0.9-1.0s (calm, editorial)
// - Scroll reveals: 0.8s (smooth, not rushed)
// - Stagger delays: 0.12-0.15s (gentle rhythm)
// - Hover interactions: 0.3-0.4s (responsive but not jumpy)
// - Micro-interactions: 0.2-0.3s (subtle)

// ============================================
// FADE ANIMATIONS
// ============================================

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    duration: 0.9,
    ease: PREMIUM_EASING,
  },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
  transition: {
    duration: 0.8,
    ease: PREMIUM_EASING,
  },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: {
    duration: 0.8,
    ease: PREMIUM_EASING,
  },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
  transition: {
    duration: 0.8,
    ease: PREMIUM_EASING,
  },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 },
  transition: {
    duration: 0.8,
    ease: PREMIUM_EASING,
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
  transition: {
    duration: 0.7,
    ease: PREMIUM_EASING,
  },
};

// ============================================
// STAGGER ANIMATIONS
// ============================================

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: PREMIUM_EASING,
    },
  },
};

// ============================================
// HOVER ANIMATIONS
// ============================================

export const hoverScale = {
  scale: 1.02,
  transition: {
    duration: 0.3,
    ease: PREMIUM_EASING,
  },
};

export const hoverLift = {
  y: -4,
  transition: {
    duration: 0.3,
    ease: PREMIUM_EASING,
  },
};

// ============================================
// PAGE & SCROLL ANIMATIONS
// ============================================

// Page transition - calm, editorial
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: PREMIUM_EASING,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: PREMIUM_EASING,
    },
  },
};

// Scroll reveal - smooth, not rushed
export const scrollReveal = {
  initial: { opacity: 0.9, y: 16 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: PREMIUM_EASING,
    },
  },
  viewport: { once: true, margin: "-100px" },
};


// Scroll reveal with stagger
export const scrollRevealStagger = {
  whileInView: {
    transition: {
      staggerChildren: 0.12,
    },
  },
  viewport: { once: true, margin: "-80px" },
};

