// src/animations/framerMotionAnimations.js
import { motion } from 'framer-motion';

// Page Load Animation (fade-in with delay)
export const pageLoadAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
};

// Typewriter effect for intro text
export const typewriterEffect = {
  initial: { opacity: 0, width: '0ch' },
  animate: {
    opacity: 1,
    width: 'auto',
    transition: {
      duration: 3,
      ease: 'ease-in-out',
      delay: 0.5,
    },
  },
};

// Button hover animation (scale effect)
export const buttonHoverEffect = {
  whileHover: { scale: 1.1, transition: { duration: 0.2 } },
  whileTap: { scale: 0.9 },
};
