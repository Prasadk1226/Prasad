// src/animations/lottieAnimations.js
import Lottie from 'lottie-react';
import animationData from '../assets/lottie/animation.json'; // Make sure to place your Lottie JSON in assets

// Hero Section Lottie Animation
export const HeroLottie = () => (
  <Lottie animationData={animationData} loop={true} />
);

// Contact Form Send Lottie Animation
export const ContactFormSendLottie = () => (
  <Lottie animationData={animationData} loop={false} />
);
