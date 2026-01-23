import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'secondary.main',
        color: 'white',
        textAlign: 'center',
        py: 4,
      }}
    >
      <Typography variant="body1">
        &copy; 2026 Aliana & Samuel. Made with ❤️
      </Typography>
    </Box>
  );
}
