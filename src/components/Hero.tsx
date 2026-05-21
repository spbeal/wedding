import { Box, Typography, Container } from '@mui/material';
import { Fade } from '@mui/material';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.3,
        },
      }}
    >
      <Container>
        <Fade in timeout={1500}>
          <Box
            sx={{
              textAlign: 'center',
              color: 'white',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                mb: 2,
                fontWeight: 700,
              }}
            >
              Aliana & Samuel
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1rem', sm: '1.3rem', md: '1.5rem' },
                mb: 1,
                letterSpacing: '3px',
                fontWeight: 300,
              }}
            >
              July 27, 2026
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.2rem' },
                fontStyle: 'italic',
                fontWeight: 300,
                textTransform: 'uppercase',
                letterSpacing: '4px',
                color: (theme) => theme.wedding.accent,
              }}
            >
              The Adventure Begins
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
