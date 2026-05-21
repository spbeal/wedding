import { ThemeProvider, CssBaseline, Box } from '@mui/material';
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
import Registry from './components/Registry';
import { getNavOffset, navSections } from './components/navConfig.ts';
import { createWeddingTheme, defaultThemeColors } from './styles/weddingTheme.ts';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const theme = useMemo(() => createWeddingTheme(defaultThemeColors), []);

  useEffect(() => {
    const sectionIds = ['hero', ...navSections.map((section) => section.id)];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + getNavOffset() + 120;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          background: (theme) => theme.wedding.gradients.hero,
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
    </ThemeProvider>
  );
}

export default App;
