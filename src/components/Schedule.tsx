import { useState } from 'react';
import { Box, Container, Typography, Paper, Stack, Tabs, Tab, Fade } from '@mui/material';
import {
  Brush as MakeupIcon,
  CameraAlt as PhotoIcon,
  Favorite as CeremonyIcon,
  Restaurant as DinnerIcon,
  Cake as DessertIcon,
  WineBar as ToastIcon,
  Nightlife as DancingIcon,
  Handyman as SetupIcon,
  People as ArrivalIcon,
} from '@mui/icons-material';

type IconType = 'setup' | 'makeup' | 'photo' | 'arrival' | 'ceremony' | 'dinner' | 'dessert' | 'toast' | 'dancing';

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  location: string;
  iconType: IconType;
}

const iconMap: Record<IconType, React.ReactNode> = {
  setup: <SetupIcon sx={{ color: 'white', fontSize: 24 }} />,
  makeup: <MakeupIcon sx={{ color: 'white', fontSize: 24 }} />,
  photo: <PhotoIcon sx={{ color: 'white', fontSize: 24 }} />,
  arrival: <ArrivalIcon sx={{ color: 'white', fontSize: 24 }} />,
  ceremony: <CeremonyIcon sx={{ color: 'white', fontSize: 24 }} />,
  dinner: <DinnerIcon sx={{ color: 'white', fontSize: 24 }} />,
  dessert: <DessertIcon sx={{ color: 'white', fontSize: 24 }} />,
  toast: <ToastIcon sx={{ color: 'white', fontSize: 24 }} />,
  dancing: <DancingIcon sx={{ color: 'white', fontSize: 24 }} />,
};

const guestSchedule: ScheduleItem[] = [
  {
    time: '1:00 PM',
    title: 'Guest Arrival',
    description: 'Doors open, welcome music starts playing, and guests take their seats.',
    location: 'Venue',
    iconType: 'arrival',
  },
  {
    time: '2:00 PM',
    title: 'The Ceremony',
    description: 'Join us as we exchange vows and say our "I dos". Please arrive early to settle in.',
    location: 'Riverfront',
    iconType: 'ceremony',
  },
  {
    time: '4:00 PM',
    title: 'Reception',
    description: 'A delicious feast is served with drinks and celebration.',
    location: 'Reception Hall',
    iconType: 'dinner',
  },
  {
    time: '5:00 PM',
    title: 'Dessert & Family Photos',
    description: 'Cake cutting and sweet treats are served.',
    location: 'Reception Hall',
    iconType: 'dessert',
  },
  {
    time: '5:45 PM onwards',
    title: 'Reception & Celebration',
    description: 'First dance, toasts & speeches, etc...',
    location: 'Reception Hall',
    iconType: 'dancing',
  },
];

const vipSchedule: ScheduleItem[] = [
  {
    time: '9:00 AM',
    title: 'Setup & Decorating',
    description: 'Venue access for early setup, vendor arrivals, and decorations.',
    location: 'Venue',
    iconType: 'setup',
  },
  {
    time: '10:00 AM',
    title: 'Hair & Makeup Prep',
    description: 'Beauty prep begins for the bride, bridesmaids, and family.',
    location: 'Bridal Suite',
    iconType: 'makeup',
  },
  {
    time: '10:30 AM - 11:30 AM',
    title: 'Groomsmen Photo Session',
    description: 'Groomsmen dressed and ready for pre-ceremony photos.',
    location: 'Riverfront',
    iconType: 'photo',
  },
  {
    time: '11:30 AM - 1:30 PM',
    title: 'Bridesmaids Photo Session',
    description: 'Bridesmaids and bride pre-ceremony photos.',
    location: 'Riverfront',
    iconType: 'photo',
  },
  {
    time: '1:00 PM',
    title: 'Guest Arrival',
    description: 'Welcome music begins; ushers guide guests to their seats.',
    location: 'Venue',
    iconType: 'arrival',
  },
  {
    time: '2:00 PM',
    title: 'The Ceremony',
    description: 'Join us as we exchange vows and say our "I dos". Please arrive early to settle in.',
    location: 'Riverfront',
    iconType: 'ceremony',
  },
  {
    time: '4:00 PM',
    title: 'Reception',
    description: 'A delicious feast is served with drinks and celebration.',
    location: 'Reception Hall',
    iconType: 'dinner',
  },
  {
    time: '5:00 PM',
    title: 'Dessert & Family Photos',
    description: 'Cake cutting and sweet treats are served.',
    location: 'Reception Hall',
    iconType: 'dessert',
  },
  {
    time: '5:45 PM onwards',
    title: 'Reception & Celebration',
    description: 'First dance, toasts & speeches, etc...',
    location: 'Reception Hall',
    iconType: 'dancing',
  },
];

export default function Schedule() {
  const [tabValue, setTabValue] = useState(0);
  const activeSchedule = tabValue === 0 ? guestSchedule : vipSchedule;

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
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
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
            Avoid Dusty Lilac and tan, but you can use reasonable discretion.
          </Typography>
        </Box>

        {/* Tab Controls */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Tabs
            value={tabValue}
            onChange={(_, newValue) => setTabValue(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(8px)',
              borderRadius: '30px',
              padding: '4px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid',
              borderColor: 'primary.main',
              '& .MuiTabs-indicator': {
                height: '100%',
                borderRadius: '24px',
                backgroundColor: 'primary.main',
                zIndex: 0,
              },
            }}
          >
            <Tab
              label="Guest Schedule"
              sx={{
                borderRadius: '24px',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                minHeight: '40px',
                px: { xs: 3, sm: 4 },
                zIndex: 1,
                color: 'secondary.main',
                transition: 'all 0.3s ease',
                '&.Mui-selected': {
                  color: '#ffffff',
                },
              }}
            />
            <Tab
              label="Wedding Party & VIPs"
              sx={{
                borderRadius: '24px',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                minHeight: '40px',
                px: { xs: 3, sm: 4 },
                zIndex: 1,
                color: 'secondary.main',
                transition: 'all 0.3s ease',
                '&.Mui-selected': {
                  color: '#ffffff',
                },
              }}
            />
          </Tabs>
        </Box>

        {/* VIP Helpful Note */}
        <Box sx={{ height: 28, mb: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {tabValue === 1 && (
            <Fade in={tabValue === 1} timeout={300}>
              <Typography
                variant="body2"
                align="center"
                sx={{
                  color: 'secondary.main',
                  fontStyle: 'italic',
                  opacity: 0.9,
                  fontWeight: 500,
                }}
              >
                ✨ Detailed timeline for the wedding party, family members, and vendors.
              </Typography>
            </Fade>
          )}
        </Box>

        {/* Timeline */}
        <Fade in={true} key={tabValue} timeout={400}>
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            <Stack spacing={4}>
              {activeSchedule.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    gap: { xs: 2, sm: 3 },
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
                  {/* Icon Circle */}
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
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    {iconMap[item.iconType]}
                  </Box>

                  {/* Content Card */}
                  <Box sx={{ flex: 1, pt: 0.5 }}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 3,
                        backgroundColor: 'white',
                        borderRadius: 2,
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12)',
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 700,
                          mb: 0.5,
                        }}
                      >
                        {item.time}
                      </Typography>
                      <Typography variant="h5" sx={{ mb: 1, color: 'secondary.main', fontWeight: 600 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 1.5, color: 'text.secondary', lineHeight: 1.6 }}>
                        {item.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                        }}
                      >
                        📍 {item.location}
                      </Typography>
                    </Paper>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
