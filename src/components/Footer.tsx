import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { Box, Container, Stack, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 5, md: 6 },
        px: 2,
        textAlign: 'center',
        borderTop: (theme) => `1px solid ${theme.wedding.border}`,
        background: (theme) => theme.wedding.gradients.footer,
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={1.25} alignItems="center">
          <Typography
            sx={{
              fontFamily: 'Playfair Display, serif',
              fontSize: { xs: '1.15rem', md: '1.35rem' },
              letterSpacing: '0.06em',
              color: 'secondary.main',
            }}
          >
            Aliana & Samuel
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
            <Typography variant="body2" sx={{ letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              July 27, 2026
            </Typography>
            <FavoriteRoundedIcon sx={{ fontSize: 16, color: (theme) => theme.wedding.accent }} />
            <Typography variant="body2" sx={{ letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              Wedding Day
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Thank you for celebrating with us.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
