import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { getNavOffset, navSections } from './navConfig.ts';

interface Props {
  activeSection: string;
}

export default function NavBar({ activeSection }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - getNavOffset();
      window.scrollTo({ top, behavior: 'smooth' });
    }

    setMobileMenuOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: (theme) =>
            scrolled
              ? alpha(theme.palette.background.paper, 0.92)
              : alpha(theme.palette.common.black, 0.12),
          borderBottom: (theme) =>
            `1px solid ${
              scrolled
                ? alpha(theme.palette.text.primary, 0.12)
                : alpha(theme.palette.common.white, 0.2)
            }`,
          boxShadow: (theme) => (scrolled ? theme.wedding.shadows.floating : 'none'),
          backdropFilter: 'blur(18px)',
          transition: 'background-color 240ms ease, box-shadow 240ms ease, border-color 240ms ease',
        }}
      >
        <Toolbar
          sx={{
            minHeight: `${getNavOffset()}px`,
            px: { xs: 2, sm: 3, md: 5 },
            gap: 2,
            justifyContent: 'space-between',
          }}
        >
          <Box
            component="button"
            type="button"
            onClick={() => handleClick('hero')}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0.25,
              p: 0,
              border: 0,
              background: 'transparent',
              color: scrolled ? 'text.primary' : 'common.white',
              cursor: 'pointer',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Playfair Display, serif',
                fontSize: { xs: '1rem', sm: '1.15rem' },
                fontWeight: 600,
                lineHeight: 1,
                letterSpacing: '0.02em',
              }}
            >
              Aliana & Samuel
            </Typography>
            <Typography
              sx={{
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                opacity: 0.72,
              }}
            >
              July 27, 2026
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 0.75,
              p: 0.75,
            }}
          >
            {navSections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <Button
                  key={section.id}
                  onClick={() => handleClick(section.id)}
                  sx={{
                    color: scrolled ? 'text.primary' : 'common.white',
                    px: 2,
                    py: 1.1,
                    borderRadius: '999px',
                    fontSize: '0.92rem',
                    letterSpacing: '0.04em',
                    backgroundColor: isActive
                      ? (theme) => alpha(theme.palette.primary.main, scrolled ? 0.18 : 0.28)
                      : 'transparent',
                    border: (theme) =>
                      `1px solid ${
                        isActive
                          ? alpha(theme.palette.primary.main, 0.38)
                          : 'transparent'
                      }`,
                    '&:hover': {
                      backgroundColor: (theme) =>
                        alpha(
                          scrolled ? theme.palette.primary.main : theme.palette.common.white,
                          scrolled ? 0.12 : 0.18
                        ),
                    },
                  }}
                >
                  {section.label}
                </Button>
              );
            })}
          </Box>

          <IconButton
            aria-label="Open navigation menu"
            onClick={() => setMobileMenuOpen(true)}
            sx={{
              display: { xs: 'inline-flex', md: 'none' },
              color: scrolled ? 'text.primary' : 'common.white',
              border: (theme) =>
                `1px solid ${
                  scrolled
                    ? alpha(theme.palette.text.primary, 0.16)
                    : alpha(theme.palette.common.white, 0.24)
                }`,
            }}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <Box
          sx={{
            width: 280,
            height: '100%',
            p: 2,
            backgroundColor: 'background.paper',
          }}
        >
          <Typography
            sx={{
              mb: 2,
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.4rem',
              color: 'secondary.main',
            }}
          >
            Wedding Day
          </Typography>
          <List sx={{ p: 0 }}>
            {navSections.map((section) => (
              <ListItemButton
                key={section.id}
                selected={activeSection === section.id}
                onClick={() => handleClick(section.id)}
                sx={{
                  borderRadius: 3,
                  mb: 0.5,
                }}
              >
                <ListItemText primary={section.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
      <Toolbar sx={{ minHeight: `${getNavOffset()}px` }} />
    </>
  );
}
