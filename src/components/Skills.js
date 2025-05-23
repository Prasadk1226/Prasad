// src/components/Skills.js
import React from 'react';
import { Box, Typography, Grid, LinearProgress, styled, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import "./Skills.css"

const skillsData = [
  { name: 'HTML', value: 90, color: '#E34F26' },
  { name: 'CSS', value: 85, color: '#1572B6' },
  { name: 'JavaScript', value: 88, color: '#F7DF1E' },
  { name: 'React', value: 80, color: '#61DAFB' },
  { name: 'SQL', value: 75, color: '#4479A1' },
  { name: 'Git', value: 82, color: '#F05032' },
  { name: 'GitHub', value: 80, color: '#181717' },
  { name: 'React Router', value: 78, color: '#CA4246' },
  { name: 'Node.js (Basics)', value: 65, color: '#339933' },
];

const SkillCard = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '16px',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  textAlign: 'center',
  height: '200px', // Set fixed height
  width: '220px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
  },
}));

const Skills = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        paddingY: '10vh',
        paddingX: { xs: 3, sm: 5, md: 10 },
        background: '#f9f9f9',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          marginBottom: 5,
          textAlign: 'center',
          color: '#333',
        }}
      >
        My Expertise
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {skillsData.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={skill.name}>
            <SkillCard
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='css-skill-card'
            >
              <Typography
              className="css-skill-name"
                variant="h6"
                sx={{
                  fontWeight: 600,
                  marginBottom: 1,
                  color: '#333',
                }}
              >
                {skill.name}
              </Typography>

              <Box className="css-skill-progress" sx={{ marginY: 2 }}>
                <LinearProgress
                  variant="determinate"
                  value={skill.value}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: theme.palette.grey[300],
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: skill.color,
                    },
                  }}
                />
                <Typography
                className="css-skill-value"
                  variant="body2"
                  sx={{
                    marginTop: '8px',
                    color: theme.palette.text.secondary,
                  }}
                >
                  {skill.value}%
                </Typography>
              </Box>
            </SkillCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
