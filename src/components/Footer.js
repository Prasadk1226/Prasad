
import React from 'react';
import { Box, Typography, IconButton, styled, keyframes } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import "./Footer.css";

// Keyframes for subtle icon hover animation
const pulseIcon = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

// Keyframes for character zoom and glow on hover
const charZoomGlow = keyframes`
  0% { transform: scale(1); text-shadow: none; }
  100% { transform: scale(1.5); text-shadow: 0 0 8px rgba(255, 98, 0, 0.8); }
`;

// Styled Components
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
  padding: theme.spacing(3),
  paddingBottom: theme.spacing(4),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    textAlign: 'center',
    gap: theme.spacing(2),
  },
}));

const FooterText = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  opacity: 0.7,
  display: 'inline-block',
  marginRight: '0.5rem',
}));

const FooterWord = styled('span')({
  display: 'inline-block',
  transition: 'transform 0.2s ease, text-shadow 0.2s ease',
  '&:hover': {
    animation: `${charZoomGlow} 0.3s forwards`,
  },
});

const SocialIconsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  opacity: 0.8,
  transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
  '&:hover': {
    opacity: 1,
    transform: 'scale(1.3)',
    animation: `${pulseIcon} 1s infinite`,
  },
}));

const Footer = () => {
  const text = "Built with 💙 by Prasad Kancheti";
  const words = text.split(' ');

  return (
    <FooterContainer className="footer">
      <FooterText variant="body2" className="footer-text">
        {words.map((word, index) => {
          const isHeart = word === '💙';
          return (
            <React.Fragment key={index}>
              <FooterWord>{isHeart ? '💙' : word}</FooterWord>
              {index < words.length - 1 && <span> </span>}
            </React.Fragment>
          );
        })}
      </FooterText>
      <SocialIconsContainer>
        <SocialIconButton color="inherit" href="https://github.com/Prasadk1226" target="_blank">
          <GitHub />
        </SocialIconButton>
        <SocialIconButton color="inherit" href="https://www.linkedin.com/in/prasad-kancheti-776b54241" target="_blank">
          <LinkedIn />
        </SocialIconButton>
        <SocialIconButton color="inherit" href="mailto:prasadkancheti@example.com" target="_blank">
          <Email />
        </SocialIconButton>
      </SocialIconsContainer>
    </FooterContainer>
  );
};

export default Footer;
