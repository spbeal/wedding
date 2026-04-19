import { useState } from 'react';
import { Box, Container, Typography, Paper, Stack, Card, CardContent, Button } from '@mui/material';
import { Schedule as ScheduleIcon } from '@mui/icons-material';

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  location: string;
}

const scheduleItems: ScheduleItem[] = [
  {
    time: '9:00 AM',
    title: 'Setup',
    description: 'Setup everything for the event',
    location: 'Venue',
  },
  {
    time: '12:00 PM',
    title: 'Wedding Party Photo Op',
    description: 'Wedding party photo op',
    location: 'Garden Pavilion',
  },
  {
    time: '1:00 PM',
    title: 'Ceremony',
    description: 'Join us as we exchange vows',
    location: 'Garden Pavilion',
  },
  {
    time: '2:00 PM',
    title: 'Photos & Cocktail Hour',
    description: 'Photos with us after the ceremony and cocktail hour',
    location: 'Garden Pavilion',
  },
  {
    time: '3:00 PM',
    title: 'Reception',
    description: 'Late Lunch, dancing, and celebration',
    location: 'Reception Hall',
  },
  {
    time: '6:00 PM',
    title: 'Send-off',
    description: 'Thank you for celebrating with us!',
    location: 'Main Entrance',
  },
  {
    time: '6:30 PM',
    title: 'Cleanup',
    description: 'Cleanup the venue',
    location: 'Venue',
  },
];

export default function Schedule() {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  return (
    <Box
      id="schedule"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: 'primary.light',
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
          Wedding Schedule
        </Typography>

        <Box
          sx={{
            maxWidth: 720,
            mx: 'auto',
            mb: 6,
            p: 3,
            backgroundColor: 'background.default',
            borderRadius: 2,
            textAlign: 'center',
            border: '3px solid',
            borderColor: 'primary.main',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'secondary.main',
              fontWeight: 600,
              mb: 1,
            }}
          >
            Dress Code
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.primary',
              fontSize: '1.1rem',
              mb: 1,
              fontWeight: 500,
            }}
          >
            Semi-Formal Attire
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#333333',
              opacity: 1,
              fontStyle: 'italic',
              fontWeight: 500,
            }}
          >
            Avoid Dusty Lilac and grey, but you can use reasonable discretion.
          </Typography>
        </Box>

        {showPlaceholder ? (
          <Card sx={{ maxWidth: 720, mx: 'auto', textAlign: 'center', py: 6, px: 4 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <ScheduleIcon sx={{ fontSize: 48, color: 'primary.main' }} />
              </Box>
              <Typography variant="h4" sx={{ color: 'secondary.main', mb: 1 }}>
                Coming Soon
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                We're finalizing the wedding schedule. Please check back soon for the full timeline.
              </Typography>
              {/* <Button variant="text" onClick={() => setShowPlaceholder(false)}>
                View Full Schedule
              </Button> */}
            </CardContent>
          </Card>
        ) : (
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            <Stack spacing={4}>
              {scheduleItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    gap: 3,
                    position: 'relative',
                    '&:not(:last-child)::after': {
                      content: '""',
                      position: 'absolute',
                      left: 24,
                      top: 64,
                      bottom: -32,
                      width: 2,
                      backgroundColor: 'primary.main',
                    },
                  }}
                >
                  <Box
                    sx={{
                      flexShrink: 0,
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      backgroundColor: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 1,
                    }}
                  >
                    <ScheduleIcon sx={{ color: 'white', fontSize: 24 }} />
                  </Box>
                  <Box sx={{ flex: 1, pt: 0.5 }}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 3,
                        backgroundColor: 'white',
                        borderRadius: 2,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.02)',
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 700,
                          mb: 1,
                        }}
                      >
                        {item.time}
                      </Typography>
                      <Typography variant="h5" sx={{ mb: 1, color: 'secondary.main' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 1, color: 'text.secondary' }}>
                        {item.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'primary.main',
                          fontStyle: 'italic',
                        }}
                      >
                        📍 {item.location}
                      </Typography>
                    </Paper>
                  </Box>
                </Box>
              ))}
            </Stack>

            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button variant="text" onClick={() => setShowPlaceholder(true)}>
                Show Coming Soon
              </Button>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}
