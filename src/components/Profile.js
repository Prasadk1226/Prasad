

// // src/components/Hero.js
// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { motion } from 'framer-motion';
// import Lottie from 'lottie-react';
// // Use a placeholder animation or comment this out until you have the actual animation
// import heroAnimation from '../assets/heroAnimation.json'; // Ensure you have this file in the assets folder

// const Hero = () => {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         background: '#f5f5f5',
//         textAlign: 'center',
//         flexDirection: 'column',
//       }}
//     >
//       {/* Replace this with your actual animation file */}
//       <Lottie animationData={heroAnimation} loop={true} style={{ width: '100%', maxWidth: 600 }} />
      
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
//           Hello, I'm Prasad Kancheti
//         </Typography>
//         <Typography variant="h5" sx={{ marginBottom: '40px' }}>
//           A Passionate Front-End Developer
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           sx={{ padding: '12px 24px', fontSize: '16px' }}
//           href="#contact"
//         >
//           Contact Me
//         </Button>
//       </motion.div>
//     </Box>
//   );
// };

// export default Hero;



// src/components/Hero.js
// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { motion } from 'framer-motion';
// // import Lottie from 'lottie-react';
// // import heroAnimation from '../assets/heroAnimation.json';
// // import "../styles/global.css"
// import "./Profile.css"

// const Profile = () => {
//   return (
//     <Box className="parallax-container">
//       <div className="parallax"></div>
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '90vh',
//         background: '#f5f5f5',
//         textAlign: 'center',
//         flexDirection: 'column',
//         perspective: 1000, // Required for 3D
//       }}
//       className="threeD"
//     >
//       <motion.div
//         initial={{ rotateX: -90, opacity: 0 }}
//         animate={{ rotateX: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         {/* <Lottie animationData={heroAnimation} loop={true} style={{ width: '100%', maxWidth: 600 }} /> */}
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 1 }}
//         className="scale-fade"
//       >
//         <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
//           Hello, I'm Prasad Kancheti
//         </Typography>
//         <Typography variant="h5" sx={{ marginBottom: '40px' }}>
//           A Passionate Front-End Developer
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           sx={{ padding: '12px 24px', fontSize: '16px' }}
//           href="#contact"
//         >
//           Contact Me
//         </Button>
//       </motion.div>
//     </Box>
//     </Box>
//   );
// };

// export default Profile;


// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { motion } from 'framer-motion';
// import "./Profile.css"; // Import the CSS file
// import Lottie from 'lottie-react';
// import heroAnimation from '../assets/heroAnimation.json'; // Ensure you have this file in the assets folder
// const Profile = () => {
//   return (
//     <Box className="parallax-container">
//       <div className="parallax"></div>
//       <Box className="threeD">
//         <motion.div
//           initial={{ rotateX: -90, opacity: 0 }}
//           animate={{ rotateX: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           {/* You can add a 3D model or image here if you have one */}
//           <Lottie animationData={heroAnimation} loop={true} style={{ width: '100%', maxWidth: 150 }} />
//            {/* <img
//               src="https://source.unsplash.com/random/600x400?developer,coding" // Placeholder
//               alt="Develoooper"
//               style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
//             /> */}
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 1 }}
//           className="scale-fade"
//         >
//           <Typography
//             variant="h2"  // Changed to h2 for better visual hierarchy
//             sx={{
//               fontWeight: 'bold',
//               marginBottom: '20px',
//               color: '#fff', // Added white color for better contrast on image
//               textShadow: '2px 2px 4px rgba(0,0,0,0.5)', // Added text shadow
//             }}
//           >
//             Hello, I'm Prasad Kancheti
//           </Typography>
//           <Typography
//             variant="h4" // Changed to h4
//             sx={{
//               marginBottom: '40px',
//               color: '#eee',  // Lighter color
//               textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
//             }}
//           >
//             A Passionate Front-End Developer
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{
//               padding: '12px 24px',
//               fontSize: '18px',  // Increased font size of button
//               backgroundColor: '#ff6f00', // A brighter orange
//               '&:hover': {
//                 backgroundColor: '#e55d00', // Darker shade on hover
//                 transform: 'scale(1.05)',  // Slight scale on hover
//               },
//               boxShadow: '0 2px 5px rgba(0,0,0,0.3)', // Add shadow
//               transition: 'all 0.2s ease',
//             }}
//             href="#contact"
//           >
//             Contact Me
//           </Button>
//         </motion.div>
//       </Box>
//     </Box>
//   );
// };

// export default Profile;


// import React, { useEffect, useRef } from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { motion } from 'framer-motion';
// import "./Profile.css"; // Import the CSS file
// import Lottie from 'lottie-react';
// import heroAnimation from '../assets/heroAnimation.json'; // Ensure you have this file in the assets folder

// //import * as d3 from 'd3'; // Import D3.js  (Install if you haven't: npm install d3)
// const Profile = () => {
//   const containerRef = useRef(null);
//   const animationRef = useRef(null);

//   useEffect(() => {
//     //   // D3.js Example (Replace with your actual D3 visualization)
//     //   const svg = d3.select(containerRef.current)
//     //     .append('svg')
//     //     .attr('width', '100%')
//     //     .attr('height', '100%');

//     //   const circle = svg.append('circle')
//     //     .attr('cx', 100)
//     //     .attr('cy', 100)
//     //     .attr('r', 50)
//     //     .attr('fill', 'orange');

//     //   circle.transition()
//     //     .duration(2000)
//     //     .attr('cx', 300)
//     //     .attr('fill', 'purple')
//     //     .transition()
//     //     .duration(2000)
//     //     .attr('cx', 100)
//     //      .attr('fill', 'orange');
//     // }, []);

//     animationRef.current = <Lottie animationData={heroAnimation} loop={true} style={{ width: '100%', maxWidth: 400 }} />;
//   }, []);

//   return (
//     <Box className="parallax-container">
//       <div className="parallax"></div>
//       <Box className="threeD" sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
//         {/* Left Side: Name and Title */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           style={{
//             flex: 1,
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//             padding: '20px',
//             textAlign: 'center',
//           }}
//         >
//           <Typography
//             variant="h2"
//             sx={{
//               fontWeight: 'bold',
//               marginBottom: '20px',
//               color: '#fff',
//               textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//             }}
//           >
//             Hello, I'm Prasad Kancheti
//           </Typography>
//           <Typography
//             variant="h4"
//             sx={{
//               marginBottom: '40px',
//               color: '#eee',
//               textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
//             }}
//           >
//             A Passionate Front-End Developer
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{
//               padding: '12px 24px',
//               fontSize: '18px',
//               backgroundColor: '#ff6f00',
//               '&:hover': {
//                 backgroundColor: '#e55d00',
//                 transform: 'scale(1.05)',
//               },
//               boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
//               transition: 'all 0.2s ease',
//             }}
//             href="#contact"
//           >
//             Contact Me
//           </Button>
//         </motion.div>

//         {/* Right Side: Interactive Element */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           style={{
//             flex: 1,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             padding: '20px',
//             minHeight: '400px' // Ensure minimum height
//           }}
//           ref={containerRef}
//           className="scale-fade"
//         >
//           {/* D3.js visualization or React component will go here */}
//            <Lottie animationData={heroAnimation} loop={true} style={{ width: '100%', maxWidth: 150 }} />

//           {animationRef.current}
//         </motion.div>
//       </Box>
//     </Box>
//   );
// };

// export default Profile;


// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { motion } from 'framer-motion';
// import "./Profile.css";
// import * as d3 from 'd3';

// const Profile = () => {
//   const containerRef = useRef(null);
//   const [isMounted, setIsMounted] = useState(true);

//   useEffect(() => {
//     if (!isMounted) return;

//     const container = containerRef.current;
//     if (!container) return;

//     const width = container.offsetWidth;
//     const height = container.offsetHeight;

//     // 1. Data
//     const nodes = [
//       { id: 'Prasad', group: 1 },
//       { id: 'Kancheti', group: 1 },
//       { id: 'Front-End', group: 2 },
//       { id: 'Developer', group: 2 },
//       { id: 'React', group: 3 },
//       { id: 'JavaScript', group: 3 },
//       { id: 'D3.js', group: 3 },
//       { id: 'Animations', group: 3 },
//       { id: 'Interactive', group: 3 },
//     ];

//     const links = [
//       { source: 'Prasad', target: 'Kancheti', value: 1 },
//       { source: 'Prasad', target: 'Front-End', value: 1 },
//       { source: 'Kancheti', target: 'Developer', value: 1 },
//       { source: 'Front-End', target: 'Developer', value: 2 },
//       { source: 'Front-End', target: 'React', value: 2 },
//       { source: 'Front-End', target: 'JavaScript', value: 2 },
//       { source: 'Developer', target: 'D3.js', value: 2 },
//       { source: 'Developer', target: 'Animations', value: 2 },
//       { source: 'Developer', target: 'Interactive', value: 2 },
//       { source: 'React', target: 'JavaScript', value: 1 },
//       { source: 'D3.js', target: 'Animations', value: 1 },
//       { source: 'Animations', target: 'Interactive', value: 1 },
//     ];

//     // 2. Create the SVG
//     const svg = d3.select(container)
//       .append('svg')
//       .attr('width', '100%')
//       .attr('height', '100%');

//     // 3. Set up simulation
//     const simulation = d3.forceSimulation(nodes)
//       .force('link', d3.forceLink(links).id(d => d.id).distance(80))
//       .force('charge', d3.forceManyBody().strength(-50))
//       .force('center', d3.forceCenter(width / 2, height / 2))
//       .force('collision', d3.forceCollide().radius(20));

//     // 4. Create links
//     const link = svg.append('g')
//       .attr('stroke', '#999')
//       .attr('stroke-opacity', 0.6)
//       .selectAll('line')
//       .data(links)
//       .join('line')
//       .attr('stroke-width', d => Math.sqrt(d.value));

//     // 5. Create nodes
//     const node = svg.append('g')
//       .selectAll('g')
//       .data(nodes)
//       .join('g')
//       .call(drag(simulation));  // Enable dragging

//     node.append('circle')
//       .attr('r', 10)
//       .attr('fill', d => {
//         const colorScale = d3.scaleOrdinal()
//           .domain([1, 2, 3])
//           .range(['#ff6f61', '#ffe599', '#468499']);
//         return colorScale(d.group);
//       })
//       .attr('stroke', '#fff')
//       .attr('stroke-width', 2);

//     node.append('text')
//       .text(d => d.id)
//       .attr('x', 12)
//       .attr('y', 3)
//       .attr('font-size', '1em')
//       .attr('fill', '#fff')
//       .attr('font-family', 'sans-serif')
//       .attr('paint-order', 'stroke')
//       .attr('stroke', '#000')
//       .attr('stroke-width', '0.5px')
//       .attr('alignment-baseline', 'middle');

//     // 6. Add tooltips
//     const tooltip = d3.select('body')
//       .append('div')
//       .attr('class', 'tooltip')
//       .style('position', 'absolute')
//       .style('visibility', 'hidden')
//       .style('background', 'rgba(255,255,255,0.9)')
//       .style('border', '1px solid #333')
//       .style('padding', '8px')
//       .style('border-radius', '4px')
//       .style('font-size', '0.9em')
//       .style('box-shadow', '2px 2px 5px rgba(0,0,0,0.2)')
//       .style('z-index', 10000);

//     node.on('mouseover', (event, d) => {
//       tooltip.style('visibility', 'visible')
//         .html(`<b>${d.id}</b><br>Group: ${d.group}`);
//     })
//       .on('mousemove', (event) => {
//         tooltip.style('top', (event.pageY - 10) + 'px')
//           .style('left', (event.pageX + 10) + 'px');
//       })
//       .on('mouseout', () => {
//         tooltip.style('visibility', 'hidden');
//       });

//     // 7. Define drag behavior
//     function drag(simulation) {
//       function dragstarted(event, d) {
//         if (!event.active) simulation.alphaTarget(0.3).restart();
//         d.fx = d.x;
//         d.fy = d.y;
//       }

//       function dragged(event, d) {
//         d.fx = event.x;
//         d.fy = event.y;
//       }

//       function dragended(event, d) {
//         if (!event.active) simulation.alphaTarget(0);
//         d.fx = null;
//         d.fy = null;
//       }

//       return d3.drag()
//         .on('start', dragstarted)
//         .on('drag', dragged)
//         .on('end', dragended);
//     }

//     // 8. Update positions on each tick
//     simulation.on('tick', () => {
//       link
//         .attr('x1', d => d.source.x)
//         .attr('y1', d => d.source.y)
//         .attr('x2', d => d.target.x)
//         .attr('y2', d => d.target.y);

//       node
//         .attr('transform', d => `translate(${d.x}, ${d.y})`);
//     });

//     // 9. Cleanup
//     return () => {
//       simulation.stop();
//       svg.selectAll('*').remove();
//       tooltip.remove();
//       setIsMounted(false);
//     };
//   }, [isMounted]);

//   return (
//     <Box className="parallax-container">
//       <div className="parallax"></div>
//       <Box className="threeD" sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
//         {/* Left Side: Name and Title */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           style={{
//             flex: 1,
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//             padding: '20px',
//             textAlign: 'center',
//           }}
//         >
//           <Typography
//             variant="h2"
//             sx={{
//               fontWeight: 'bold',
//               marginBottom: '20px',
//               color: '#fff',
//               textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//             }}
//           >
//             Hello, I'm Prasad Kancheti
//           </Typography>
//           <Typography
//             variant="h4"
//             sx={{
//               marginBottom: '40px',
//               color: '#eee',
//               textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
//             }}
//           >
//             A Passionate Front-End Developer
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{
//               padding: '12px 24px',
//               fontSize: '18px',
//               backgroundColor: '#ff6f00',
//               '&:hover': {
//                 backgroundColor: '#e55d00',
//                 transform: 'scale(1.05)',
//               },
//               boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
//               transition: 'all 0.2s ease',
//             }}
//             href="#contact"
//           >
//             Contact Me
//           </Button>
//         </motion.div>

//         {/* Right Side: Interactive Element */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           style={{
//             flex: 1,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             padding: { xs: '10px', md: '20px', lg: '15px' },
//             minHeight: '400px',
//             width: { xs: '100%', md: '80%', lg: '100%' },
//             backgroundColor: 'rgba(255, 255, 255, 0.1)',
//             borderRadius: '10px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//             border: '1px solid rgba(255, 255, 255, 0.1)',
//             overflow: 'hidden'
//           }}
//           ref={containerRef}
//           className="scale-fade"
//         >
//           {/* D3.js visualization will be rendered here */}
//         </motion.div>
//       </Box>
//     </Box>
//   );
// };

// export default Profile;


import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import "./Profile.css";
import * as d3 from 'd3';

const Profile = () => {
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    if (!isMounted) return;

    const container = containerRef.current;
    if (!container) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const nodes = [
      { id: 'Prasad', group: 1 },
      { id: 'Kancheti', group: 1 },
      { id: 'Front-End', group: 2 },
      { id: 'Developer', group: 2 },
      { id: 'React', group: 3 },
      { id: 'JavaScript', group: 3 },
      { id: 'D3.js', group: 3 },
      { id: 'Animations', group: 3 },
      { id: 'Interactive', group: 3 },
    ];

    const links = [
      { source: 'Prasad', target: 'Kancheti', value: 1 },
      { source: 'Prasad', target: 'Front-End', value: 1 },
      { source: 'Kancheti', target: 'Developer', value: 1 },
      { source: 'Front-End', target: 'Developer', value: 2 },
      { source: 'Front-End', target: 'React', value: 2 },
      { source: 'Front-End', target: 'JavaScript', value: 2 },
      { source: 'Developer', target: 'D3.js', value: 2 },
      { source: 'Developer', target: 'Animations', value: 2 },
      { source: 'Developer', target: 'Interactive', value: 2 },
      { source: 'React', target: 'JavaScript', value: 1 },
      { source: 'D3.js', target: 'Animations', value: 1 },
      { source: 'Animations', target: 'Interactive', value: 1 },
    ];

    const svg = d3.select(container)
      .append('svg')
      .attr('viewBox', [0, 0, width, height])
      .attr('preserveAspectRatio', 'xMidYMid meet')
      .style('width', '100%')
      .style('height', '100%')
      .style('background', 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)');

    const g = svg.append("g");

    const zoom = d3.zoom()
      .scaleExtent([0.5, 4])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(80))
      .force('charge', d3.forceManyBody().strength(-50))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(20));

    const link = g.append('g')
      .attr('stroke', '#aaa')
      .attr('stroke-opacity', 0.6)
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke-width', d => Math.sqrt(d.value));

    const node = g.append('g')
      .selectAll('g')
      .data(nodes)
      .join('g')
      .call(drag(simulation));

    node.append('circle')
      .attr('r', 10)
      .attr('fill', d => {
        const colorScale = d3.scaleOrdinal()
          .domain([1, 2, 3])
          .range(['#ff6f61', '#ffe599', '#468499']);
        return colorScale(d.group);
      })
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);

    node.append('text')
      .text(d => d.id)
      .attr('x', 12)
      .attr('y', 4)
      .attr('font-size', '1em')
      .attr('fill', '#fff')
      .attr('stroke', '#000')
      .attr('stroke-width', '0.5px')
      .style('paint-order', 'stroke');

    const tooltip = d3.select('body')
      .append('div')
      .attr('class', 'tooltip')
      .style('position', 'absolute')
      .style('visibility', 'hidden')
      .style('background', 'rgba(255,255,255,0.95)')
      .style('color', '#111')
      .style('padding', '8px 12px')
      .style('border-radius', '4px')
      .style('border', '1px solid #333')
      .style('box-shadow', '0px 2px 10px rgba(0,0,0,0.3)')
      .style('pointer-events', 'none')
      .style('font-family', 'sans-serif')
      .style('z-index', '10000');

    node
      .on('mouseover', (event, d) => {
        tooltip.html(`<b>${d.id}</b><br/>Group: ${d.group}`)
          .style('visibility', 'visible');
      })
      .on('mousemove', (event) => {
        tooltip.style('top', `${event.pageY - 10}px`)
          .style('left', `${event.pageX + 10}px`);
      })
      .on('mouseout', () => {
        tooltip.style('visibility', 'hidden');
      });

    function drag(simulation) {
      function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
    }

    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .attr('transform', d => `translate(${d.x},${d.y})`);
    });

    return () => {
      simulation.stop();
      tooltip.remove();
      svg.remove();
      setIsMounted(false);
    };
  }, [isMounted]);

  return (
    <Box className="parallax-container">
      <div className="parallax"></div>
      <Box className="threeD" sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '20px', color: '#fa7500', textShadow: '2px 2px 4px rgba(78, 36, 36, 0.5)' }}>
            Hello, I'm Prasad Kancheti
          </Typography>
          <Typography variant="h4" sx={{ marginBottom: '40px', color: '#fa9600', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            A Passionate Front-End Developer
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: '12px 24px',
              fontSize: '18px',
              backgroundColor: '#ff6f00',
              '&:hover': {
                backgroundColor: '#e55d00',
                transform: 'scale(1.05)',
              },
              boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
              transition: 'all 0.2s ease',
            }}
            href="#contact"
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            minHeight: '400px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden'
          }}
          ref={containerRef}
          className="scale-fade"
        >
          {/* D3 visualization here */}
        </motion.div>
      </Box>
    </Box>
  );
};

export default Profile;
