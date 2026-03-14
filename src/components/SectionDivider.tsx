import React from 'react';
import { Box } from '@mui/material';

export default function SectionDivider() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', px: 2, py: 3 }}>
      <Box
        sx={{
          width: { xs: 140, sm: 220, md: 320 },
          height: 6,
          borderRadius: 3,
          backgroundColor: 'grey.400',
          opacity: 0.9,
        }}
      />
    </Box>
  );
}
