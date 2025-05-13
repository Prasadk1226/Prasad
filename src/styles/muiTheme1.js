// // src/styles/muiTheme.js
// import { createTheme } from '@mui/material/styles';

// // Create a custom theme for the portfolio
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#ff6200', // Orange color for primary buttons
//     },
//     secondary: {
//       main: '#ff6200', // Secondary color for text or backgrounds
//     },
//     background: {
//       default: '#f5f5f5', // Background color
//     },
//     text: {
//       primary: '#333', // Text color
//       secondary: '#6c757d', // Secondary text color
//     },
//   },
//   typography: {
//     fontFamily: '"Roboto", sans-serif', // Using Roboto for consistency
//     h1: {
//       fontSize: '3rem',
//       fontWeight: 700,
//     },
//     h2: {
//       fontSize: '2.5rem',
//       fontWeight: 600,
//     },
//     h3: {
//       fontSize: '2rem',
//       fontWeight: 500,
//     },
//     h4: {
//       fontSize: '1.5rem',
//       fontWeight: 400,
//     },
//   },
// });

// export default theme;


// src/styles/muiTheme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff6200',
    },
    secondary: {
      main: '#2e2e2e',
    },
    background: {
      default: '#1e1e1e',
      paper: '#2e2e2e',
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#cccccc',
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.4rem',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: '#ff6200',
            transform: 'scale(1.05)',
            color: '#fff',
          },
        },
      },
    },
  },
});

export default theme;
