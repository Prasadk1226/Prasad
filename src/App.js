import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Element, scroller } from "react-scroll";
import { motion } from "framer-motion";

import "./styles/global.css";

// --- Custom Cursor Component ---
const CustomCursor = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      initial={false}
      animate={{
        x: position.x - 18,
        y: position.y - 18,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
      style={{
        position: "fixed",
        width: 36,
        height: 36,
        border: "2px solid rgba(255, 98, 0, 0.7)",
        borderRadius: "50%",
        pointerEvents: "none",
        backgroundColor: "transparent",
        mixBlendMode: "difference",
        zIndex: 9999,
        boxShadow: "0 0 10px rgba(255, 98, 0, 0.5)",
      }}
    />
  );
};

const App = () => {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomCursor />
      <div className="single-screen-layout">
        <Navbar scrollToSection={scrollToSection} />
        <div className="sections-wrapper">
          <Element name="profile">
            <Profile scrollToSection={scrollToSection} />
          </Element>
          <Element name="skills">
            <Skills />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
