import { gsap } from 'gsap';

export const fadeIn = (element, duration = 1) => {
  gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration });
};
