import { AppBar, Toolbar, Button, useScrollTrigger, Slide } from '@mui/material';
import { useState, useEffect } from 'react';

interface Props {
  activeSection: string;
}

const sections = [
  { id: 'photos', label: 'Our Story' },
  { id: 'save-the-date', label: 'Save The Date' },
  { id: 'location', label: 'Location' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'menu', label: 'Menu' },
  { id: 'rsvp', label: 'RSVP' },
];

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NavBar({ activeSection }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <HideOnScroll>
      <AppBar
        position="sticky"
        sx={{
          background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          boxShadow: scrolled ? 2 : 0,
          transition: 'all 0.3s ease',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
        }}
      >
        <Toolbar 
          sx={{ 
            justifyContent: 'center', 
            gap: { xs: 1, sm: 2 },
            flexWrap: 'wrap',
            px: { xs: 1, sm: 2 },
            py: { xs: 1, sm: 0 },
            minHeight: { xs: '56px', sm: '64px' },
          }}
        >
          {sections.map((section) => (
            <Button
              key={section.id}
              onClick={() => handleClick(section.id)}
              sx={{
                color: scrolled ? 'text.primary' : 'white',
                fontWeight: activeSection === section.id ? 700 : 400,
                borderBottom: activeSection === section.id ? '2px solid' : '2px solid transparent',
                borderColor: activeSection === section.id 
                  ? (scrolled ? 'primary.main' : 'white')
                  : 'transparent',
                fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                padding: { xs: '6px 8px', sm: '8px 16px' },
                minWidth: { xs: 'auto', sm: '64px' },
                '&:hover': {
                  backgroundColor: 'transparent',
                  borderColor: scrolled ? 'primary.main' : 'white',
                },
              }}
            >
              {section.label}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
