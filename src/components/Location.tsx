import { Box, Container, Typography, Paper, Button, Link } from '@mui/material';
import { LocationOn as LocationIcon, Directions as DirectionsIcon } from '@mui/icons-material';

export default function Location() {
  const address = {
    street: '3160 Cool Water LN',
    city: 'Emmett',
    state: 'ID',
    zip: '83617',
  };

  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;

  return (
    <Box
      id="location"
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
          Location
        </Typography>

        <Box sx={{ maxWidth: 600, mx: 'auto' }}>
          <Paper
            elevation={4}
            sx={{
              p: { xs: 3, md: 4 },
              backgroundColor: 'white',
              borderRadius: 3,
              textAlign: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mb: 3,
              }}
            >
              <LocationIcon
                sx={{
                  fontSize: 64,
                  color: 'primary.main',
                }}
              />
            </Box>

            <Typography
              variant="h5"
              sx={{
                mb: 2,
                color: 'secondary.main',
                fontWeight: 600,
              }}
            >
              Wedding Venue
            </Typography>

            <Box
              sx={{
                mb: 4,
                lineHeight: 1.8,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: 'text.primary',
                  fontWeight: 500,
                  mb: 0.5,
                }}
              >
                {address.street}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                }}
              >
                {address.city}, {address.state} {address.zip}
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                justifyContent: 'center',
              }}
            >
              <Button
                variant="contained"
                startIcon={<LocationIcon />}
                component={Link}
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  px: 3,
                  py: 1.5,
                  backgroundColor: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                View on Map
              </Button>
              <Button
                variant="outlined"
                startIcon={<DirectionsIcon />}
                component={Link}
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  px: 3,
                  py: 1.5,
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    borderColor: 'primary.dark',
                    backgroundColor: 'primary.light',
                  },
                }}
              >
                Get Directions
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
