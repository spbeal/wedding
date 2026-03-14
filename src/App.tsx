import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Photos from './components/Photos';
import SaveTheDate from './components/SaveTheDate';
import Schedule from './components/Schedule';
import Location from './components/Location';
import Menu from './components/Menu';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import ColorPicker from './components/ColorPicker';
import Registry from './components/Registry';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [themeColors, setThemeColors] = useState({
    primary: '#b19cd9', // Lighter purple (HTTYD theme)
    secondary: '#6a4c93', // Darker purple
    background: '#ffffff', // White
    text: '#1a1a1a', // Black
  });

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeColors.background === '#ffffff' ? 'light' : 'dark',
          primary: {
            main: themeColors.primary,
            dark: themeColors.secondary,
          },
          secondary: {
            main: themeColors.secondary,
          },
          background: {
            default: themeColors.background,
            paper: themeColors.background === '#ffffff' ? '#fafafa' : themeColors.background,
          },
          text: {
            primary: themeColors.text,
            secondary: themeColors.text,
          },
        },
        typography: {
          fontFamily: [
            'Lato',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
          ].join(','),
          h1: {
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            letterSpacing: '2px',
          },
          h2: {
            fontFamily: 'Playfair Display, serif',
            fontWeight: 600,
          },
          h3: {
            fontFamily: 'Playfair Display, serif',
            fontWeight: 600,
          },
          h4: {
            fontFamily: 'Playfair Display, serif',
            fontWeight: 600,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                borderRadius: '8px',
                padding: '10px 24px',
                fontWeight: 600,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              },
            },
          },
        },
      }),
    [themeColors]
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'photos', 'save-the-date', 'location', 'registry', 'schedule', 'menu', 'rsvp'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          position: 'relative',
        }}
      >
        <NavBar activeSection={activeSection} />
        <Hero />
      </Box>
      <Photos />
      <SaveTheDate />
      <Location />
      <Registry />
      <Schedule />
      <Menu />
      <RSVP />
      <Footer />
      <ColorPicker onColorChange={setThemeColors} />
    </ThemeProvider>
  );
}

export default App;
