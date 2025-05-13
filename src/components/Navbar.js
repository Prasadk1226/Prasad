import React, { useState } from "react";
import { AppBar, Toolbar, Button, Box, Typography, useMediaQuery, IconButton, Drawer, List, ListItem, styled, keyframes } from "@mui/material";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Keyframes for animations
const glow = keyframes`
  0% { text-shadow: 0 0 5px rgba(255, 98, 0, 0.7); }
  100% { text-shadow: 0 0 15px rgba(255, 98, 0, 1); }
`;

const slideIn = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const borderHover = keyframes`
  0% { border-color: transparent; }
  50% { border-color: #ff6200; }
  100% { border-color: transparent; }
`;

// Styled Components
const NavbarWrapper = styled(AppBar)(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  height:"12.5vh",
  justifyContent:"center",
  backgroundColor: "rgba(30, 30, 30, 0.85)",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  transition: "background-color 0.3s ease",
  "&.scrolled": {
    backgroundColor: "rgba(30, 30, 30, 0.95)",
  },
}));

const NavbarButton = styled(Button)(() => ({
  color: "#f0f0f0",
  fontSize: "1.1rem",
  fontWeight: 500,
  padding: "10px 20px",
  borderRadius: "8px",
  border: "2px solid transparent",
  transition: "border-color 0.3s ease, transform 0.2s ease",
  "&:hover": {
    animation: `${borderHover} 1s infinite`,
    transform: "scale(1.05)",
    backgroundColor: 'transparent',
  },
  "&.active": {
    color: "#ff6200",
    fontWeight: 700,
    animation: `${glow} 1.5s infinite alternate`,
  },
}));

const MobileNavButton = styled(Button)(() => ({
  color: "#f0f0f0",
  fontSize: "1.1rem",
  fontWeight: 500,
  padding: "15px 20px",
  width: "100%",
  textAlign: "left",
  borderRadius: 0,
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(255, 98, 0, 0.2)",
  },
  "&.active": {
    color: "#ff6200",
    fontWeight: 700,
  },
}));

const DrawerStyled = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    backgroundColor: "#222",
    color: "#f0f0f0",
    width: 250,
  },
}));

const DrawerCloseButton = styled(IconButton)(() => ({
  color: "#f0f0f0",
  position: "absolute",
  top: 10,
  right: 10,
}));

const DrawerList = styled(List)(() => ({
  paddingTop: "40px",
}));

// const DrawerListItem = styled(ListItem)(() => ({
//   padding: 0,
// }));

const PortfolioTypography = styled(Typography)(() => ({
  color: "#fff",
  fontWeight: 700,
  fontSize: "1.5rem",
  animation: `${slideIn} 0.5s ease-out`,
}));

// Main Navbar Component
const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleMobileClick = (section) => {
    setActive(section);
    setOpenDrawer(false); // Close the drawer after clicking
  };

  return (
    <NavbarWrapper className={scrolled ? "scrolled" : ""}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '90%', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Portfolio on the left */}
        <Box sx={{ flex: '0 1 auto' }}>
          <PortfolioTypography variant="h6">
            Prasad 🚀
          </PortfolioTypography>
        </Box>

        {/* Navbar buttons on the right */}
        {!isSmallScreen ? (
          // Desktop Navigation
          <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
            {["profile", "skills", "projects", "contact"].map((section) => (
              <NavbarButton
                key={section}
                component={Link}
                to={section}
                smooth={true}
                duration={800}
                spy={true}
                offset={-80}
                onSetActive={() => setActive(section)}
                className={active === section ? "active" : ""}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </NavbarButton>
            ))}
          </Box>
        ) : (
          // Mobile Navigation (Hamburger Menu)
          <Box sx={{ flex: '0 1 auto' }}>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
              <MenuIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
            <DrawerStyled anchor="right" open={openDrawer} onClose={toggleDrawer}>
              <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <DrawerCloseButton onClick={toggleDrawer}>
                  <CloseIcon sx={{ fontSize: '2rem' }} />
                </DrawerCloseButton>
                <DrawerList>
                  {["profile", "skills", "projects", "contact"].map((section) => (
                    <ListItem button key={section} onClick={() => handleMobileClick(section)}>
                      <Link
                        to={section}
                        smooth={true}
                        duration={800}
                        spy={true}
                        offset={-80}
                        onSetActive={() => setActive(section)}
                        className={active === section ? "active" : ""}
                        style={{ width: '100%', textDecoration: 'none', color: 'inherit' }}
                      >
                        <MobileNavButton className={active === section ? "active" : ""}>
                          {section.charAt(0).toUpperCase() + section.slice(1)}
                        </MobileNavButton>
                      </Link>
                    </ListItem>
                  ))}
                </DrawerList>
              </Box>
            </DrawerStyled>
          </Box>
        )}
      </Toolbar>
    </NavbarWrapper>
  );
};

export default Navbar;



