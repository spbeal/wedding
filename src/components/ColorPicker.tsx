import { Box, Paper, Typography, TextField, Button, Stack, IconButton, Collapse } from '@mui/material';
import { Palette, Close } from '@mui/icons-material';
import { useState } from 'react';

interface ColorPickerProps {
  onColorChange: (colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  }) => void;
}

export default function ColorPicker({ onColorChange }: ColorPickerProps) {
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState({
    primary: '#b19cd9', // Lighter purple
    secondary: '#6a4c93', // Darker purple
    background: '#ffffff', // White
    text: '#1a1a1a', // Black
  });

  const handleColorChange = (key: keyof typeof colors, value: string) => {
    const newColors = { ...colors, [key]: value };
    setColors(newColors);
    onColorChange(newColors);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1000,
      }}
    >
      <Collapse in={open}>
        <Paper
          elevation={8}
          sx={{
            p: 3,
            mb: 2,
            minWidth: 280,
            backgroundColor: 'background.paper',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Palette /> Theme Colors
            </Typography>
            <IconButton size="small" onClick={() => setOpen(false)}>
              <Close />
            </IconButton>
          </Box>
          <Stack spacing={2}>
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Primary (Purple)
              </Typography>
              <TextField
                type="color"
                value={colors.primary}
                onChange={(e) => handleColorChange('primary', e.target.value)}
                fullWidth
                size="small"
                sx={{
                  '& input': {
                    height: 40,
                    cursor: 'pointer',
                  },
                }}
              />
              <TextField
                value={colors.primary}
                onChange={(e) => handleColorChange('primary', e.target.value)}
                size="small"
                fullWidth
                sx={{ mt: 1 }}
                placeholder="#b19cd9"
              />
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Secondary (Dark Purple)
              </Typography>
              <TextField
                type="color"
                value={colors.secondary}
                onChange={(e) => handleColorChange('secondary', e.target.value)}
                fullWidth
                size="small"
                sx={{
                  '& input': {
                    height: 40,
                    cursor: 'pointer',
                  },
                }}
              />
              <TextField
                value={colors.secondary}
                onChange={(e) => handleColorChange('secondary', e.target.value)}
                size="small"
                fullWidth
                sx={{ mt: 1 }}
                placeholder="#6a4c93"
              />
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Background (White)
              </Typography>
              <TextField
                type="color"
                value={colors.background}
                onChange={(e) => handleColorChange('background', e.target.value)}
                fullWidth
                size="small"
                sx={{
                  '& input': {
                    height: 40,
                    cursor: 'pointer',
                  },
                }}
              />
              <TextField
                value={colors.background}
                onChange={(e) => handleColorChange('background', e.target.value)}
                size="small"
                fullWidth
                sx={{ mt: 1 }}
                placeholder="#ffffff"
              />
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Text (Black)
              </Typography>
              <TextField
                type="color"
                value={colors.text}
                onChange={(e) => handleColorChange('text', e.target.value)}
                fullWidth
                size="small"
                sx={{
                  '& input': {
                    height: 40,
                    cursor: 'pointer',
                  },
                }}
              />
              <TextField
                value={colors.text}
                onChange={(e) => handleColorChange('text', e.target.value)}
                size="small"
                fullWidth
                sx={{ mt: 1 }}
                placeholder="#1a1a1a"
              />
            </Box>
          </Stack>
        </Paper>
      </Collapse>
      <Button
        variant="contained"
        onClick={() => setOpen(!open)}
        sx={{
          minWidth: 56,
          width: 56,
          height: 56,
          borderRadius: '50%',
          backgroundColor: 'primary.main',
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
        }}
      >
        <Palette />
      </Button>
    </Box>
  );
}
