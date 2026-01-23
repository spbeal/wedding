import { Box, Container, Typography, Grid, Card, CardMedia, Alert } from '@mui/material';
import { useState } from 'react';

// Add your story photos here - import them from src/assets/images/
// Example: import photo1 from '../assets/images/photo1.jpg';
const photoPaths: string[] = [];

export default function Photos() {
  const [loadedImages, setLoadedImages] = useState<Set<string | unknown>>(new Set());

  const handleImageLoad = (path: string | unknown) => {
    setLoadedImages((prev) => new Set(prev).add(path));
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <Box
      id="photos"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: 'background.default',
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

        {photoPaths.length > 0 ? (
          <Grid container spacing={3}>
            {photoPaths.map((path, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
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
                    image={path}
                    alt={`Wedding photo ${index + 1}`}
                    onLoad={() => handleImageLoad(path)}
                    onError={handleImageError}
                    sx={{
                      height: 300,
                      objectFit: 'cover',
                      display: loadedImages.has(path) ? 'block' : 'none',
                    }}
                  />
                  {!loadedImages.has(path) && (
                    <Box
                      sx={{
                        height: 300,
                        backgroundColor: 'primary.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Photo {index + 1}
                      </Typography>
                    </Box>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box
            sx={{
              textAlign: 'center',
              py: 8,
              px: 2,
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, color: 'text.secondary' }}>
              Our love story is just beginning...
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Photos coming soon!
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
