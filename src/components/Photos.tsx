import { Box, Container, Typography } from '@mui/material';
import SectionDivider from './SectionDivider';

export default function Photos() {
  return (
    <Box
      id="photos"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'secondary.main',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 3,
              backgroundColor: 'primary.main',
            },
          }}
        >
          Our Story
        </Typography>

        <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center', mb: 4 }}>
          <Typography variant="body1" sx={{ color: 'text.primary', whiteSpace: 'pre-line' }}>
            We met swing dancing in Moscow ID on a Wednesday night in March 2024. We immediately realized we enjoyed each others' presence and started dating from there.
          </Typography>
        </Box>
        <SectionDivider />
      </Container>
    </Box>
  );
}
