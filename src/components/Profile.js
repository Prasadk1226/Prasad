import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import "./Profile.css";
import * as d3 from 'd3';

const Profile = () => {
  const containerRef = useRef(null);
  const [d3ContainerDimensions, setD3ContainerDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const redrawD3 = (currentWidth, currentHeight) => {
        if (currentWidth > 0 && currentHeight > 0) {
            d3.select(container).select('svg').remove();
            d3.select('body').select('.tooltip').remove();

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
              .attr('viewBox', [0, 0, currentWidth, currentHeight])
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
              .force('center', d3.forceCenter(currentWidth / 2, currentHeight / 2))
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
        }
    };

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.target === container) {
          const { width, height } = entry.contentRect;
          if (Math.abs(width - d3ContainerDimensions.width) > 1 || Math.abs(height - d3ContainerDimensions.height) > 1) {
            setD3ContainerDimensions({ width, height });
          }
        }
      }
    });

    resizeObserver.observe(container);

    if (d3ContainerDimensions.width > 0 && d3ContainerDimensions.height > 0) {
      redrawD3(d3ContainerDimensions.width, d3ContainerDimensions.height);
    } else {
      const initialRedrawTimeout = setTimeout(() => {
        if (containerRef.current) {
          const { offsetWidth, offsetHeight } = containerRef.current;
          if (offsetWidth > 0 && offsetHeight > 0) {
            setD3ContainerDimensions({ width: offsetWidth, height: offsetHeight });
          }
        }
      }, 100);
      return () => clearTimeout(initialRedrawTimeout);
    }

    return () => {
      resizeObserver.unobserve(container);
      d3.select('body').select('.tooltip').remove();
      d3.select(container).select('svg').remove();
    };
  }, [d3ContainerDimensions]);

  return (
    <Box className="parallax-container">
      <div className="parallax"></div>
      <Box className="threeD">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="content-section"
        >
          <Typography variant="h2" className="title-text">
            Hello, I'm Prasad Kancheti
          </Typography>
          <Typography variant="h4" className="subtitle-text">
            A Passionate Front-End Developer
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className="contact-button"
            href="#contact"
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          ref={containerRef}
          className="d3-section scale-fade"
        >
        </motion.div>
      </Box>
    </Box>
  );
};

export default Profile;