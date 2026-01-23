import { Box, Container, Typography, Paper, Button, Link, List, ListItem, ListItemText, IconButton, Tooltip, TextField, InputAdornment } from '@mui/material';
import { Email as EmailIcon, ContentCopy, Check } from '@mui/icons-material';
import { useState } from 'react';

export default function RSVP() {
  const [copied, setCopied] = useState(false);

  const handleCopySubject = () => {
    navigator.clipboard.writeText('Wedding RSVP');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const rsvpItems = [
    'Number of children attending',
    'Plus one (if applicable)',
    'Total number of guests',
    'Any dietary restrictions or allergies',
  ];

  return (
    <Box
      id="rsvp"
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
          RSVP
        </Typography>

        <Box sx={{ maxWidth: 600, mx: 'auto'   }}>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              color: 'text.primary',
              textAlign: 'center',
            }}
          >
            We can't wait to celebrate with you!
          </Typography>

          <Paper
            elevation={3}
            sx={{
              p: 3,
              mb: 3,
              backgroundColor: 'white',
              borderRadius: 2,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                color: 'text.secondary',
                fontSize: '1rem',
                textAlign: 'center',
              }}
            >
              Please RSVP by emailing us with the subject line:
            </Typography>

            <TextField
              fullWidth
              value="Wedding RSVP"
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title={copied ? 'Copied!' : 'Copy subject line'}>
                      <IconButton
                        onClick={handleCopySubject}
                        edge="end"
                        sx={{
                          color: copied ? 'success.main' : 'primary.main',
                        }}
                      >
                        {copied ? <Check /> : <ContentCopy />}
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'background.paper',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'primary.main',
                  '& fieldset': {
                    borderColor: 'primary.main',
                    borderWidth: 2,
                  },
                },
              }}
            />

            <Typography
              variant="body1"
              sx={{
                mb: 2,
                color: 'text.primary',
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              Please include the following information:
            </Typography>

            <List sx={{ mb: 2 }}>
              {rsvpItems.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    py: 1,
                    px: 2,
                    borderRadius: 1,
                    mb: 1,
                    backgroundColor: 'primary.light',
                    '&:hover': {
                      backgroundColor: 'primary.light',
                      opacity: 0.9,
                    },
                  }}
                >
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      sx: {
                        color: 'text.primary',
                        fontSize: '1rem',
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>

          <Paper
            elevation={4}
            sx={{
              p: 4,
              mb: 3,
              backgroundColor: 'white',
              borderRadius: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                flexWrap: 'wrap',
              }}
            >
              <EmailIcon sx={{ color: 'primary.main', fontSize: 32 }} />
              <Link
                href="mailto:sampbeal@gmail.com"
                sx={{
                  fontSize: '1.5rem',
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                sampbeal@gmail.com
              </Link>
            </Box>
          </Paper>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<EmailIcon />}
              component={Link}
              href="mailto:sampbeal@gmail.com"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                backgroundColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
            >
              Send Email
            </Button>
          </Box>
          <Typography
            variant="body"
            sx={{
              mt: 4,
              fontStyle: 'italic',
              color: 'text.secondary',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Please respond by May 1st, 2025
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
