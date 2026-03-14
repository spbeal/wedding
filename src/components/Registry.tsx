import { Box, Grid, Card, CardContent, CardActions, Button, Typography, Avatar } from '@mui/material';

const registries = [
  {
    id: 'amazon',
    provider: 'Amazon',
    url: 'https://www.amazon.com/wedding/guest-view/3E5OQL7XGRWTU',
    description: 'Our Amazon wedding registry.',
  },
];

export default function Registry() {
  return (
    <Box id="registry" sx={{ py: 6, px: 2, backgroundColor: 'background.paper' }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto', mb: 3, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom sx={{ color: 'secondary.main' }}>
          Registry
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Your presence is the greatest gift, but if you'd like to give something, our registries are linked below.
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {registries.map((r) => (
          <Grid key={r.id}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: 6,
                backgroundColor: 'background.default',
              }}
            >
              <CardContent sx={{ flexGrow: 1, color: 'text.primary' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56, fontWeight: 700 }}>
                    {r.provider[0]}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ color: 'secondary.main' }}>{r.provider}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {r.description}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end', px: 2, pb: 2 }}>
                <Button size="small" variant="contained" color="primary" href={r.url} target="_blank" rel="noopener noreferrer">
                  Open
                </Button>
                <Button
                  size="small"
                  onClick={() => {
                    try {
                      navigator.clipboard.writeText(r.url);
                    } catch (e) {
                      // fallback: do nothing
                    }
                  }}
                >
                  Copy link
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
