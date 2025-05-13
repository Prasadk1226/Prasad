// // src/components/Skills.js
// import React from 'react';
// import { Box, Typography, Grid, LinearProgress } from '@mui/material';
// import "./Skills.css"

// const skills = [
//   { name: 'HTML', value: 90 },
//   { name: 'CSS', value: 80 },
//   { name: 'JavaScript', value: 85 },
//   { name: 'React', value: 75 },
//   { name: 'SQL', value: 70 },
//   { name: 'Git', value: 80 },
//   { name: 'GitHub', value: 80 },
//   { name: 'React Router', value: 70 },
//   { name: 'Node.js (Basics)', value: 60 },
// ];

// const Skills = () => {
//   return (
//     <Box className="skills-section">
//       <Typography variant="h4" align="center" className="section-title">
//         Skills
//       </Typography>
//       <Grid container spacing={4} justifyContent="center">
//         {skills.map((skill, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index} className="skill-item">
//             <Typography variant="h6" className="skill-name">{skill.name}</Typography>
//             <LinearProgress 
//               variant="determinate" 
//               value={skill.value} 
//               className="skill-progress"
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Skills;

// // src/components/Skills.js
// import React from 'react';
// import { Box, Typography, Grid, LinearProgress, styled } from '@mui/material';
// import "./Skills.css";
// import { motion } from 'framer-motion';

// const skillsData = [
//   { name: 'HTML', value: 90, color: '#E34F26' },
//   { name: 'CSS', value: 80, color: '#1572B6' },
//   { name: 'JavaScript', value: 85, color: '#F7DF1E' },
//   { name: 'React', value: 75, color: '#61DAFB' },
//   { name: 'SQL', value: 70, color: '#4479A1' },
//   { name: 'Git', value: 80, color: '#F05032' },
//   { name: 'GitHub', value: 80, color: '#181717' },
//   { name: 'React Router', value: 70, color: '#CA4246' },
//   { name: 'Node.js (Basics)', value: 60, color: '#339933' },
// ];

// const SkillItem = styled(motion.div)(({ theme, skillColor }) => ({
//   padding: theme.spacing(3),
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: theme.palette.background.paper,
//   boxShadow: theme.shadows[2],
//   textAlign: 'center',
//   transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
//   '&:hover': {
//     transform: 'scale(1.05)',
//     boxShadow: theme.shadows[4],
//     '& .skill-progress-container': {
//       '& .MuiLinearProgress-bar': {
//         backgroundColor: skillColor ? theme.palette.secondary.main : theme.palette.primary.dark,
//       },
//     },
//   },
// }));

// const Skills = () => {
//   return (
//     <Box
//       className="skills-section"
//       sx={{
//         marginTop: '10vh',
//         marginBottom: '10vh',
//         minHeight: '80vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Typography variant="h4" align="center" className="section-title" sx={{ marginBottom: '40px', fontWeight: 'bold' }}>
//         My Expertise
//       </Typography>
//       <Grid container spacing={4} justifyContent="center" maxWidth="md">
//         {skillsData.map((skill, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <SkillItem
//               skillColor={skill.color}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Typography variant="h6" className="skill-name" sx={{ marginBottom: '10px', fontWeight: '500' }}>
//                 {skill.name}
//               </Typography>
//               <Box className="skill-progress-container">
//                 <LinearProgress
//                   variant="determinate"
//                   value={skill.value}
//                   className="skill-progress"
//                   sx={{
//                     height: 10,
//                     borderRadius: 5,
//                     backgroundColor: (theme) => theme.palette.grey[300],
//                     '& .MuiLinearProgress-bar': {
//                       backgroundColor: skill.color,
//                     },
//                   }}
//                 />
//               </Box>
//               <Typography variant="body2" color="textSecondary" sx={{ marginTop: '5px' }}>
//                 {skill.value}%
//               </Typography>
//             </SkillItem>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Skills;


// src/components/Skills.js
import React from 'react';
import { Box, Typography, Grid, LinearProgress, styled, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
// import './Skills.css';

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
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  marginBottom: 1,
                  color: '#333',
                }}
              >
                {skill.name}
              </Typography>

              <Box sx={{ marginY: 2 }}>
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
