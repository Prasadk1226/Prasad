// src/components/Contact.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, styled, keyframes, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import contactAnimation from '../assets/contactAnimation.json';
import './Contact.css';

// Keyframes for unique hover effect on the button
const pulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 98, 0, 0.7); }
  70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(255, 98, 0, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 98, 0, 0); }
`;

// Styled Components for better structure and styling
const ContactSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(6, 3),
  flexDirection: 'row',
  background: theme.palette.grey[100],
  minHeight: '80vh',
  marginTop: '10vh',
  marginBottom: '10vh',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
    textAlign: 'center',
    padding: theme.spacing(4, 2),
  },
}));

const AnimationContainer = styled(motion.div)(({ theme }) => ({
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    width: '80%',
    marginBottom: theme.spacing(4),
  },
}));

const ContactFormContainer = styled(motion.div)(({ theme }) => ({
  width: '40%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    width: '90%',
    alignItems: 'center',
  },
}));

const ContactTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(4),
  color: theme.palette.primary.main,
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(3),
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.secondary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.dark,
    },
  },
}));

const SendButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  borderRadius: '30px',
  padding: theme.spacing(1.5, 4),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    animation: `${pulse} 1.5s infinite`,
    boxShadow: theme.shadows[3],
    transform: 'scale(1.02)',
  },
  [theme.breakpoints.down('md')]: {
    width: '80%',
  },
}));

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server)
    console.log('Form Data:', formData);
    // Optionally reset the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactSection id="contact">
      {/* Animation on the Right (Left on Mobile) */}
      <AnimationContainer
        initial={{ opacity: 0, x: isMobile ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Lottie
          animationData={contactAnimation}
          loop={true}
          style={{ width: '100%', maxWidth: 400 }}
        />
      </AnimationContainer>

      {/* Contact Form on the Left (Right on Mobile) */}
      <ContactFormContainer
        initial={{ opacity: 0, x: isMobile ? 100 : -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <ContactTitle variant="h4">
          Get in Touch
        </ContactTitle>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <StyledTextField
            label="Name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <StyledTextField
            label="Email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <StyledTextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <SendButton
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className='submit-button'
          >
            Send Message
          </SendButton>
        </form>
      </ContactFormContainer>
    </ContactSection>
  );
};

export default Contact;