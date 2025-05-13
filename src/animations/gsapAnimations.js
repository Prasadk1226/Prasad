// // src/animations/gsapAnimations.js
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// // Scroll-reveal animation (fade-in and slide-up)
// export const scrollReveal = () => {
//   gsap.from('.reveal', {
//     scrollTrigger: {
//       trigger: '.reveal',
//       start: 'top 80%',
//       end: 'bottom 20%',
//       scrub: true,
//       toggleActions: 'play none none none',
//     },
//     opacity: 0,
//     y: 100,
//     duration: 1,
//     ease: 'power3.out',
//   });
// };

// // Parallax Effect (background image or content moves at different speed than page)
// export const parallaxEffect = () => {
//   gsap.to('.parallax', {
//     y: '50%',
//     ease: 'none',
//     scrollTrigger: {
//       trigger: '.parallax-container',
//       start: 'top bottom',
//       end: 'bottom top',
//       scrub: 1,
//     },
//   });
// };

// // Pinned Section (for sticky or timeline sections)
// export const pinnedSection = () => {
//   gsap.to('.pinned-section', {
//     scrollTrigger: {
//       trigger: '.pinned-section',
//       start: 'top top',
//       end: 'bottom+=200% top',
//       pin: true,
//       scrub: 1,
//     },
//   });
// };

// // 3D Effect for Section (Tilt on scroll)
// export const threeDEffect = () => {
//   gsap.to('.threeD', {
//     rotationX: 10,
//     rotationY: 10,
//     scrollTrigger: {
//       trigger: '.threeD',
//       start: 'top bottom',
//       end: 'bottom top',
//       scrub: 2,
//     },
//   });
// };

// // Section Fade-In with Scaling Effect (for added dynamism)
// export const fadeAndScale = () => {
//   gsap.from('.scale-fade', {
//     opacity: 0,
//     scale: 0.8,
//     duration: 1.5,
//     ease: 'power3.out',
//     scrollTrigger: {
//       trigger: '.scale-fade',
//       start: 'top 75%',
//       end: 'bottom 25%',
//       scrub: true,
//       toggleActions: 'play none none none',
//     },
//   });
// };

// // Typewriter Effect for text (for dynamic text animations)
// export const typewriterEffect = () => {
//   gsap.to('.typewriter', {
//     duration: 2,
//     text: { value: 'Frontend Developer / React Developer / Software Developer' },
//     ease: 'power1.out',
//     scrollTrigger: {
//       trigger: '.typewriter',
//       start: 'top center',
//       end: 'bottom center',
//       scrub: true,
//     },
//   });
// };

// // Background Fade-In Effect (for background color or image changes)
// export const backgroundFadeIn = () => {
//   gsap.from('.bg-fade', {
//     opacity: 0,
//     duration: 2,
//     ease: 'power3.out',
//     scrollTrigger: {
//       trigger: '.bg-fade',
//       start: 'top center',
//       end: 'bottom center',
//       scrub: true,
//     },
//   });
// };

// // Hover Animations for Interactive Elements (e.g., buttons or cards)
// export const hoverEffect = () => {
//   gsap.from('.hover-effect', {
//     scale: 0.9,
//     opacity: 0,
//     duration: 0.5,
//     ease: 'power1.out',
//     scrollTrigger: {
//       trigger: '.hover-effect',
//       start: 'top 90%',
//       end: 'bottom 10%',
//       scrub: true,
//     },
//   });
// };

// // Animate SVG Draw (for icons or illustrations)
// export const svgDraw = () => {
//   gsap.from('.svg-draw', {
//     strokeDashoffset: 400,
//     strokeDasharray: 400,
//     duration: 2,
//     ease: 'power3.out',
//     scrollTrigger: {
//       trigger: '.svg-draw',
//       start: 'top 75%',
//       end: 'bottom 25%',
//       scrub: true,
//     },
//   });
// };

// // Call all animations on page load
// export const initAnimations = () => {
//   scrollReveal();
//   parallaxEffect();
//   pinnedSection();
//   threeDEffect();
//   fadeAndScale();
//   typewriterEffect();
//   backgroundFadeIn();
//   hoverEffect();
//   svgDraw();
// };


import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Scroll-reveal animation (fade-in and slide-up)
export const scrollReveal = () => {
  gsap.from('.reveal', {
    scrollTrigger: {
      trigger: '.reveal',
      start: 'top 90%', // Trigger when it enters 90% of the viewport
      end: 'bottom 10%', // End when the section is near the bottom of the viewport
      once: true, // Trigger only once
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: 'power4.out',
  });
};

// Parallax Effect (background image or content moves at different speed than page)
export const parallaxEffect = () => {
  gsap.to('.parallax', {
    y: '50%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.parallax-container',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5, // Smoother scrolling
    },
  });
};

// Pinned Section (for sticky or timeline sections)
export const pinnedSection = () => {
  gsap.to('.pinned-section', {
    scrollTrigger: {
      trigger: '.pinned-section',
      start: 'top top',
      end: 'bottom+=200% top',
      pin: true,
      scrub: 1.5,
    },
  });
};

// 3D Effect for Section (Tilt on scroll)
export const threeDEffect = () => {
  gsap.to('.threeD', {
    rotationX: 15,
    rotationY: 15,
    scrollTrigger: {
      trigger: '.threeD',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 2, // Enhanced scrubbing
    },
  });
};

// Section Fade-In with Scaling Effect (for added dynamism)
export const fadeAndScale = () => {
  gsap.from('.scale-fade', {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '.scale-fade',
      start: 'top 75%',
      end: 'bottom 25%',
      scrub: 1.5,
      toggleActions: 'play none none none',
    },
  });
};

// Typewriter Effect for text (for dynamic text animations)
export const typewriterEffect = () => {
  gsap.from('.typewriter', {
    duration: 2,
    text: { value: '' },
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '.typewriter',
      start: 'top 60%',
      end: 'bottom 60%',
      scrub: 1,
    },
  });
};

// Background Fade-In Effect (for background color or image changes)
export const backgroundFadeIn = () => {
  gsap.from('.bg-fade', {
    opacity: 0,
    duration: 2,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '.bg-fade',
      start: 'top 60%',
      end: 'bottom 60%',
      scrub: 1,
    },
  });
};

// Hover Animations for Interactive Elements (e.g., buttons or cards)
export const hoverEffect = () => {
  gsap.from('.hover-effect', {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.hover-effect',
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1,
    },
  });
};

// Animate SVG Draw (for icons or illustrations)
export const svgDraw = () => {
  gsap.from('.svg-draw', {
    strokeDashoffset: 400,
    strokeDasharray: 400,
    duration: 2.5,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: '.svg-draw',
      start: 'top 75%',
      end: 'bottom 25%',
      scrub: 1.5,
    },
  });
};

// Custom Staggered Animations for Multiple Elements (for dynamic entry)
export const staggerEffect = () => {
  gsap.from('.stagger', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: 'power4.out',
    stagger: 0.3, // Stagger the animation for multiple elements
    scrollTrigger: {
      trigger: '.stagger',
      start: 'top 75%',
      end: 'bottom 25%',
      scrub: 1.5,
    },
  });
};

// Call each animation individually when the page scrolls
export const initAnimations = () => {
  scrollReveal();
  parallaxEffect();
  pinnedSection();
  threeDEffect();
  fadeAndScale();
  typewriterEffect();
  backgroundFadeIn();
  hoverEffect();
  svgDraw();
  staggerEffect();
};
