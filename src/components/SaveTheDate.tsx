import { Box, Container, Typography, Grid, Card, CardMedia } from '@mui/material';
import { useState } from 'react';
import rsvp from '../assets/images/3.png';
import us from '../assets/images/Back.png';
import save_the_date from '../assets/images/Front.png';

const saveTheDateCards = [save_the_date, us, rsvp];

export default function SaveTheDate() {
  const [loadedImages, setLoadedImages] = useState<Set<string | unknown>>(new Set());

  const handleImageLoad = (path: string | unknown) => {
    setLoadedImages((prev) => new Set(prev).add(path));
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <Box
      id="save-the-date"
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
          Save The Date
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {saveTheDateCards.map((path, index) => (
            <Grid key={index}>
              <Card
                sx={{
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={path as string}
                  alt={`Save the date card ${index + 1}`}
                  onLoad={() => handleImageLoad(path)}
                  onError={handleImageError}
                  sx={{
                    height: { xs: 400, md: 500 },
                    objectFit: 'contain',
                    backgroundColor: 'background.default',
                    display: loadedImages.has(path) ? 'block' : 'none',
                  }}
                />
                {!loadedImages.has(path) && (
                  <Box
                    sx={{
                      height: { xs: 400, md: 500 },
                      backgroundColor: 'primary.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Card {index + 1}
                    </Typography>
                  </Box>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
