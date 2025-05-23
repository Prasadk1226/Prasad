
// src/components/Projects.js
import React from 'react';
import { Box, CardContent, Typography, Button, styled, keyframes } from '@mui/material';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'Roommate App',
    description: 'A platform for students to find PGs with unique features.',
    link: 'https://room-mate-app-xdk4.vercel.app/',
  },
  {
    title: 'Spotify Clone',
    description: 'A clone of Spotify with real-time content using the Spotify API.',
    link: 'https://prasadk1226.github.io/Spotify_Clone/',
  },
  {
    title: 'Simple House Website',
    description: 'A responsive website for a restaurant using HTML5 and CSS3.',
    link: 'https://prasadk1226.github.io/Project-work/',
  },
  {
    title: 'Crypto Currence site',
    description: 'A responsive React application that displays the realtime data of cryptocurrencies.',
    link: 'https://lancierecrypto.vercel.app/',
  },
];

const ProjectCard = styled(motion.div)(({ theme }) => ({
  width: 'clamp(300px, 40%, 400px)',
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  boxShadow: theme.shadows[4],
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: theme.shadows[8],
  },
}));

const CardContentStyled = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
  color: theme.palette.primary.main,
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(255, 208, 0, 0.68); }
  100% { box-shadow: 0 0 20px rgba(255, 251, 0, 0.8); }
`;

const ViewProjectButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(1, 2),
  transition: 'background-color 0.3s ease-in-out, transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'scale(1.05)',
    animation: `${glow} 1s infinite alternate`,
  },
}));

const Projects = () => {
  return (
    <Box
      className="projects-section"
      sx={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 20px', // Add horizontal padding for responsiveness
      }}
    >
      <Typography variant="h4" align="center" className="section-title" sx={{ marginBottom: '40px', fontWeight: 'bold', color: 'primary.main' }}>
        My Projects Showcase
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(auto-fit, minmax(300px, 1fr))' },
          gap: '30px',
          width: '90%', // Adjust width for better responsiveness
          maxWidth: '1200px', // Optional maximum width
        }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProjectCard>
              <CardContentStyled>
                <ProjectTitle variant="h6">{project.title}</ProjectTitle>
                <ProjectDescription variant="body2">{project.description}</ProjectDescription>
                <ViewProjectButton variant="contained" href={project.link} target="_blank">
                  View Project
                </ViewProjectButton>
              </CardContentStyled>
            </ProjectCard>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;